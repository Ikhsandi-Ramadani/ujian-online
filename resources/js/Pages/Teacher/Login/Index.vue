<template>
    <Head>
        <title>Login Dosen - Aplikasi Ujian Online</title>
    </Head>
    <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
        <div class="text-center text-md-center mb-4 mt-md-0">
            <h3>DOSEN</h3>
        </div>
        <form @submit.prevent="submit" class="mt-4">
            <div class="form-group mb-4">
                <label for="nip">Nip</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-user"></i>
                    </span>
                    <input type="number" class="form-control" v-model="form.nip" placeholder="Nip">
                </div>
                <div v-if="errors.nip" class="alert alert-danger mt-2">
                    {{ errors.nip }}
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

                <div class="d-flex justify-content-between align-items-top mb-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="remember">
                        <label class="form-check-label mb-0" for="remember">
                            Remember me
                        </label>
                    </div>
                </div>

            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-gray-800">LOGIN</button>
            </div>
        </form>
    </div>
</template>

<script>
//import layout
import LayoutAuth from '../../../Layouts/Auth.vue';

//import Head from Inertia
import {
    Head,
    Link
} from '@inertiajs/inertia-vue3';

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
    layout: LayoutAuth,

    //register component
    components: {
        Head,
        Link
    },

    //props
    props: {
        errors: Object,
        session: Object
    },

    //define composition API
    setup() {

        //define form state
        const form = reactive({
            nip: '',
            password: '',
        });

        //submit method
        const submit = () => {

            //send data to server
            Inertia.post('/teacher/login', {

                //data
                nip: form.nip,
                password: form.password,
            });
        }

        //return form state and submit method
        return {
            form,
            submit,
        };

    }

}

</script>
