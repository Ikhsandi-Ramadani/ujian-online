<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ExamController;
use App\Http\Controllers\Admin\LessonController;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\TeacherController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExamSessionController;

Route::get('/', function () {
    return view('welcome');
});

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
        //route resource exams
        Route::resource('/exams', ExamController::class, ['as' => 'admin']);
        //custom route for create question exam
        Route::get('/exams/{exam}/questions/create', [ExamController::class, 'createQuestion'])->name('admin.exams.createQuestion');
        //custom route for store question exam
        Route::post('/exams/{exam}/questions/store', [ExamController::class, 'storeQuestion'])->name('admin.exams.storeQuestion');
        //custom route for edit question exam
        Route::get('/exams/{exam}/questions/{question}/edit', [ExamController::class, 'editQuestion'])->name('admin.exams.editQuestion');
        //custom route for update question exam
        Route::put('/exams/{exam}/questions/{question}/update', [ExamController::class, 'updateQuestion'])->name('admin.exams.updateQuestion');
        //custom route for destroy question exam
        Route::delete('/exams/{exam}/questions/{question}/destroy', [ExamController::class, 'destroyQuestion'])->name('admin.exams.destroyQuestion');
        //route question import
        Route::get('/exams/{exam}/questions/import', [ExamController::class, 'import'])->name('admin.exam.questionImport');
        //route question import
        Route::post('/exams/{exam}/questions/import', [ExamController::class, 'storeImport'])->name('admin.exam.questionStoreImport');
        //route resource exam_sessions
        Route::resource('/exam_sessions', ExamSessionController::class, ['as' => 'admin']);
        //custom route for enrolle create
        Route::get('/exam_sessions/{exam_session}/enrolle/create', [ExamSessionController::class, 'createEnrolle'])->name('admin.exam_sessions.createEnrolle');
        //custom route for enrolle store
        Route::post('/exam_sessions/{exam_session}/enrolle/store', [ExamSessionController::class, 'storeEnrolle'])->name('admin.exam_sessions.storeEnrolle');
        //custom route for enrolle destroy
        Route::delete('/exam_sessions/{exam_session}/enrolle/{exam_group}/destroy', [ExamSessionController::class, 'destroyEnrolle'])->name('admin.exam_sessions.destroyEnrolle');
        //route index reports
        Route::get('/reports', [ReportController::class, 'index'])->name('admin.reports.index');
        //route index reports filter
        Route::get('/reports/filter', [ReportController::class, 'filter'])->name('admin.reports.filter');
        //route index reports export
        Route::get('/reports/export', [ReportController::class, 'export'])->name('admin.reports.export');
    });
});
