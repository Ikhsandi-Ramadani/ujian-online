<h1 align="center">Hasil Ujian</h1>
<hr width="600px">
<table align="center" cellpadding="10px" width="600px">
    <tr>
        <td rowspan="6"><img src="{{ asset('foto/' . $grade->student->foto) }}" alt="" height="200px"
                width="200px"></td>
        <td>Nama</td>
        <td>: {{ $grade->student->name }}</td>
    </tr>
    <tr>
        <td>Nim</td>
        <td>: {{ $grade->student->nim }}</td>
    </tr>
    <tr>
        <td>Dosen</td>
        <td>: {{ $grade->exam->teacher->name }}</td>
    </tr>
    <tr>
        <td>Nama Ujian</td>
        <td>: {{ $grade->exam->title }}</td>
    </tr>
    <tr>
        <td>Sesi Ujian</td>
        <td>: {{ $grade->exam_session->title }}</td>
    </tr>
    <tr>
        <td><b>Nilai Ujian</b></td>
        <td>: <b>{{ $grade->grade }}</b></td>
    </tr>
</table>
