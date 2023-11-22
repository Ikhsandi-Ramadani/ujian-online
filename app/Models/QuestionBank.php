<?php

namespace App\Models;

use App\Models\Teacher;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class QuestionBank extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'teacher_id',
        'question_group_id',
        'question',
        'option_1',
        'option_2',
        'option_3',
        'option_4',
        'option_5',
        'answer',
    ];

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }
    public function question_group()
    {
        return $this->belongsTo(QuestionGroup::class);
    }
}
