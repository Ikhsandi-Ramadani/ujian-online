<?php

namespace App\Http\Controllers\Student;

use App\Models\Grade;
use App\Models\ExamGroup;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //return with inertia
        return inertia('Student/Dashboard/Index');
    }
}
