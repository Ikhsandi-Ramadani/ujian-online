<!DOCTYPE html>
<html>

<head>
    <title>Ujian Online</title>
</head>

<body>
    <h1>Perubahan Jadwal Ujian</h1>

    <table>
        <tr>
            <td>Ujian</td>
            <td> : {{ $mailData['ujian'] }}</td>
        </tr>
        <tr>
            <td>Waktu Mulai </td>
            <td> : {{ $mailData['waktu_mulai'] }}</td>
        </tr>
        <tr>
            <td>Waktu Akhir </td>
            <td> : {{ $mailData['waktu_akhir'] }}</td>
        </tr>
    </table>

    <p>Terima Kasih</p>
</body>

</html>
