<?php

namespace App\Http\Controllers\Teacher;

use App\Models\Exam;
use App\Models\Lesson;
use App\Models\Question;
use App\Models\ExamSession;
use App\Models\QuestionBank;
use Illuminate\Http\Request;
use App\Models\QuestionGroup;
use App\Imports\QuestionsImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get exams
        $exams = Exam::when(request()->q, function ($exams) {
            $exams = $exams->where('title', 'like', '%' . request()->q . '%');
        })->with('lesson', 'questions')->latest()->paginate(5);
        //append query string to pagination links
        $exams->appends(['q' => request()->q]);
        //render with inertia
        return inertia('Teacher/Exams/Index', [
            'exams' => $exams,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $teacher = auth('teacher')->user();
        //get lessons
        $lessons = Lesson::all();
        $questions = QuestionBank::where('teacher_id', $teacher->id)->latest()->paginate(5);
        //render with inertia
        return inertia('Teacher/Exams/Create', [
            'lessons' => $lessons,
            'questions' => $questions
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
            'title'             => 'required',
            'lesson_id'         => 'required|integer',
            'duration'          => 'required|integer',
            'description'       => 'required',
            'random_question'   => 'required',
            'random_answer'     => 'required',
            'show_answer'       => 'required',
            'kkm'               => 'required'
        ]);
        //create exam
        $exam = new Exam();
        $exam->title        = $request->title;
        $exam->lesson_id    = $request->lesson_id;
        $exam->teacher_id   = auth('teacher')->user()->id;
        $exam->duration     = $request->duration;
        $exam->description  = $request->description;
        $exam->random_question  = $request->random_question;
        $exam->random_answer    = $request->random_answer;
        $exam->show_answer  = $request->show_answer;
        $exam->kkm          = $request->kkm;
        $exam->save();
        //redirect
        return redirect()->route('teacher.exams.show', $exam->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //get exam
        $exam = Exam::with('lesson')->findOrFail($id);
        //get relation questions with pagination
        $exam->setRelation('questions', $exam->questions()->with('question_bank', 'question_bank.question_group')->paginate(5));
        //render with inertia
        return inertia('Teacher/Exams/Show', [
            'exam' => $exam,
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
        //get exam
        $exam = Exam::findOrFail($id);
        //get lessons
        $lessons = Lesson::all();
        //render with inertia
        return inertia('Teacher/Exams/Edit', [
            'exam' => $exam,
            'lessons' => $lessons,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exam $exam)
    {
        //validate request
        $request->validate([
            'title'             => 'required',
            'lesson_id'         => 'required|integer',
            'duration'          => 'required|integer',
            'description'       => 'required',
            'random_question'   => 'required',
            'random_answer'     => 'required',
            'show_answer'       => 'required',
            'kkm'               => 'required'
        ]);
        //update exam
        $exam->update([
            'title'             => $request->title,
            'lesson_id'         => $request->lesson_id,
            'teacher_id'        => auth('teacher')->user()->id,
            'duration'          => $request->duration,
            'description'       => $request->description,
            'random_question'   => $request->random_question,
            'random_answer'     => $request->random_answer,
            'show_answer'       => $request->show_answer,
            'kkm'               => $request->kkm
        ]);
        //redirect
        return redirect()->route('teacher.exams.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //get exam
        $exam = Exam::findOrFail($id);
        //delete exam
        $exam->delete();
        //redirect
        return redirect()->route('teacher.exams.index');
    }

    /**
     * createEnrolle
     *
     * @param  mixed $exam_session
     * @return void
     */
    public function createEnrolle(Exam $exam)
    {
        $teacher = auth('teacher')->user();

        // get Question Group
        $question_groups = QuestionGroup::where('teacher_id', $teacher->id)->get();

        //render with inertia
        return inertia('Teacher/ExamQuestions/Create', [
            'exam'          => $exam,
            'question_groups' => $question_groups,
            'questions'      => [],
        ]);
    }

    public function filterEnrolle(Request $request)
    {
        $this->validate($request, [
            'exam_id'           => 'required',
            'question_group_id' => 'required',
            'level'             => 'required'
        ]);

        $teacher = auth('teacher')->user();
        $exam = Exam::findOrFail($request->exam_id);

        // get Question Group
        $question_groups = QuestionGroup::where('teacher_id', $teacher->id)->get();
        $question_group = QuestionGroup::where('teacher_id', $teacher->id)->where('id', $request->question_group_id)->first();

        //get question already enrolled
        $questions_enrolled = Question::where('exam_id', $exam->id)->pluck('question_bank_id')->all();

        //get questions
        $questions = QuestionBank::whereNotIn('id', $questions_enrolled)->where('question_group_id', $question_group->id)->where('level', $request->level)->with('question_group')->orderBy('question_group_id', 'desc')->get();

        //render with inertia
        return inertia('Teacher/ExamQuestions/Create', [
            'exam'          => $exam,
            'question_groups' => $question_groups,
            'questions'      => $questions,
        ]);
    }

    /**
     * storeEnrolle
     *
     * @param  mixed $exam
     * @return void
     */
    public function storeEnrolle(Request $request, Exam $exam)
    {
        //validate request
        $request->validate([
            'question_id'    => 'required',
        ]);

        //create exam_group
        foreach ($request->question_id as $question_id) {
            //select question
            $question = QuestionBank::findOrFail($question_id);
            //create exam_group
            Question::create([
                'exam_id'               => $request->exam_id,
                'question_bank_id'      => $question->id,
            ]);
        }
        //redirect
        return redirect()->route('teacher.exams.show', $exam->id);
    }
    /**
     * destroyEnrolle
     *
     * @param  mixed $exam_session
     * @param  mixed $exam_group
     * @return void
     */
    public function destroyEnrolle(Exam $exam, $id)
    {
        //delete question
        $question = Question::findOrFail($id);
        $question->delete();

        //redirect
        return redirect()->route('teacher.exams.show', $exam->id);
    }

    /**
     * generateEnrolle
     *
     * @param  mixed $exam
     * @return void
     */
    public function generateEnrolle(Request $request, Exam $exam)
    {
        //validate request
        $request->validate([
            'exam_id'           => 'required',
            'question_group_id' => 'required',
            'level'             => 'required',
            'jumlah'            => 'required'
        ]);

        $teacher = auth('teacher')->user();
        $exam = Exam::findOrFail($request->exam_id);

        //get question already enrolled
        $questions_enrolled = Question::where('exam_id', $exam->id)->pluck('question_bank_id')->all();

        //get question
        $questions = QuestionBank::whereNotIn('id', $questions_enrolled)->where('teacher_id', $teacher->id)->where('question_group_id', $request->question_group_id)->where('level', $request->level)->inRandomOrder()->limit($request->jumlah)->get();

        //create exam_group
        foreach ($questions as $question) {
            //create exam_group
            Question::create([
                'exam_id'               => $exam->id,
                'question_bank_id'      => $question->id,
            ]);
        }

        //redirect
        return redirect()->route('teacher.exams.show', $exam->id);
    }
}
