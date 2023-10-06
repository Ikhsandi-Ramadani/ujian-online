<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthTeacher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        //check if user is logged in
        $teacher = auth()->guard('teacher')->user();

        //if not, redirect to login page
        if (!$teacher) {
            return redirect('/');
        }

        //if user is logged in, continue to next middleware
        return $next($request);
    }
}
