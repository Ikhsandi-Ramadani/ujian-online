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
                        <h5><i class="fa fa-filter"></i> Generate Soal</h5>
                        <hr>
                        <form @submit.prevent="generate">

                            <div class="row">
                                <div class="col-md-5">
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
                                <div class="col-md-2">
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
                                <div class="col-md-2">
                                    <label class="control-label" for="name">Jumlah Soal</label>
                                    <input type="number" v-model="form.jumlah" class="form-control">
                                    <div v-if="errors.jumlah" class="alert alert-danger mt-2">
                                        {{ errors.jumlah }}
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label fw-bold text-white">*</label>
                                    <button type="submit" class="btn btn-md btn-primary border-0 shadow w-100"> <i
                                            class="fa fa-filter"></i> Generate</button>
                                </div>
                            </div>
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
            jumlah: '',
        });

        //define methods generate
        const generate = () => {

            //HTTP request
            Inertia.get(`/teacher/exams/${props.exam.id}/enrolle/create/generate`, {
                //send data to server
                exam_id: form.exam_id,
                level: form.level,
                question_group_id: form.question_group_id,
                jumlah: form.jumlah
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
        // const submit = () => {

        //     //send data to server
        //     Inertia.post(`/teacher/exams/${props.exam.id}/enrolle/store`, {
        //         //data
        //         exam_id: form.exam_id,
        //         question_id: form.question_id,
        //     }, {
        //         onSuccess: () => {
        //             //show success alert
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Enrolle Soal Berhasil Disimpan!.',
        //                 icon: 'success',
        //                 showConfirmButton: false,
        //                 timer: 2000
        //             });
        //         },
        //     });

        // }

        //return
        return {
            form,
            generate,
            selectAll,
        };

    }

}

</script>

<style></style>
