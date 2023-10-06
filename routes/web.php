<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LessonController;
use App\Http\Controllers\Teacher\ExamController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\TeacherController;
use App\Http\Controllers\Teacher\ReportController;
use App\Http\Controllers\Teacher\DashboardController;
use App\Http\Controllers\Teacher\ExamSessionController;

//prefix "admin"
Route::prefix('admin')->group(function () {
    //middleware "auth"
    Route::group(['middleware' => ['auth']], function () {
        //route dashboard
        Route::get('/dashboard', DashboardController::class)->name('admin.dashboard');
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
    Route::post('/login', \App\Http\Controllers\Teacher\LoginController::class)->name('teacher.login');
    //middleware "teacher"
    Route::group(['middleware' => 'teacher'], function () {
        //route dashboard
        Route::get('/dashboard', App\Http\Controllers\Teacher\DashboardController::class)->name('teacher.dashboard');
        //route resource exams
        Route::resource('/exams', ExamController::class, ['as' => 'teacher']);
        //custom route for create question exam
        Route::get('/exams/{exam}/questions/create', [ExamController::class, 'createQuestion'])->name('teacher.exams.createQuestion');
        //custom route for store question exam
        Route::post('/exams/{exam}/questions/store', [ExamController::class, 'storeQuestion'])->name('teacher.exams.storeQuestion');
        //custom route for edit question exam
        Route::get('/exams/{exam}/questions/{question}/edit', [ExamController::class, 'editQuestion'])->name('teacher.exams.editQuestion');
        //custom route for update question exam
        Route::put('/exams/{exam}/questions/{question}/update', [ExamController::class, 'updateQuestion'])->name('teacher.exams.updateQuestion');
        //custom route for destroy question exam
        Route::delete('/exams/{exam}/questions/{question}/destroy', [ExamController::class, 'destroyQuestion'])->name('teacher.exams.destroyQuestion');
        //route question import
        Route::get('/exams/{exam}/questions/import', [ExamController::class, 'import'])->name('teacher.exam.questionImport');
        //route question import
        Route::post('/exams/{exam}/questions/import', [ExamController::class, 'storeImport'])->name('teacher.exam.questionStoreImport');
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

//route homepage
Route::get('/', function () {
    //cek session student
    if (auth()->guard('student')->check()) {
        return redirect()->route('student.dashboard');
    }
    //return view login
    return \Inertia\Inertia::render('Student/Login/Index');
});

//login students
Route::post('/students/login', \App\Http\Controllers\Student\LoginController::class)->name('student.login');
