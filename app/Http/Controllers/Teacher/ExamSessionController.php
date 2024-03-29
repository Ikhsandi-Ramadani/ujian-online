<?php

namespace App\Http\Controllers\Teacher;

use Carbon\Carbon;
use App\Models\Exam;
use App\Mail\SendMail;
use App\Models\Student;
use App\Mail\SampleMail;
use App\Models\ExamGroup;
use App\Models\ExamSession;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class ExamSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get exam_sessions
        $exam_sessions = ExamSession::when(request()->q, function ($exam_sessions) {
            $exam_sessions = $exam_sessions->where('title', 'like', '%' . request()->q . '%');
        })->with('exam.lesson', 'exam_groups')->latest()->paginate(5);
        //append query string to pagination links
        $exam_sessions->appends(['q' => request()->q]);
        //render with inertia
        return inertia('Teacher/ExamSessions/Index', [
            'exam_sessions' => $exam_sessions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //get exams
        $exams = Exam::all();
        //render with inertia
        return inertia('Teacher/ExamSessions/Create', [
            'exams' => $exams,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validate request
        $request->validate([
            'title'         => 'required',
            'exam_id'       => 'required',
            'start_time'    => 'required',
            'end_time'      => 'required',
        ]);
        //create exam_session
        ExamSession::create([
            'title'         => $request->title,
            'exam_id'       => $request->exam_id,
            'start_time'    => date('Y-m-d H:i:s', strtotime($request->start_time)),
            'end_time'      => date('Y-m-d H:i:s', strtotime($request->end_time)),
        ]);
        //redirect
        return redirect()->route('teacher.exam_sessions.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $exam_session
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //get exam_session
        $exam_session = ExamSession::with('exam.lesson')->findOrFail($id);
        //get exam
        $exam = Exam::with('lesson')->findOrFail($exam_session->exam_id);
        //get relation questions with pagination
        $exam->setRelation('questions', $exam->questions()->with('question_bank', 'question_bank.question_group')->paginate(5));

        //get relation exam_groups with pagination
        $exam_session->setRelation('exam_groups', $exam_session->exam_groups()->with('student')->paginate(5));
        //render with inertia
        return inertia('Teacher/ExamSessions/Show', [
            'exam_session'  => $exam_session,
            'exam'  => $exam,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //get exam_session
        $exam_session = ExamSession::findOrFail($id);
        //get exams
        $exams = Exam::all();
        //render with inertia
        return inertia('Teacher/ExamSessions/Edit', [
            'exam_session'  => $exam_session,
            'exams'         => $exams,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ExamSession $exam_session)
    {
        //validate request
        $request->validate([
            'title'         => 'required',
            'exam_id'       => 'required',
            'start_time'    => 'required',
            'end_time'      => 'required',
        ]);

        $newStartTime = date('Y-m-d H:i:s', strtotime($request->start_time));
        $newEndTime = date('Y-m-d H:i:s', strtotime($request->end_time));

        if ($exam_session->start_time !== $newStartTime || $exam_session->end_time !== $newEndTime) {
            // Send Email
            $ujian = $exam_session->exam->name;
            $sesi = $exam_session->title;
            $waktu_mulai = Carbon::parse($newStartTime)->isoFormat('D MMMM Y') . ', Pukul : ' . Carbon::parse($newStartTime)->format('H:i');
            $waktu_akhir = Carbon::parse($newEndTime)->isoFormat('D MMMM Y') . ', Pukul : ' . Carbon::parse($newEndTime)->format('H:i');

            $mailData = [
                'ujian' => $ujian . ' ' . $sesi,
                'waktu_mulai' => $waktu_mulai,
                'waktu_akhir' => $waktu_akhir,
            ];

            $exam_groups = ExamGroup::where('exam_session_id', $exam_session->id)->where('exam_id', $exam_session->exam->id)->get();
            foreach ($exam_groups as $data) {
                $student = Student::where('id', $data->student_id)->first();
                Mail::to($student->nim . '@uin-alauddin.ac.id')->send(new SendMail($mailData));
            }
        }

        //update exam_session
        $exam_session->update([
            'start_time_before'    => $exam_session->start_time,
            'end_time_before'      =>  $exam_session->end_time,

            'title'         => $request->title,
            'exam_id'       => $request->exam_id,
            'start_time'    => date('Y-m-d H:i:s', strtotime($request->start_time)),
            'end_time'      => date('Y-m-d H:i:s', strtotime($request->end_time)),
        ]);


        //redirect
        return redirect()->route('teacher.exam_sessions.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //get exam_session
        $exam_session = ExamSession::findOrFail($id);
        //delete exam_session
        $exam_session->delete();
        //redirect
        return redirect()->route('teacher.exam_sessions.index');
    }

    /**
     * createEnrolle
     *
     * @param  mixed $exam_session
     * @return void
     */
    public function createEnrolle(ExamSession $exam_session)
    {
        //get exams
        $exam = $exam_session->exam;

        //get exam_session
        $exam_session = ExamSession::with('exam.lesson')->findOrFail($exam_session->id);

        //get students already enrolled
        $students_enrolled = ExamGroup::where('exam_id', $exam->id)->where('exam_session_id', $exam_session->id)->pluck('student_id')->all();

        //get students
        $students = Student::whereNotIn('id', $students_enrolled)->get();

        //render with inertia
        return inertia('Teacher/ExamGroups/Create', [
            'exam'          => $exam,
            'exam_session'  => $exam_session,
            'students'      => $students,
        ]);
    }

    /**
     * storeEnrolle
     *
     * @param  mixed $exam_session
     * @return void
     */
    public function storeEnrolle(Request $request, ExamSession $exam_session)
    {
        //validate request
        $request->validate([
            'student_id'    => 'required',
        ]);

        //create exam_group
        foreach ($request->student_id as $student_id) {
            //select student
            $student = Student::findOrFail($student_id);
            //create exam_group
            ExamGroup::create([
                'exam_id'         => $request->exam_id,
                'exam_session_id' => $exam_session->id,
                'student_id'      => $student->id,
            ]);
        }
        //redirect
        return redirect()->route('teacher.exam_sessions.index');
    }
    /**
     * destroyEnrolle
     *
     * @param  mixed $exam_session
     * @param  mixed $exam_group
     * @return void
     */
    public function destroyEnrolle(ExamSession $exam_session, ExamGroup $exam_group)
    {
        //delete exam_group
        $exam_group->delete();

        //redirect
        return redirect()->route('teacher.exam_sessions.index');
    }

    public function peserta($id)
    {
        //get exam_session
        $exam_session = ExamSession::with('exam.lesson')->findOrFail($id);
        //get relation exam_groups with pagination
        $exam_session->setRelation('exam_groups', $exam_session->exam_groups()->with('student')->paginate(5));
        //render with inertia
        return inertia('Teacher/ExamSessions/Peserta', [
            'exam_session'  => $exam_session,
        ]);
    }
}
