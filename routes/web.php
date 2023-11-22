<?php
// Admin
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\LessonController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\TeacherController;
use App\Http\Controllers\Student\AuthController;
//Teacher
use App\Http\Controllers\Teacher\DashboardController as TeacherDashboard;
use App\Http\Controllers\Teacher\ExamController;
use App\Http\Controllers\Teacher\LoginController as TeacherLogin;
use App\Http\Controllers\Teacher\ReportController;
use App\Http\Controllers\Teacher\ExamSessionController;
// Student
use App\Http\Controllers\Student\LoginController as StudentLogin;
use App\Http\Controllers\Student\DashboardController as StudentDashboard;
use App\Http\Controllers\Student\ExamController as StudentExam;
use App\Http\Controllers\Teacher\QuestionBankController;
use App\Http\Controllers\Teacher\QuestionGroupController;
use App\Models\QuestionBank;

//prefix "admin"
Route::prefix('admin')->group(function () {
    //middleware "auth"
    Route::group(['middleware' => ['auth']], function () {
        //route dashboard
        Route::get('/dashboard', AdminDashboard::class)->name('admin.dashboard');
        //route resource lessons
        Route::resource('/lessons', LessonController::class, ['as' => 'admin']);
        //route student import
        Route::get('/students/import', [StudentController::class, 'import'])->name('admin.students.import');
        //route student store import
        Route::post('/students/import', [StudentController::class, 'storeImport'])->name('admin.students.storeImport');
        //route resource students
        Route::resource('/students', StudentController::class, ['as' => 'admin']);

        //route teacher import
        Route::get('/teachers/import', [TeacherController::class, 'import'])->name('admin.teachers.import');
        //route teacher store import
        Route::post('/teachers/import', [TeacherController::class, 'storeImport'])->name('admin.teachers.storeImport');
        //route resource teachers
        Route::resource('/teachers', TeacherController::class, ['as' => 'admin']);
    });
});

//prefix "teacher"
Route::prefix('teacher')->group(function () {
    //route homepage
    Route::get('', function () {
        //cek session teacher
        if (auth()->guard('teacher')->check()) {
            return redirect()->route('teacher.dashboard');
        }
        //return view login
        return \Inertia\Inertia::render('Teacher/Login/Index');
    });
    //login teacher
    Route::post('/login', TeacherLogin::class)->name('teacher.login');
    //middleware "teacher"
    Route::group(['middleware' => 'teacher'], function () {
        //route dashboard
        Route::get('/dashboard', TeacherDashboard::class)->name('teacher.dashboard');

        //route question import
        Route::get('/question_banks/import', [QuestionBankController::class, 'import'])->name('teacher.question_banks.import');
        //route question import
        Route::post('/question_banks/import', [QuestionBankController::class, 'storeImport'])->name('teacher.question_banks.storeImport');

        //route resource question_group
        Route::resource('/question_groups', QuestionGroupController::class, ['as' => 'teacher']);
        //route resource question_bank
        Route::resource('/question_groups/{question_group_id}/question_banks', QuestionBankController::class, ['as' => 'teacher']);

        //custom route for enrolle create
        Route::get('/exams/{exam}/enrolle/create', [ExamController::class, 'createEnrolle'])->name('teacher.exams.createEnrolle');
        //custom route for enrolle store
        Route::post('/exams/{exam}/enrolle/store', [ExamController::class, 'storeEnrolle'])->name('teacher.exams.storeEnrolle');
        //custom route for enrolle destroy
        Route::delete('/exams/{exam}/enrolle/{exam_question}/destroy', [ExamController::class, 'destroyEnrolle'])->name('teacher.exams.destroyEnrolle');
        //route resource exams
        Route::resource('/exams', ExamController::class, ['as' => 'teacher']);

        //route resource exam_sessions
        Route::resource('/exam_sessions', ExamSessionController::class, ['as' => 'teacher']);
        //custom route for enrolle create
        Route::get('/exam_sessions/{exam_session}/enrolle/create', [ExamSessionController::class, 'createEnrolle'])->name('teacher.exam_sessions.createEnrolle');
        //custom route for enrolle store
        Route::post('/exam_sessions/{exam_session}/enrolle/store', [ExamSessionController::class, 'storeEnrolle'])->name('teacher.exam_sessions.storeEnrolle');
        //custom route for enrolle destroy
        Route::delete('/exam_sessions/{exam_session}/enrolle/{exam_group}/destroy', [ExamSessionController::class, 'destroyEnrolle'])->name('teacher.exam_sessions.destroyEnrolle');

        //route index reports
        Route::get('/reports', [ReportController::class, 'index'])->name('teacher.reports.index');
        //route index reports filter
        Route::get('/reports/filter', [ReportController::class, 'filter'])->name('teacher.reports.filter');
        //route index reports export
        Route::get('/reports/export', [ReportController::class, 'export'])->name('teacher.reports.export');
    });
});

//login students
Route::get('/', [AuthController::class, 'login']);
Route::post('/students/login', [AuthController::class, 'postLogin'])->name('student.login');
//register students
Route::get('/register', [AuthController::class, 'register']);
Route::post('/students/register', [AuthController::class, 'postRegister'])->name('student.register');

//prefix "student"
Route::prefix('student')->group(function () {

    //middleware "student"
    Route::group(['middleware' => 'student'], function () {

        //route dashboard
        Route::get('/dashboard', StudentDashboard::class)->name('student.dashboard');
        Route::get('/exams', [StudentExam::class, 'index'])->name('student.exams.index');
        //route exam confirmation
        Route::get('/exam-confirmation/{id}', [StudentExam::class, 'confirmation'])->name('student.exams.confirmation');
        //route exam start
        Route::get('/exam-start/{id}', [StudentExam::class, 'startExam'])->name('student.exams.startExam');
        //route exam show
        Route::get('/exam/{id}/{page}', [StudentExam::class, 'show'])->name('student.exams.show');
        //route exam update duration
        Route::put('/exam-duration/update/{grade_id}', [StudentExam::class, 'updateDuration'])->name('student.exams.update_duration');
        //route answer question
        Route::post('/exam-answer', [StudentExam::class, 'answerQuestion'])->name('student.exams.answerQuestion');
        //route exam end
        Route::post('/exam-end', [StudentExam::class, 'endExam'])->name('student.exams.endExam');
        //route exam result
        Route::get('/exam-result/{exam_group_id}', [StudentExam::class, 'resultExam'])->name('student.exams.resultExam');
    });
});
