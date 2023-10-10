<?php

namespace App\Http\Controllers\Teacher;

use App\Models\QuestionBank;
use Illuminate\Http\Request;
use App\Imports\QuestionsImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class QuestionBankController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teacher = auth('teacher')->user();
        //get Question
        $questions = QuestionBank::where('teacher_id', $teacher->id)->when(request()->q, function ($questions) {
            $questions = $questions->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);
        //append query string to pagination links
        $questions->appends(['q' => request()->q]);
        //render with inertia
        return inertia('Teacher/QuestionBanks/Index', [
            'questions' => $questions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //render with inertia
        return inertia('Teacher/QuestionBanks/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //validate request
        $request->validate([
            'question'          => 'required',
            'option_1'          => 'required',
            'option_2'          => 'required',
            'option_3'          => 'required',
            'option_4'          => 'required',
            'option_5'          => 'required',
            'answer'            => 'required',
        ]);

        //create question
        QuestionBank::create([
            'teacher_id'        => auth('teacher')->user()->id,
            'question'          => $request->question,
            'option_1'          => $request->option_1,
            'option_2'          => $request->option_2,
            'option_3'          => $request->option_3,
            'option_4'          => $request->option_4,
            'option_5'          => $request->option_5,
            'answer'            => $request->answer,
        ]);

        //redirect
        return redirect()->route('teacher.question_banks.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $question = QuestionBank::findOrFail($id);
        //render with inertia
        return inertia('Teacher/QuestionBanks/Edit', [
            'question' => $question,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuestionBank $questionBank)
    {
        //validate request
        $request->validate([
            'question'          => 'required',
            'option_1'          => 'required',
            'option_2'          => 'required',
            'option_3'          => 'required',
            'option_4'          => 'required',
            'option_5'          => 'required',
            'answer'            => 'required',
        ]);

        //update question
        $questionBank->update([
            'question'          => $request->question,
            'option_1'          => $request->option_1,
            'option_2'          => $request->option_2,
            'option_3'          => $request->option_3,
            'option_4'          => $request->option_4,
            'option_5'          => $request->option_5,
            'answer'            => $request->answer,
        ]);

        //redirect
        return redirect()->route('teacher.question_banks.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $question = QuestionBank::findOrFail($id);
        //delete question
        $question->delete();
        //redirect
        return redirect()->route('teacher.question_banks.index');
    }

    /**
     * import
     *
     * @return void
     */
    public function import()
    {
        return inertia('Teacher/QuestionBanks/Import');
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
        Excel::import(new QuestionsImport(), $request->file('file'));
        //redirect
        return redirect()->route('teacher.question_banks.index');
    }
}
