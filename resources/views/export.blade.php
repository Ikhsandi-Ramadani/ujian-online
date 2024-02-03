<html>

<head>
    <title> Lembar Kompren </title>
    <style>
        @page {
            size: auto;
            margin: 0;
        }

        body {
            font-family: arial;
            background-color: #ccc;
            font-family: 'Times New Roman', Times, serif;
        }

        .rangkasurat {
            width: 980px;
            margin: 0 auto;
            background-color: #fff;
            height: 1000px;
            padding: 40px;
        }

        #kop {
            border-bottom: 5px solid #000;
            padding: 2px
        }

        #nilai,
        #nilai th,
        #nilai td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        .tengah {
            text-align: center;
            line-height: 5px;
        }

        #ttd {
            float: right;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="rangkasurat">
        <table width="100%" id="kop">
            <tr>
                <td> <img src="{{ asset('logo.png') }}" width="140px"> </td>
                <td class="tengah">
                    <h2>KEMENTRIAN AGAMA R.I</h2>
                    <h2>UNIVERSITAS ISLAM NEGERI ALAUDDIN MAKASSAR</h2>
                    <h2>FAKULTAS SAINS DAN TEKNOLOGI</h2>
                    <h2>JURUSAN SISTEM INFORMASI</h2>
                    <p>Kampus I : Jln. Sultan Alauddin No.63 Telp. 864924 (Fax 864924) Makassar</p>
                    <p>Kampus II : Jln. HM. Yasin Limpo No. 36 Romang Polong - Gowa Telp. (0411) 841879</p>
                </td>
            </tr>
        </table>

        <center>
            <h2>DAFTAR NILAI</h2>
            <h2>UJIAN AKHIR PROGRAM STUDI/KOMPREHENSHIP</h2>
        </center>

        <table width="50%" id="dosen">
            <tr>
                <td>
                    <h3>DOSEN PENGUJI</h3>
                </td>
                <td>
                    <h3>: {{ $grade->exam->teacher->name }}</h3>
                </td>
            </tr>
            <tr>
                <td>
                    <h3>MATA KULIAH</h3>
                </td>
                <td>
                    <h3>: </h3>
                </td>
            </tr>
        </table>

        <table width="100%" height="20%" id="nilai">
            <tr>
                <th rowspan="2">NAMA/NIM</th>
                <th colspan="2">NILAI</th>
                <th rowspan="2">KET</th>
            </tr>
            <tr>
                <th>HURUF</th>
                <th>ANGKA</th>
            </tr>
            <tr>
                <th>{{ $grade->student->name }} / {{ $grade->student->nim }}</th>
                <th>
                    @if ($grade->grade >= 80)
                        A
                    @elseif ($grade->grade >= 77.5 && $grade->grade <= 79.99)
                        A-
                    @elseif ($grade->grade >= 75 && $grade->grade <= 77.49)
                        B+
                    @elseif ($grade->grade >= 70 && $grade->grade <= 74.99)
                        B
                    @elseif ($grade->grade >= 67.5 && $grade->grade <= 69.99)
                        B-
                    @elseif ($grade->grade >= 65 && $grade->grade <= 67.49)
                        C+
                    @elseif ($grade->grade >= 56 && $grade->grade <= 64.99)
                        C
                    @else
                        E
                    @endif

                </th>
                <th>{{ $grade->grade }}</th>
                <th></th>
            </tr>
        </table>

        <div id="ttd">
            <h3>Romangpolong,...........................</h3>
            <h3>Penguji,</h3>
            <br><br><br><br>
            <h3>{{ $grade->exam->teacher->name }}</h3>
        </div>

    </div>

    <script type="text/javascript">
        window.print();
        window.onafterprint = function() {
            window.close();
        };
    </script>

</body>

</html>
