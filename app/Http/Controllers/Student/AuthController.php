<?php

namespace App\Http\Controllers\Student;

use App\Models\Grade;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Exam;

class AuthController extends Controller
{
    public function home()
    {
        $grades = Grade::with('student', 'exam', 'exam_session')
            ->groupBy('student_id')
            ->select('student_id', \DB::raw('count(*) as total_exams'))
            ->orderBy('total_exams', 'asc')
            ->get();

        // Mengambil 3 siswa dengan jumlah ujian terendah
        $bestStudent = $grades->take(3);
        // dd($bestStudent);


        // Mengambil semua data ujian
        $exams = Exam::has('grade')->get();

        $data = [];
        // Looping melalui setiap ujian
        foreach ($exams as $exam) {
            // Mendapatkan siswa terbaik untuk setiap mata pelajaran
            $highestGrades = Grade::where('exam_id', $exam->id)
                ->groupBy('student_id')
                ->select('student_id', \DB::raw('MAX(grade) as max_grade'))
                ->orderByDesc('max_grade')
                ->get();

            $highestGrades = $highestGrades->take(1);
            foreach ($highestGrades as $val) {
                $student = Student::find($val->student_id);
                $data[] = ['name' => $student->name, "nim" => $student->nim, "foto" => $student->foto, "exam_name" => $exam->title, "nilai" => $val->max_grade];
            }
        }

        return \Inertia\Inertia::render('Student/Home/Index', ['data' => $data]);
    }

    public function login()
    {
        //cek session student
        if (auth()->guard('student')->check() && auth()->guard('student')->user()->status == 'approve') {
            return redirect()->route('student.dashboard');
        }
        //return view login
        return \Inertia\Inertia::render('Student/Login/Index');
    }

    public function postLogin(Request $request)
    {
        //validate the form data
        $this->validate($request, [
            'nim'      => 'required',
            'password'  => 'required',
        ]);

        //cek nim dan password
        $student = Student::where([
            'nim'      => $request->nim,
            'password'  => $request->password
        ])->first();

        if (!$student) {
            return redirect()->back()->with('error', 'NIM atau Password salah');
        } elseif ($student->status !== 'approve') {
            return redirect()->back()->with('error', 'Akun Belum Di Approve');
        }

        //login the user
        auth()->guard('student')->login($student);

        //redirect to dashboard
        return redirect()->route('student.dashboard');
    }

    public function register()
    {
        return \Inertia\Inertia::render('Student/Register/Index');;
    }

    public function postRegister(Request $request)
    {
        //validate request
        $request->validate([
            'name'          => 'required|string|max:255',
            'nim'          => 'required|unique:students',
            'gender'        => 'required|string',
            'password'      => 'required|confirmed',
            'foto'          => 'required|image'
        ]);

        $foto = $request->foto;
        $destinationPath = 'foto/';
        $profileImage = date('YmdHis') . "." . $foto->getClientOriginalExtension();
        $foto->move($destinationPath, $profileImage);

        //create student
        Student::create([
            'name'          => $request->name,
            'nim'          => $request->nim,
            'gender'        => $request->gender,
            'password'      => $request->password,
            'foto'          => $profileImage
        ]);
        //redirect
        return redirect('/');
    }
}
