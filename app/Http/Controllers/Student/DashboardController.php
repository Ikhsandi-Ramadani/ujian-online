<?php

namespace App\Http\Controllers\Student;

use App\Models\Grade;
use App\Models\Student;
use App\Models\ExamGroup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $student = Student::findorfail(auth()->guard('student')->user()->id);

        //get exam groups
        $exam_groups = ExamGroup::with('exam.lesson', 'exam_session', 'exam.teacher', 'student')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->get();

        $cekData = ExamGroup::where('student_id', auth()->guard('student')->user()->id)->count();

        if ($cekData > 0) {
            $last_exam = ExamGroup::with('exam.lesson', 'exam_session', 'exam.teacher', 'student')
                ->where('student_id', auth()->guard('student')->user()->id)
                ->latest()->first();
            $last_grade = Grade::where('exam_id', $last_exam->exam_id)
                ->where('exam_session_id', $last_exam->exam_session_id)
                ->where('student_id', auth()->guard('student')->user()->id)
                ->latest()->first();

            $history = Grade::with('exam', 'exam_session')->where('student_id', auth()->guard('student')->user()->id)
                ->where('start_time', '!=', null)
                ->where('end_time', '!=', null)
                ->orderBy('exam_id', 'DESC')
                ->latest()->get();
        } else {
            $last_exam = null;
            $last_grade = null;
            $history = null;
        }


        //last exam


        //return with inertia
        return inertia('Student/Dashboard/Index', [
            'student' => $student,
            'last_exam' => $last_exam,
            'last_grade' => $last_grade,
            'history' => $history,
        ]);
    }

    public function upload(Request $request)
    {
        $foto = $request->foto;
        $destinationPath = 'foto/';
        $profileImage = date('YmdHis') . "." . $foto->getClientOriginalExtension();
        $foto->move($destinationPath, $profileImage);

        $student = Student::findorfail(auth()->guard('student')->user()->id);
        $student->foto = $profileImage;
        $student->save();

        //return with inertia
        return inertia('Student/Dashboard/Index', [
            'student' => $student
        ]);
    }

    // Generate PDF
    public function export($id)
    {
        $grade = Grade::find($id);

        return view('export', compact('grade'));
    }
}
