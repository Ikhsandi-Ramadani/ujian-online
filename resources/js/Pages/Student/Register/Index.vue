<template>
    <Head>
        <title>Register Mahasiswa - Aplikasi Ujian Online</title>
    </Head>
    <div class="row justify-content-center mt-5 mb-5">
        <div class="col-md-5">
            <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div v-if="errors.message" class="alert alert-danger mt-2">
                    {{ errors.message }}
                </div>
                <div v-if="$page.props.session.error" class="alert alert-danger mt-2">
                    {{ $page.props.session.error }}
                </div>
                <form @submit.prevent="submit" class="mt-4">

                    <div class="mb-4">
                        <label for="email">Nim</label>
                        <input type="text" class="form-control" v-model="form.nim" placeholder="Masukkan Nim">
                        <div v-if="errors.nim" class="alert alert-danger mt-2">
                            {{ errors.nim }}
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="email">Nama Lengkap</label>
                        <input type="text" class="form-control" v-model="form.name" placeholder="Masukkan Nama">
                        <div v-if="errors.name" class="alert alert-danger mt-2">
                            {{ errors.name }}
                        </div>
                    </div>

                    <div class="mb-4">
                        <label>Foto</label>
                        <input type="file" @input="form.foto = $event.target.files[0]" class="form-control"/>
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                            {{ form.progress.percentage }}%
                        </progress>
                        <div v-if="errors.foto" class="alert alert-danger mt-2">
                            {{ errors.foto }}
                        </div>
                    </div>

                    <div class="mb-4">
                        <label>Jenis Kelamin</label>
                        <select class="form-select" v-model="form.gender">
                            <option value="L">Laki - Laki</option>
                            <option value="P">Perempuan</option>
                        </select>
                        <div v-if="errors.gender" class="alert alert-danger mt-2">
                            {{ errors.gender }}
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="password">Password</label>
                        <input type="password" placeholder="Password" class="form-control" v-model="form.password">
                        <div v-if="errors.password" class="alert alert-danger mt-2">
                            {{ errors.password }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label>Konfirmasi Password</label>
                        <input type="password" class="form-control" placeholder="Masukkan Konfirmasi Password"
                            v-model="form.password_confirmation">
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-gray-800">REGISTER</button>
                    </div>
                    <div class="text-center mt-2">
                        <p>Sudah punya akun ? <a href="/">Login disini</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
//import layout
import LayoutStudent from '../../../Layouts/Student_2.vue';

//import Head from Inertia
import {
    Head
} from '@inertiajs/inertia-vue3';

//import reactive
import {
    reactive
} from 'vue';

//import inertia adapter
import {
    Inertia
} from '@inertiajs/inertia';

import { useForm } from '@inertiajs/inertia-vue3';

export default {

    //layout
    layout: LayoutStudent,

    //register component
    components: {
        Head
    },

    //props
    props: {
        errors: Object,
    },

    //inisialisasi composition API
    setup() {

        //define form with reactive
        const form = useForm({
            nim: null,
            name: null,
            foto: null,
            gender: null,
            password: null,
            password_confirmation: null
        });

        //submit method

        function submit() {
            form.post('/students/register');
        }

        // const submit = () => {

        //     //send data to server
        //     Inertia.post('/students/register', {
        //         //data
        //         nim: form.nim,
        //         name: form.name,
        //         gender: form.gender,
        //         password: form.password,
        //         password_confirmation: form.password_confirmation,

        //     });
        // }

        //return
        return {
            form,
            submit
        }
    }

}

</script>

<style></style>
