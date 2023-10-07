<?php

namespace App\Models;

use App\Models\Exam;
use App\Models\ExamGroup;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ExamSession extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'exam_id',
        'title',
        'start_time',
        'end_time',
    ];

    // public function getStartTimeAttribute($value)
    // {
    //     // Menggunakan Carbon untuk mengubah format tanggal
    //     return Carbon::parse($value)->translatedFormat('l, d F Y, H:i'); // Format tanggal Indonesia
    // }

    // public function getEndTimeAttribute($value)
    // {
    //     // Menggunakan Carbon untuk mengubah format tanggal
    //     return Carbon::parse($value)->translatedFormat('l, d F Y, H:i'); // Format tanggal Indonesia
    // }

    public function exam_groups()
    {
        return $this->hasMany(ExamGroup::class);
    }

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }
}
