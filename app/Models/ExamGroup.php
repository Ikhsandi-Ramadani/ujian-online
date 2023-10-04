<?php

namespace App\Models;

use App\Models\Exam;
use App\Models\Student;
use App\Models\ExamSession;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ExamGroup extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'exam_id',
        'exam_session_id',
        'student_id',
    ];

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }

    public function exam_session()
    {
        return $this->belongsTo(ExamSession::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
