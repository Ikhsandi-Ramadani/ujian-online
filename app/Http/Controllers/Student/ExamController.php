<?php

namespace App\Http\Controllers\Student;

use App\Models\Grade;
use App\Models\Answer;
use App\Models\Question;
use App\Models\ExamGroup;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use App\Models\QuestionBank;

class ExamController extends Controller
{

    public function index()
    {
        //get exam groups
        $exam_groups = ExamGroup::with('exam.lesson', 'exam_session', 'exam.teacher', 'student')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->get();

        //define variable array
        $data = [];

        //get nilai
        foreach ($exam_groups as $exam_group) {

            //get data nilai / grade
            $grade = Grade::where('exam_id', $exam_group->exam_id)
                ->where('exam_session_id', $exam_group->exam_session_id)
                ->where('student_id', auth()->guard('student')->user()->id)
                ->latest()->first();

            //jika nilai / grade kosong, maka buat baru
            if ($grade == null) {

                //create defaul grade
                $grade = new Grade();
                $grade->exam_id         = $exam_group->exam_id;
                $grade->exam_session_id = $exam_group->exam_session_id;
                $grade->student_id      = auth()->guard('student')->user()->id;
                $grade->duration        = $exam_group->exam->duration * 60000;
                $grade->total_correct   = 0;
                $grade->grade           = 0;
                $grade->save();
            }

            $data[] = [
                'exam_group' => $exam_group,
                'grade'      => $grade
            ];
        }

        //return with inertia
        return inertia('Student/Exams/Index', [
            'exam_groups' => $data,
        ]);
    }
    /**
     * confirmation
     *
     * @param  mixed $id
     * @return void
     */
    public function confirmation($id)
    {
        //get exam group
        $exam_group = ExamGroup::with('exam.lesson', 'exam_session', 'student')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('id', $id)
            ->first();

        //get grade / nilai
        $grade = Grade::where('exam_id', $exam_group->exam->id)
            ->where('exam_session_id', $exam_group->exam_session->id)
            ->where('student_id', auth()->guard('student')->user()->id)
            ->latest();

        //return with inertia
        return inertia('Student/Exams/Confirmation', [
            'exam_group' => $exam_group,
            'grade' => $grade,
        ]);
    }

    /**
     * startExam
     *
     * @param  mixed $id
     * @return void
     */
    public function startExam($id)
    {
        //get exam group
        $exam_group = ExamGroup::with('exam.lesson', 'exam_session', 'student')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('id', $id)
            ->first();

        //create defaul grade
        $grade = new Grade();
        $grade->exam_id         = $exam_group->exam_id;
        $grade->exam_session_id = $exam_group->exam_session_id;
        $grade->student_id      = auth()->guard('student')->user()->id;
        $grade->duration        = $exam_group->exam->duration * 60000;
        $grade->total_correct   = 0;
        $grade->grade           = 0;
        $grade->start_time      = Carbon::now();
        $grade->save();

        //cek apakah questions / soal ujian di random
        if ($exam_group->exam->random_question == 'Y') {
            //get questions / soal ujian
            // $data = Question::where('exam_id', $exam_group->exam->id)->with('question_bank')->inRandomOrder()->get();
            $questions = Question::where('exam_id', $exam_group->exam->id)->with('question_bank')->inRandomOrder()->get();
        } else {
            //get questions / soal ujian
            $questions = Question::where('exam_id', $exam_group->exam->id)->with('question_bank')->get();
        }
        //define pilihan jawaban default
        $question_order = 1;

        foreach ($questions as $question) {
            // dd($question);
            //buat array jawaban / answer
            $options = [1, 2];
            if (!empty($question->question_bank->option_3)) $options[] = 3;
            if (!empty($question->question_bank->option_4)) $options[] = 4;
            if (!empty($question->question_bank->option_5)) $options[] = 5;
            //acak jawaban / answer
            if ($exam_group->exam->random_answer == 'Y') {
                shuffle($options);
            }

            //cek apakah sudah ada data jawaban
            $answer = Answer::where('student_id', auth()->guard('student')->user()->id)
                ->where('exam_id', $exam_group->exam->id)
                ->where('exam_session_id', $exam_group->exam_session->id)
                ->where('question_id', $question->id)
                ->first();

            //jika sudah ada jawaban / answer
            if ($answer) {

                //update urutan question / soal
                $answer->question_order = $question_order;
                $answer->update();
            } else {
                //buat jawaban default baru
                Answer::create([
                    'exam_id'           => $exam_group->exam->id,
                    'exam_session_id'   => $exam_group->exam_session->id,
                    'question_id'       => $question->id,
                    'student_id'        => auth()->guard('student')->user()->id,
                    'question_order'    => $question_order,
                    'answer_order'      => implode(",", $options),
                    'answer'            => 0,
                    'is_correct'        => 'N'
                ]);
            }
            $question_order++;
        }

        //redirect ke ujian halaman 1
        return redirect()->route('student.exams.show', [
            'id'    => $exam_group->id,
            'page'  => 1
        ]);
    }

