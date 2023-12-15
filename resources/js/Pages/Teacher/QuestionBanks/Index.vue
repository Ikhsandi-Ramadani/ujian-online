<template>
    <Head>
        <title>Bank Soal - Aplikasi Ujian Online</title>
    </Head>
    <div class="container-fluid mb-5 mt-5">
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-5 col-12 mb-2">
                        <div class="row">
                            <div class="col-md-6 col-12 mb-2">
                                <Link :href="`/teacher/question_groups/${question_group.id}/question_banks/create`"
                                    class="btn btn-md btn-primary border-0 shadow w-100" type="button"><i
                                    class="fa fa-plus-circle"></i>
                                Tambah</Link>
                            </div>
                            <div class="col-md-6 col-12 mb-2">
                                <Link :href="`/teacher/question_groups`"
                                    class="btn btn-md btn-primary border-0 shadow w-100" type="button"><i
                                    class="fa fa-long-arrow-alt-left"></i>
                                Kembali</Link>
                            </div>
                            <!-- <div class="col-md-6 col-12 mb-2">
                                <Link :href="`/teacher/question_groups/${question_group.id}/question_banks/import`"
                                    class="btn btn-md btn-success border-0 shadow w-100 text-white" type="button"><i
                                    class="fa fa-file-excel"></i>
                                Import</Link>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-7 col-12 mb-2">
                        <form @submit.prevent="handleSearch">
                            <div class="input-group">
                                <input type="text" class="form-control border-0 shadow" v-model="search"
                                    placeholder="masukkan kata kunci dan enter...">
                                <span class="input-group-text border-0 shadow">
                                    <i class="fa fa-search"></i>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">

                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5>Soal {{ question_group.name }}</h5>
                        <hr>
                        <div class="table-responsive mt-3">
                            <table class="table table-bordered table-centered mb-0 rounded">
                                <thead class="thead-dark">
                                    <tr class="border-0">
                                        <th class="border-0 rounded-start">No.</th>
                                        <th class="border-0">Soal</th>
                                        <th class="border-0">Level Soal</th>
                                        <th class="border-0 rounded-end">Aksi</th>
                                    </tr>
                                </thead>
                                <div class="mt-2"></div>
                                <tbody>
                                    <tr v-for="(question, index) in questions.data" :key="index">
                                        <td class="fw-bold text-center">{{ ++index + (questions.current_page - 1) *
                                            questions.per_page }}</td>
                                        <td class="text-wrap">
                                            <div class="fw-bold" v-html="question.question"></div>
                                            <hr>
                                            <ol type="A">
                                                <li v-html="question.option_1"
                                                    :class="{ 'text-success fw-bold': question.answer == '1' }"></li>
                                                <li v-html="question.option_2"
                                                    :class="{ 'text-success fw-bold': question.answer == '2' }"></li>
                                                <li v-html="question.option_3"
                                                    :class="{ 'text-success fw-bold': question.answer == '3' }"></li>
                                                <li v-html="question.option_4"
                                                    :class="{ 'text-success fw-bold': question.answer == '4' }"></li>
                                                <li v-html="question.option_5"
                                                    :class="{ 'text-success fw-bold': question.answer == '5' }"></li>
                                            </ol>
                                        </td>
                                        <td class="text-center fw-bold" v-html="question.level"></td>
                                        <td class="text-center">
                                            <Link
                                                :href="`/teacher/question_groups/${question_group.id}/question_banks/${question.id}/edit`"
                                                class="btn btn-sm btn-info border-0 shadow me-2" type="button"><i
                                                class="fa fa-pencil-alt"></i></Link>
                                            <button @click.prevent="destroy(question_group.id, question.id)"
                                                class="btn btn-sm btn-danger border-0"><i class="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination :links="questions.links" align="end" />
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

//import ref from vue
import {
    ref
} from 'vue';

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
        questions: Object,
        question_group: Object,
    },

    //inisialisasi composition API
    setup() {

        //define state search
        const search = ref('' || (new URL(document.location)).searchParams.get('q'));

        //define method search
        const handleSearch = () => {
            Inertia.get(`/teacher/question_groups/${question_group.id}/question_banks`, {

                //send params "q" with value from state "search"
                q: search.value,
            });
        }

        //define method destroy
        const destroy = (question_group_id, question_id) => {
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

                        Inertia.delete(`/teacher/question_groups/${question_group_id}/question_banks/${question_id}`);

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Soal Berhasil Dihapus!.',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    }
                })
        }

        //return
        return {
            search,
            handleSearch,
            destroy,
        }

    }

}

</script>

<style></style>
