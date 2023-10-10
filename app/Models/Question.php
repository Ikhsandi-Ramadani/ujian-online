<?php

namespace App\Models;

use App\Models\Exam;
use App\Models\QuestionBank;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'exam_id',
        'question_bank_id'
    ];

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }

    public function questionbank()
    {
        return $this->belongsTo(QuestionBank::class);
    }
}