    /**
     * show
     *
     * @param  mixed $id
     * @param  mixed $page
     * @return void
     */
    public function show($id, $page)
    {
        //get exam group
        $exam_group = ExamGroup::with('exam.lesson', 'exam_session', 'student')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('id', $id)
            ->first();

        if (!$exam_group) {
            return redirect()->route('student.dashboard');
        }

        //get all questions
        $all_questions = Answer::with('question.question_bank')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('exam_id', $exam_group->exam->id)
            ->orderBy('question_order', 'ASC')
            ->get();

        //count all question answered
        $question_answered = Answer::with('question.question_bank')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('exam_id', $exam_group->exam->id)
            ->where('answer', '!=', 0)
            ->count();

        //get question active
        $question_active = Answer::with('question.exam', 'question.question_bank')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('exam_id', $exam_group->exam->id)
            ->where('question_order', $page)
            ->first();

        //explode atau pecah jawaban
        if ($question_active) {
            $answer_order = explode(",", $question_active->answer_order);
        } else {
            $answer_order = [];
        }

        //get duration
        $duration = Grade::where('exam_id', $exam_group->exam->id)
            ->where('exam_session_id', $exam_group->exam_session->id)
            ->where('student_id', auth()->guard('student')->user()->id)
            ->latest()->first();

        //return with inertia
        return inertia('Student/Exams/Show', [
            'id'                => (int) $id,
            'page'              => (int) $page,
            'exam_group'        => $exam_group,
            'all_questions'     => $all_questions,
            'question_answered' => $question_answered,
            'question_active'   => $question_active,
            'answer_order'      => $answer_order,
            'duration'          => $duration,
        ]);
    }

    /**
     * updateDuration
     *
     * @param  mixed $request
     * @param  mixed $grade_id
     * @return void
     */
    public function updateDuration(Request $request, $grade_id)
    {
        $grade = Grade::find($grade_id);
        $grade->duration = $request->duration;
        $grade->update();

        return response()->json([
            'success'  => true,
            'message' => 'Duration updated successfully.'
        ]);
    }

    /**
     * answerQuestion
     *
     * @param  mixed $request
     * @return void
     */
    public function answerQuestion(Request $request)
    {
        //update duration
        $grade = Grade::where('exam_id', $request->exam_id)
            ->where('exam_session_id', $request->exam_session_id)
            ->where('student_id', auth()->guard('student')->user()->id)
            ->latest()->first();

        $grade->duration = $request->duration;
        $grade->update();

        //get question
        $question = Question::find($request->question_id);

        //cek apakah jawaban sudah benar
        if ($question->question_bank->answer == $request->answer) {

            //jawaban benar
            $result = 'Y';
        } else {

            //jawaban salah
            $result = 'N';
        }

        //get answer
        $answer   = Answer::where('exam_id', $request->exam_id)
            ->where('exam_session_id', $request->exam_session_id)
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('question_id', $request->question_id)
            ->first();

        //update jawaban
        if ($answer) {
            $answer->answer     = $request->answer;
            $answer->is_correct = $result;
            $answer->update();
        }

        return redirect()->back();
    }

