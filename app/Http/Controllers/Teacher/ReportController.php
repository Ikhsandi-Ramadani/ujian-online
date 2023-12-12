<?php

namespace App\Http\Controllers\Teacher;

use Carbon\Carbon;
use App\Models\Exam;
use App\Models\Grade;
use App\Models\Student;
use App\Models\ExamSession;
use Illuminate\Http\Request;
use App\Exports\GradesExport;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //geta ll exams
        $exams = Exam::with('lesson')->get();

        return inertia('Teacher/Reports/Index', [
            'exams'         => $exams,
            'grades'        => []
        ]);
    }

    /**
     * filter
     *
     * @param  mixed $request
     * @return void
     */
    public function filter(Request $request)
    {
        $this->validate($request, [
            'exam_id'       => 'required',
        ]);
        //geta ll exams
        $exams = Exam::with('lesson')->get();
        //get exam
        $exam = Exam::with('lesson')
            ->where('id', $request->exam_id)
            ->first();
        if ($exam) {
            //get exam session
            $exam_session = ExamSession::where('exam_id', $exam->id)->first();
            //get grades / nilai
            $grades = Grade::with('student', 'exam.lesson', 'exam_session')
                ->where('exam_id', $exam->id)
                ->where('exam_session_id', $exam_session->id)
                ->where('start_time', '!=', null)
                ->where('end_time', '!=', null)
                ->get();
        } else {
            $grades = [];
        }
        return inertia('Teacher/Reports/Index', [
            'exams'         => $exams,
            'grades'         => $grades,
        ]);
    }

    /**
     * export
     *
     * @param  mixed $request
     * @return void
     */
    public function export(Request $request)
    {
        //get exam
        $exam = Exam::with('lesson')
            ->where('id', $request->exam_id)
            ->first();

        //get exam session
        $exam_session = ExamSession::where('exam_id', $exam->id)->first();

        //get grades / nilai
        $grades = Grade::with('student', 'exam.lesson', 'exam_session')
            ->where('exam_id', $exam->id)
            ->where('exam_session_id', $exam_session->id)
            ->get();

        return Excel::download(new GradesExport($grades), 'grade : ' . $exam->title . ' — ' . $exam->lesson->title . ' — ' . Carbon::now() . '.xlsx');
    }

    public function history($student_id)
    {
        $history = Grade::with('exam', 'exam_session')->where('student_id', auth()->guard('student')->user()->id)
            ->where('start_time', '!=', null)
            ->where('end_time', '!=', null)
            ->orderBy('exam_id', 'DESC')
            ->latest()->get();
        $student = Student::findorfail($student_id);

        return inertia('Teacher/Reports/History', [
            'student' => $student,
            'history' => $history,
        ]);
    }
}
