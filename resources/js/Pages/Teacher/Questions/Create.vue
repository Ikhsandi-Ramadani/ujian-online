<template>
    <Head>
        <title>Tambah Soal Ujian - Aplikasi Ujian Online</title>
    </Head>
    <div class="container-fluid mb-5 mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5><i class="fa fa-question-circle"></i> Tambah Soal </h5>
                        <hr>
                        <form @submit.prevent="submit">

                            <div class="table-responsive mb-4">
                                <table class="table table-bordered table-centered table-nowrap mb-0 rounded">
                                    <tbody>
                                        <tr>
                                            <td style="width:20%" class="fw-bold">Soal</td>
                                            <td>
                                                <Editor api-key="3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk"
                                                    v-model="form.question" :init="{
                                                        menubar: false,
                                                        plugins: 'lists link image emoticons',
                                                        toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
                                                    }" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:20%" class="fw-bold">Pilihan A</td>
                                            <td>
                                                <Editor api-key="3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk"
                                                    v-model="form.option_1" :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists link image emoticons',
                                                        toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
                                                    }" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:20%" class="fw-bold">Pilihan B</td>
                                            <td>
                                                <Editor api-key="3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk"
                                                    v-model="form.option_2" :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists link image emoticons',
                                                        toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
                                                    }" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:20%" class="fw-bold">Pilihan C</td>
                                            <td>
                                                <Editor api-key="3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk"
                                                    v-model="form.option_3" :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists link image emoticons',
                                                        toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
                                                    }" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:20%" class="fw-bold">Pilihan D</td>
                                            <td>
                                                <Editor api-key="3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk"
                                                    v-model="form.option_4" :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists link image emoticons',
                                                        toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
                                                    }" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:20%" class="fw-bold">Pilihan E</td>
                                            <td>
                                                <Editor api-key="3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk"
                                                    v-model="form.option_5" :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists link image emoticons',
                                                        toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
                                                    }" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:20%" class="fw-bold">Jawaban Benar</td>
                                            <td>
                                                <select class="form-control" v-model="form.answer">
                                                    <option value="1">A</option>
                                                    <option value="2">B</option>
                                                    <option value="3">C</option>
                                                    <option value="4">D</option>
                                                    <option value="5">E</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
import { reactive } from 'vue';

//import inerita adapter
import { Inertia } from '@inertiajs/inertia';

//import sweet alert2
import Swal from 'sweetalert2';

//import tinyMCE
import Editor from '@tinymce/tinymce-vue';

export default {

    //layout
    layout: LayoutTeacher,

    //register components
    components: {
        Head,
        Link,
        Editor,
    },

    //props
    props: {
        errors: Object,
        exam: Object,
    },

    //inisialisasi composition API
    setup(props) {

        //define form with reactive
        const form = reactive({
            question: '',
            option_1: '',
            option_2: '',
            option_3: '',
            option_4: '',
            option_5: '',
            answer: '',
        });

        //method "submit"
        const submit = () => {

            //send data to server
            Inertia.post(`/teacher/question_banks`, {
                //data
                question: form.question,
                option_1: form.option_1,
                option_2: form.option_2,
                option_3: form.option_3,
                option_4: form.option_4,
                option_5: form.option_5,
                answer: form.answer,
            }, {
                onSuccess: () => {
                    //show success alert
                    Swal.fire({
                        title: 'Success!',
                        text: 'Soal Berhasil Disimpan!.',
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
            submit,
        };

    }

}

</script>

<style></style>
