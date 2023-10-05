<?php

namespace App\Http\Controllers\Admin;

use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Imports\TeachersImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get teachers
        $teachers = Teacher::when(request()->q, function ($teachers) {
            $teachers = $teachers->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);
        //append query string to pagination links
        $teachers->appends(['q' => request()->q]);
        //render with inertia
        return inertia('Admin/Teachers/Index', [
            'teachers' => $teachers,
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
        return inertia('Admin/Teachers/Create');
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
            'nip'          => 'required|unique:teachers',
            'gender'        => 'required|string',
            'password'      => 'required|confirmed',
        ]);
        //create teacher
        Teacher::create([
            'name'          => $request->name,
            'nip'          => $request->nip,
            'gender'        => $request->gender,
            'password'      => $request->password,
        ]);
        //redirect
        return redirect()->route('admin.teachers.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //get teacher
        $teacher = Teacher::findOrFail($id);
        //render with inertia
        return inertia('Admin/Teachers/Edit', [
            'teacher' => $teacher,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Teacher $teacher)
    {
        //validate request
        $request->validate([
            'name'          => 'required|string|max:255',
            'nip'          => 'required|unique:teachers,nip,' . $teacher->id,
            'gender'        => 'required|string',
            'password'      => 'confirmed'
        ]);
        //check passwordy
        if ($request->password == "") {
            //update teacher without password
            $teacher->update([
                'name'          => $request->name,
                'nip'          => $request->nip,
                'gender'        => $request->gender,
            ]);
        } else {
            //update teacher with password
            $teacher->update([
                'name'          => $request->name,
                'nip'          => $request->nip,
                'gender'        => $request->gender,
                'password'      => $request->password,
            ]);
        }
        //redirect
        return redirect()->route('admin.teachers.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //get teacher
        $teacher = Teacher::findOrFail($id);
        //delete teacher
        $teacher->delete();
        //redirect
        return redirect()->route('admin.teachers.index');
    }

    /**
     * import
     *
     * @return void
     */
    public function import()
    {
        return inertia('Admin/Teachers/Import');
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
        Excel::import(new TeachersImport(), $request->file('file'));
        //redirect
        return redirect()->route('admin.teachers.index');
    }
}
