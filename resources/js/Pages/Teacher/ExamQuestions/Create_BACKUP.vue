<template>
    <Head>
        <title>Enrolle Soal - Aplikasi Ujian Online</title>
    </Head>
    <div class="container-fluid mb-5 mt-5">
        <div class="row">
            <div class="col-md-12">
                <Link :href="`/teacher/exams/${exam.id}`" class="btn btn-md btn-primary border-0 shadow mb-3" type="button">
                <i class="fa fa-long-arrow-alt-left me-2"></i> Kembali</Link>

                <div class="card border-0 shadow mb-4">
                    <div class="card-body">
                        <h5><i class="fa fa-filter"></i> Filter Soal</h5>
                        <hr>
                        <form @submit.prevent="filter">

                            <div class="row">
                                <div class="col-md-6">
                                    <label class="control-label" for="name">Kelompok Soal</label>
                                    <select class="form-select" v-model="form.question_group_id">
                                        <option v-for="(question_group, index) in question_groups" :key="index"
                                            :value="question_group.id">{{ question_group.name }}
                                        </option>
                                    </select>
                                    <div v-if="errors.question_group_id" class="alert alert-danger mt-2">
                                        {{ errors.question_group_id }}
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label class="control-label" for="name">Level Soal</label>
                                    <select class="form-select" v-model="form.level">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <div v-if="errors.level" class="alert alert-danger mt-2">
                                        {{ errors.level }}
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label fw-bold text-white">*</label>
                                    <button type="submit" class="btn btn-md btn-primary border-0 shadow w-100"> <i
                                            class="fa fa-filter"></i> Filter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5><i class="fa fa-user-plus"></i> Enrolle Soal</h5>
                        <hr>
                        <form @submit.prevent="submit" v-if="questions.length > 0">

                            <div class="table-responsive mb-4">
                                <table class="table table-bordered table-centered table-nowrap mb-0 rounded">
                                    <thead class="thead-dark">
                                        <tr class="border-0">
                                            <th class="border-0 rounded-start" style="width:5%">
                                                <input type="checkbox" v-model="form.allSelected" @change="selectAll" />
                                            </th>
                                            <th class="border-0">Soal</th>
                                            <th class="border-0">Kelompok Soal</th>
                                            <th class="border-0">Level Soal</th>
                                        </tr>
                                    </thead>
                                    <div class="mt-3"></div>
                                    <tbody>
                                        <tr v-for="question of questions" :key="question.id">
                                            <td>
                                                <input type="checkbox" v-model="form.question_id" :id="question.id"
                                                    :value="question.id" number :checked="form.allSelected" />
                                            </td>
                                            <td>
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
                                            <td class="text-center fw-bold">{{ question.question_group.name }}</td>
                                            <td class="text-center fw-bold">{{ question.level }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div v-if="errors.question_id" class="alert alert-danger mt-2">
                                    {{ errors.question_id }}
                                </div>
                            </div>

                            <button type="submit" class="btn btn-md btn-primary border-0 shadow me-2">Simpan</button>
                            <button type="reset" class="btn btn-md btn-warning border-0 shadow">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import layout
import LayoutTeacher from '../../../Layouts/Teacher.vue';

//import Heade and Link from Inertia
import {
    Head,
    Link
} from '@inertiajs/inertia-vue3';


//import reactive from vue
import {
    computed,
    reactive
} from 'vue';

//import inerita adapter
import {
    Inertia
} from '@inertiajs/inertia';

//import sweet alert2
import Swal from 'sweetalert2';

export default {

    //layout
    layout: LayoutTeacher,

    //register components
    components: {
        Head,
        Link
    },

    //props
    props: {
        errors: Object,
        exam: Object,
        questions: Array,
        question_groups: Array,
    },

    //inisialisasi composition API
    setup(props) {

        //define form with reactive
        const form = reactive({
            exam_id: props.exam.id || (new URL(document.location)).searchParams.get('exam_id'),
            level: '' || (new URL(document.location)).searchParams.get('level'),
            question_group_id: '' || (new URL(document.location)).searchParams.get('question_group_id'),
            question_id: [],
            allSelected: false,
        });

        //define methods filter
        const filter = () => {

            //HTTP request
            Inertia.get(`/teacher/exams/${props.exam.id}/enrolle/create/filter`, {
                //send data to server
                exam_id: form.exam_id,
                level: form.level,
                question_group_id: form.question_group_id,
            });

        }

        //define method "selectAll"
        const selectAll = () => {
            if (form.allSelected) {
                form.question_id = props.questions.map(question => question.id);
            } else {
                form.question_id = [];
            }
        }

        //method "submit"
        const submit = () => {

            //send data to server
            Inertia.post(`/teacher/exams/${props.exam.id}/enrolle/store`, {
                //data
                exam_id: form.exam_id,
                question_id: form.question_id,
            }, {
                onSuccess: () => {
                    //show success alert
                    Swal.fire({
                        title: 'Success!',
                        text: 'Enrolle Soal Berhasil Disimpan!.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                },
            });

        }

        //return
        return {
            form,
            filter,
            selectAll,
            submit,
        };

    }

}

</script>

<style></style>
