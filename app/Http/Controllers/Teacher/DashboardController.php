<?php

namespace App\Http\Controllers\Teacher;

use App\Models\Exam;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\ExamSession;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //count students
        $students = Student::count();
        //count exams
        $exams = Exam::count();
        //count exam sessions
        $exam_sessions = ExamSession::count();
        //count teachers
        $teachers = Teacher::count();

        return inertia('Teacher/Dashboard/Index', [
            'students'      => $students,
            'exams'         => $exams,
            'exam_sessions' => $exam_sessions,
            'teachers'      => $teachers,
        ]);
    }
}
