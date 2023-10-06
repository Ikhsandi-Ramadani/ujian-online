<?php

namespace App\Http\Controllers\Teacher;

use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //validate the form data
        $this->validate($request, [
            'nip'      => 'required',
            'password'  => 'required',
        ]);

        //cek nip dan password
        $teacher = Teacher::where([
            'nip'      => $request->nip,
            'password'  => $request->password
        ])->first();

        if (!$teacher) {
            return redirect()->back()->with('error', 'NIP atau Password salah');
        }

        //login the user
        auth()->guard('teacher')->login($teacher);

        //redirect to dashboard
        return redirect()->route('teacher.dashboard');
    }
}
