<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LessonController;
use App\Http\Controllers\Admin\DashboardController;

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
        Route::get('/students/import', [\App\Http\Controllers\Admin\StudentController::class, 'import'])->name('admin.students.import');
        //route student store import
        Route::post('/students/import', [\App\Http\Controllers\Admin\StudentController::class, 'storeImport'])->name('admin.students.storeImport');
        //route resource students
        Route::resource('/students', \App\Http\Controllers\Admin\StudentController::class, ['as' => 'admin']);
    });
});
