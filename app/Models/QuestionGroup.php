<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionGroup extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'teacher_id'];

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function question_bank()
    {
        return $this->hasMany(QuestionBank::class)->orderBy('id', 'DESC');
    }
}
