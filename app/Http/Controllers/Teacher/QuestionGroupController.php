<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\QuestionGroup;
use Illuminate\Http\Request;

class QuestionGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teacher = auth('teacher')->user();
        //get question_groups
        $question_groups = QuestionGroup::where('teacher_id', $teacher->id)->when(request()->q, function ($question_groups) {
            $question_groups = $question_groups->where('name', 'like', '%' . request()->q . '%');
        })->with('question_bank')->latest()->paginate(5);

        //append query string to pagination links
        $question_groups->appends(['q' => request()->q]);

        //render with inertia
        return inertia('Teacher/QuestionGroups/Index', [
            'question_groups' => $question_groups,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Teacher/QuestionGroups/Create');
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
            'name' => 'required|string|unique:question_groups',
        ]);

        $teacher = auth('teacher')->user();
        //create question_group
        QuestionGroup::create([
            'name' => $request->name,
            'teacher_id' => $teacher->id
        ]);

        //redirect
        return redirect()->route('teacher.question_groups.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //get question_group
        $question_group = QuestionGroup::findOrFail($id);

        //render with inertia
        return inertia('Teacher/QuestionGroups/Edit', [
            'question_group' => $question_group,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, QuestionGroup $question_group)
    {
        //validate request
        $request->validate([
            'name' => 'required|string|unique:question_groups,name,' . $question_group->id,
        ]);

        //update question_group
        $question_group->update([
            'name' => $request->name,
        ]);

        //redirect
        return redirect()->route('teacher.question_groups.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //get question_group
        $question_group = QuestionGroup::findOrFail($id);

        //delete question_group
        $question_group->delete();

        //redirect
        return redirect()->route('teacher.question_groups.index');
    }
}
