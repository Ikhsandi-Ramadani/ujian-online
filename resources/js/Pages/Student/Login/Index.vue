<template>
    <Head>
        <title>Login Siswa - Aplikasi Ujian Online</title>
    </Head>
    <div class="row justify-content-center mt-5">
        <div class="col-md-5">
            <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div class="text-center">
                    <img class="" src="/assets/images/logo2.png" height="100">
                </div>
                <div v-if="errors.message" class="alert alert-danger mt-2">
                    {{ errors.message }}
                </div>
                <div v-if="$page.props.session.error" class="alert alert-danger mt-2">
                    {{ $page.props.session.error }}
                </div>
                <form @submit.prevent="submit" class="mt-4">

                    <div class="form-group mb-4">
                        <label for="email">Nim</label>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fa fa-key"></i>
                            </span>
                            <input type="text" class="form-control" v-model="form.nim" placeholder="Nim">
                        </div>
                        <div v-if="errors.nim" class="alert alert-danger mt-2">
                            {{ errors.nim }}
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group mb-4">
                            <label for="password">Password</label>
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon2">
                                    <i class="fa fa-lock"></i>
                                </span>
                                <input type="password" placeholder="Password" class="form-control" v-model="form.password">
                            </div>
                            <div v-if="errors.password" class="alert alert-danger mt-2">
                                {{ errors.password }}
                            </div>
                        </div>
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-gray-800">LOGIN</button>
                    </div>
                    <div class="text-center mt-2">
                        <p>Belum punya akun ? <a href="/register">Daftar disini</a></p>
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

//import Link
import { Link } from '@inertiajs/inertia-vue3';

//import reactive
import {
    reactive
} from 'vue';

//import inertia adapter
import {
    Inertia
} from '@inertiajs/inertia';

export default {

    //layout
    layout: LayoutStudent,

    //register component
    components: {
        Head,
        Link
    },

    //props
    props: {
        errors: Object,
    },

    //inisialisasi composition API
    setup() {

        //define form state
        const form = reactive({
            nim: '',
            password: '',
        });

        //submit method
        const submit = () => {

            //send data to server
            Inertia.post('/students/login', {

                //data
                nim: form.nim,
                password: form.password,
            });
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