    /**
     * endExam
     *
     * @param  mixed $request
     * @return void
     */
    public function endExam(Request $request)
    {
        //count jawaban benar
        $count_correct_answer = Answer::where('exam_id', $request->exam_id)
            ->where('exam_session_id', $request->exam_session_id)
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('is_correct', 'Y')
            ->count();

        //count jumlah soal
        $count_question = Question::where('exam_id', $request->exam_id)->get();
        $l1 = 0;
        $l1benar = 0;
        $l2 = 0;
        $l2benar = 0;
        $l3 = 0;
        $l3benar = 0;
        $l4 = 0;
        $l4benar = 0;
        $l5 = 0;
        $l5benar = 0;

        // Jumlah Soal tiap level
        foreach ($count_question as $data) {
            if ($data->question_bank->level == 1) {
                $l1++;

                $l1_correct = Answer::where('exam_id', $request->exam_id)
                    ->where('exam_session_id', $request->exam_session_id)
                    ->where('question_id', $data->id)
                    ->where('student_id', auth()->guard('student')->user()->id)
                    ->where('is_correct', 'Y')
                    ->count();

                if ($l1_correct !== 0) {
                    $l1benar++;
                }
            }
            if ($data->question_bank->level == 2) {
                $l2++;

                $l2_correct = Answer::where('exam_id', $request->exam_id)
                    ->where('exam_session_id', $request->exam_session_id)
                    ->where('question_id', $data->id)
                    ->where('student_id', auth()->guard('student')->user()->id)
                    ->where('is_correct', 'Y')
                    ->count();

                if ($l2_correct !== 0) {
                    $l2benar++;
                }
            }
            if ($data->question_bank->level == 3) {
                $l3++;
                $l3_correct = Answer::where('exam_id', $request->exam_id)
                    ->where('exam_session_id', $request->exam_session_id)
                    ->where('question_id', $data->id)
                    ->where('student_id', auth()->guard('student')->user()->id)
                    ->where('is_correct', 'Y')
                    ->count();

                if ($l3_correct !== 0) {
                    $l3benar++;
                }
            }
            if ($data->question_bank->level == 4) {
                $l4++;
                $l4_correct = Answer::where('exam_id', $request->exam_id)
                    ->where('exam_session_id', $request->exam_session_id)
                    ->where('question_id', $data->id)
                    ->where('student_id', auth()->guard('student')->user()->id)
                    ->where('is_correct', 'Y')
                    ->count();

                if ($l4_correct !== 0) {
                    $l4benar++;
                }
            }
            if ($data->question_bank->level == 5) {
                $l5++;

                $l5_correct = Answer::where('exam_id', $request->exam_id)
                    ->where('exam_session_id', $request->exam_session_id)
                    ->where('question_id', $data->id)
                    ->where('student_id', auth()->guard('student')->user()->id)
                    ->where('is_correct', 'Y')
                    ->count();

                if ($l5_correct !== 0) {
                    $l5benar++;
                }
            }
        }

        $hasil1 = round(($l1benar * 10) / $l1, 2);
        $hasil2 = round(($l2benar * 15) / $l2, 2);
        $hasil3 = round(($l3benar * 20) / $l3, 2);
        $hasil4 = round(($l4benar * 25) / $l4, 2);
        $hasil5 = round(($l5benar * 30) / $l5, 2);

        $grade_exam = $hasil1 + $hasil2 + $hasil3 + $hasil4 + $hasil5;

        //hitung nilai
        // $grade_exam = round($count_correct_answer / $count_question * 100, 2);

        //update nilai di table grades
        $grade = Grade::where('exam_id', $request->exam_id)
            ->where('exam_session_id', $request->exam_session_id)
            ->where('student_id', auth()->guard('student')->user()->id)
            ->latest()->first();

        $grade->end_time        = Carbon::now();
        $grade->total_correct   = $count_correct_answer;
        $grade->grade           = $grade_exam;
        $grade->update();

        //redirect hasil
        return redirect()->route('student.exams.resultExam', $request->exam_group_id);
    }

    /**
     * resultExam
     *
     * @param  mixed $id
     * @return void
     */
    public function resultExam($exam_group_id)
    {
        //get exam group
        $exam_group = ExamGroup::with('exam.lesson', 'exam_session', 'exam.teacher', 'student')
            ->where('student_id', auth()->guard('student')->user()->id)
            ->where('id', $exam_group_id)
            ->first();

        //get grade / nilai
        $grade = Grade::where('exam_id', $exam_group->exam->id)
            ->where('exam_session_id', $exam_group->exam_session->id)
            ->where('student_id', auth()->guard('student')->user()->id)
            ->latest()->first();

        //return with inertia
        return inertia('Student/Exams/Result', [
            'exam_group' => $exam_group,
            'grade'      => $grade,
        ]);
    }
}
