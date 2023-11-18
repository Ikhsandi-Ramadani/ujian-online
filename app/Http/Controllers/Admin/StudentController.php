<?php

namespace App\Http\Controllers\Admin;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Imports\StudentsImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get students
        $students = Student::when(request()->q, function ($students) {
            $students = $students->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);
        //append query string to pagination links
        $students->appends(['q' => request()->q]);
        //render with inertia
        return inertia('Admin/Students/Index', [
            'students' => $students,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //render with inertia
        return inertia('Admin/Students/Create');
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
            'name'          => 'required|string|max:255',
            'nim'          => 'required|unique:students',
            'gender'        => 'required|string',
            'password'      => 'required|confirmed',
        ]);
        //create student
        Student::create([
            'name'          => $request->name,
            'nim'          => $request->nim,
            'gender'        => $request->gender,
            'password'      => $request->password,
        ]);
        //redirect
        return redirect()->route('admin.students.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //get student
        $student = Student::findOrFail($id);
        //render with inertia
        return inertia('Admin/Students/Edit', [
            'student' => $student,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //validate request
        $request->validate([
            'name'          => 'required|string|max:255',
            'nim'          => 'required|unique:students,nim,' . $student->id,
            'gender'        => 'required|string',
            'password'      => 'confirmed',
            'status'        => 'required'
        ]);
        //check passwordy
        if ($request->password == "") {
            //update student without password
            $student->update([
                'name'          => $request->name,
                'nim'          => $request->nim,
                'gender'        => $request->gender,
                'status'        => $request->status,
            ]);
        } else {
            //update student with password
            $student->update([
                'name'          => $request->name,
                'nim'          => $request->nim,
                'gender'        => $request->gender,
                'password'      => $request->password,
                'status'      => $request->status,
            ]);
        }
        //redirect
        return redirect()->route('admin.students.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //get student
        $student = Student::findOrFail($id);
        //delete student
        $student->delete();
        //redirect
        return redirect()->route('admin.students.index');
    }

    /**
     * import
     *
     * @return void
     */
    public function import()
    {
        return inertia('Admin/Students/Import');
    }

    /**
     * storeImport
     *
     * @param  mixed $request
     * @return void
     */
    public function storeImport(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|mimes:csv,xls,xlsx'
        ]);
        // import data
        Excel::import(new StudentsImport(), $request->file('file'));
        //redirect
        return redirect()->route('admin.students.index');
    }
}
