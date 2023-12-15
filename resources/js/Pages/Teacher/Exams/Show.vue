<template>
    <Head>
        <title>Detail Ujian - Aplikasi Ujian Online</title>
    </Head>
    <div class="container-fluid mb-5 mt-5">
        <div class="row">
            <div class="col-md-12">

                <Link href="/teacher/exams" class="btn btn-md btn-primary border-0 shadow mb-3" type="button"><i
                    class="fa fa-long-arrow-alt-left me-2"></i> Kembali</Link>

                <div class="card border-0 shadow mb-4">
                    <div class="card-body">
                        <h5> <i class="fa fa-edit"></i> Detail Ujian</h5>
                        <hr>
                        <div class="row">
                            <div class="col-6">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-centered table-nowrap mb-0 rounded">
                                        <tbody>
                                            <tr>
                                                <td style="width:30%" class="fw-bold">Nama Ujian</td>
                                                <td>{{ exam.title }}</td>
                                            </tr>
                                            <tr>
                                                <td class="fw-bold">Mata Pelajaran</td>
                                                <td>{{ exam.lesson.title }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-centered table-nowrap mb-0 rounded">
                                        <tbody>
                                            <tr>
                                                <td class="fw-bold">Jumlah Soal</td>
                                                <td>{{ exam.questions.total }}</td>
                                            </tr>
                                            <tr>
                                                <td class="fw-bold">Durasi (Menit)</td>
                                                <td>{{ exam.duration }} Menit</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5> <i class="fa fa-question-circle"></i> Soal Ujian</h5>
                        <hr>

                        <Link :href="`/teacher/exams/${exam.id}/enrolle/create`"
                            class="btn btn-md btn-primary border-0 shadow me-2" type="button"><i
                            class="fa fa-plus-circle"></i> Tambah Soal</Link>

                        <div class="table-responsive mt-3">
                            <table class="table table-bordered text-wrap table-centered mb-0 rounded">
                                <thead class="thead-dark">
                                    <tr class="border-0">
                                        <th class="border-0 rounded-start">No.</th>
                                        <th class="border-0">Soal</th>
                                        <th class="border-0">Level Soal</th>
                                        <th class="border-0">Kelompok Soal</th>
                                        <th class="border-0 rounded-end">Aksi</th>
                                    </tr>
                                </thead>
                                <div class="mt-2"></div>
                                <tbody>
                                    <tr v-for="(question, index) in exam.questions.data" :key="index">
                                        <td class="fw-bold text-center">{{ ++index + (exam.questions.current_page - 1) *
                                            exam.questions.per_page }}</td>
                                        <td class="text-wrap">
                                            <div class="fw-bold" v-html="question.question_bank.question"></div>
                                            <hr>
                                            <ol type="A">
                                                <li v-html="question.question_bank.option_1"
                                                    :class="{ 'text-success fw-bold': question.question_bank.answer == '1' }">
                                                </li>
                                                <li v-html="question.question_bank.option_2"
                                                    :class="{ 'text-success fw-bold': question.question_bank.answer == '2' }">
                                                </li>
                                                <li v-html="question.question_bank.option_3"
                                                    :class="{ 'text-success fw-bold': question.question_bank.answer == '3' }">
                                                </li>
                                                <li v-html="question.question_bank.option_4"
                                                    :class="{ 'text-success fw-bold': question.question_bank.answer == '4' }">
                                                </li>
                                                <li v-html="question.question_bank.option_5"
                                                    :class="{ 'text-success fw-bold': question.question_bank.answer == '5' }">
                                                </li>
                                            </ol>
                                        </td>
                                        <td class="text-center fw-bold">{{ question.question_bank.level }}</td>
                                        <td class="text-center fw-bold">{{ question.question_bank.question_group.name }}
                                        </td>
                                        <td class="text-center">
                                            <button @click.prevent="destroy(exam.id, question.id)"
                                                class="btn btn-sm btn-danger border-0"><i class="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination :links="exam.questions.links" align="end" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
//import layout
import LayoutTeacher from '../../../Layouts/Teacher.vue';

//import component pagination
import Pagination from '../../../Components/Pagination.vue';

//import Heade and Link from Inertia
import {
    Head,
    Link
} from '@inertiajs/inertia-vue3';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

//import sweet alert2
import Swal from 'sweetalert2';

export default {

    //layout
    layout: LayoutTeacher,

    //register components
    components: {
        Head,
        Link,
        Pagination
    },

    //props
    props: {
        errors: Object,
        exam: Object,
    },

    //inisialisasi composition API
    setup() {

        //define method destroy
        const destroy = (exam_id, question_id) => {
            Swal.fire({
                title: 'Apakah Anda yakin?',
                text: "Anda tidak akan dapat mengembalikan ini!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
                .then((result) => {
                    if (result.isConfirmed) {

                        Inertia.delete(`/teacher/exams/${exam_id}/enrolle/${question_id}/destroy`);

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Soal Ujian Berhasil Dihapus!.',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    }
                })
        }

        //return
        return {
            destroy,
        }

    }

}

</script>

<style></style>
