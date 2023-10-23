<template>
    <Head>
        <title>Hasil Ujian - Aplikasi Ujian Online</title>
    </Head>
    <div class="row justify-content-center mb-5">
        <div class="col-md-8">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <h5> <i class="fa fa-check-circle"></i> Ujian Selesai</h5>
                    <hr>
                    <div class="table-responsive">
                        <table class="table table-centered table-nowrap mb-0 rounded">
                            <thead>
                                <tr>
                                    <td class="fw-bold">Nim</td>
                                    <td>{{ exam_group.student.nim }}</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Nama Lengkap</td>
                                    <td>{{ exam_group.student.name }}</td>
                                </tr>

                                <tr>
                                    <td class="fw-bold">Ujian</td>
                                    <td>{{ exam_group.exam.title }}</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Mata Kuliah</td>
                                    <td>{{ exam_group.exam.lesson.title }}</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Dosen</td>
                                    <td>{{ exam_group.exam.teacher.name }}</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Mulai Mengerjakan</td>
                                    <td>{{ grade.start_time }}</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Selesai Mengerjakan</td>
                                    <td>{{ grade.end_time }}</td>
                                </tr>
                            </thead>
                            <tbody v-if="exam_group.exam.show_answer == 'Y'">
                                <tr>
                                    <td class="fw-bold">Jumlah Benar</td>
                                    <td>{{ grade.total_correct }}</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Nilai</td>
                                    <td>{{ grade.grade }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="mt-2">
                <Link :href="`/student/dashboard`"
                    class="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white">Kembali ke Dashboard
                </Link>
            </div>
        </div>
    </div>
</template>

<script>
//import layout student
import LayoutStudent from '../../../Layouts/Student.vue';

//import Head and Link from Inertia
import {
    Head,
    Link
} from '@inertiajs/inertia-vue3';

export default {
    //layout
    layout: LayoutStudent,

    //register components
    components: {
        Head,
        Link
    },

    //props
    props: {
        exam_group: Object,
        grade: Object
    },
}

</script>

<style></style>
