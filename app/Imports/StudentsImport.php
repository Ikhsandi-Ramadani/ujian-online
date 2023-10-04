<?php

namespace App\Imports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class StudentsImport implements ToModel, WithHeadingRow, WithValidation
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Student([
            'nim'          => (int) $row['nim'],
            'name'          => $row['name'],
            'password'      => $row['password'],
            'gender'        => $row['gender'],
        ]);
    }

    /**
     * rules
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'nim' => 'unique:students,nim',
        ];
    }
}
