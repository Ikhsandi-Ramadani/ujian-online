<?php

namespace App\Models;

use App\Models\Lesson;
use App\Models\Teacher;
use App\Models\Question;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Exam extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'lesson_id',
        'teacher_id',
        'duration',
        'description',
        'random_question',
        'random_answer',
        'show_answer',
        'kkm'
    ];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class)->orderBy('id', 'DESC');
    }

    public function grade()
    {
        return $this->hasOne(Grade::class);
    }
}
