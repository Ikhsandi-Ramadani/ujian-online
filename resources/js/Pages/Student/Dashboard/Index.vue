<template>
    <Head>
        <title>Dashboard Mahasiswa - Aplikasi Ujian Online</title>
    </Head>
    <div class="container-fluid mb-5 mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-success border-0 shadow">
                    Selamat Datang <strong>{{ auth.student.name }}</strong>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <div class="card card-body border-0 shadow mb-4">
                    <h2 class="h5 mb-4 text-center">Biodata</h2>
                    <div class="row">
                        <div class="col-6 text-center">
                            <img v-if="student.foto" class="rounded" width="150" :src="`/foto/${student.foto}`"
                                alt="change avatar">
                            <img v-else class="rounded" width="200" src="/assets/images/user.jpg" alt="change avatar">
                            <!-- <button type="button" class="btn btn-block btn-primary my-3" data-bs-toggle="modal"
                                data-bs-target="#modal-foto">Change Photo</button> -->
                        </div>
                        <div class="col-6">
                            <table style="line-height: 40px;">
                                <tr>
                                    <td>NIM</td>
                                    <td>: {{ student.nim }}</td>
                                </tr>
                                <tr>
                                    <td>Nama</td>
                                    <td>: {{ student.name }}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td v-if="student.gender == 'L'">: Laki-laki</td>
                                    <td v-else>: Perempuan</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card border-0 shadow">
                    <div class="card-body" v-if="last_exam != null && last_grade != null">
                        <h5 class="text-center">Ujian Terakhir</h5>
                        <hr>
                        <div class="table-responsive">
                            <table class="table table-centered mb-0 rounded">
                                <thead>
                                    <tr>
                                        <td class="fw-bold">Nama Ujian</td>
                                        <td>{{ last_exam.exam.title }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Dosen</td>
                                        <td>{{ last_exam.exam.teacher.name }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Mata Kuliah</td>
                                        <td>{{ last_exam.exam.lesson.title }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Sesi</td>
                                        <td>{{ last_exam.exam_session.title }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Mulai</td>
                                        <td>{{ last_exam.exam_session.start_time }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Selesai</td>
                                        <td>{{ last_exam.exam_session.end_time }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">KKM</td>
                                        <td>{{ last_exam.exam.kkm }}</td>
                                    </tr>
                                    <tr v-if="last_grade.grade != null">
                                        <td class="fw-bold">Nilai</td>
                                        <td>{{ last_grade.grade }}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <!-- cek waktu selesai -->
                        <div v-if="last_grade.end_time == null">

                            <!-- cek apakah ujian sudah dimulai, tapi waktu masih ada -->
                            <div
                                v-if="examTimeRangeChecker(last_exam.exam_session.start_time, last_exam.exam_session.end_time)">

                                <div v-if="last_grade.start_time == null">
                                    <Link :href="`/student/exam-confirmation/${last_exam.id}`"
                                        class="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white">Kerjakan</Link>
                                </div>

                                <!-- ulangi ujian -->
                                <div v-else-if="last_exam.exam.kkm > last_grade.grade">
                                    <Link :href="`/student/exam-confirmation/${last_exam.id}`"
                                        class="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white">Ulangi Kerjakan
                                    </Link>
                                </div>

                                <div v-else>
                                    <Link :href="`/student/exam/${last_exam.id}/1`"
                                        class="btn btn-md btn-info border-0 shadow w-100 mt-2">Lanjut Kerjakan</Link>
                                </div>

                            </div>

                            <div v-else>
                                <!-- ujian belum mulai-->
                                <div v-if="examTimeStartChecker(last_exam.exam_session.start_time)">
                                    <button class="btn btn-md btn-gray-700 border-0 shadow w-100 mt-2" disabled>Belum
                                        Mulai</button>
                                </div>
                                <!-- ujian terlewat -->
                                <div v-if="examTimeEndChecker(last_exam.exam_session.end_time)">
                                    <button class="btn btn-md btn-danger border-0 shadow w-100 mt-2" disabled>Waktu
                                        Terlewat</button>
                                </div>
                            </div>
                        </div>

                        <!-- ulangi ujian -->
                        <div v-else-if="last_exam.exam.kkm > last_grade.grade">
                            <div v-if="examTimeEndChecker(last_exam.exam_session.end_time)">
                                <button class="btn btn-md btn-danger border-0 shadow w-100 mt-2" disabled>Waktu
                                    Terlewat</button>
                            </div>
                            <div v-else>
                                <Link :href="`/student/exam-confirmation/${last_exam.id}`"
                                    class="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white">Ulangi Kerjakan
                                </Link>
                            </div>
                        </div>
                        <!-- End ulangi ujian -->

                        <div v-else>
                            <button class="btn btn-md btn-danger border-0 shadow w-100 mt-2" disabled>Sudah
                                Dikerjakan</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5 class="text-center">History Ujian</h5>
                        <div class="table-responsive">
                            <table class="table table-bordered table-centered table-nowrap mb-0 rounded"
                                v-if="last_exam != null && last_grade != null">
                                <thead class="thead-dark">
                                    <tr class="border-0">
                                        <th class="border-0 rounded-start">Ujian</th>
                                        <th class="border-0">Sesi</th>
                                        <th class="border-0">Nilai</th>
                                        <th class="border-0 rounded-end">Export</th>
                                    </tr>
                                </thead>
                                <div class="mt-2"></div>
                                <tbody>
                                    <tr v-for="(data, index) in history" :key="index">
                                        <td>{{ data.exam.title }}</td>
                                        <td>{{ data.exam_session.title }}</td>
                                        <td>{{ data.grade }}</td>
                                        <td>
                                            <a :href="`/student/export/${data.id}`"
                                                class="btn btn-sm btn-primary border-0 shadow me-2" target="_blank"><i
                                                    class="fa fa-file"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Upload Foto -->
    <div class="modal fade" id="modal-foto" tabindex="-1" role="dialog" aria-labelledby="modal-foto" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="h6 modal-title">Upload Foto</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="file" @input="form.foto = $event.target.files[0]" />
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                            {{ form.progress.percentage }}%
                        </progress>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-secondary">Submit</button>
                        <button type="button" class="btn btn-link text-gray ms-auto" data-bs-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
//import layout student
import LayoutStudent from '../../../Layouts/Student.vue';

//import Link from Inertia
import { Link } from '@inertiajs/inertia-vue3';

import { useForm } from '@inertiajs/inertia-vue3';

export default {

    //layout
    layout: LayoutStudent,

    //register components
    components: {
        Link,
    },

    //register props
    props: {
        exam_groups: Array,
        auth: Object,
        student: Object,
        last_exam: Object,
        last_grade: Object,
        history: Array
    },

    //inisialisasi composition API
    setup() {

        //define form state
        const form = useForm({
            foto: null,
        })

        //submit method
        function submit() {
            form.post('/student/upload-photo');
            $('#modal-foto').modal('close');
        }

        //return
        return {
            form,
            submit
        }
    }
}

</script>

<style></style>
