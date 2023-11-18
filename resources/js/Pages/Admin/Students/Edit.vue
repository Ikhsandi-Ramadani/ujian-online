<template>
    <Head>
        <title>Edit Mahasiswa - Aplikasi Ujian Online</title>
    </Head>
    <div class="container-fluid mb-5 mt-5">
        <div class="row">
            <div class="col-md-12">
                <Link href="/admin/students" class="btn btn-md btn-primary border-0 shadow mb-3" type="button"><i
                    class="fa fa-long-arrow-alt-left me-2"></i> Kembali</Link>
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5><i class="fa fa-user"></i> Edit Mahasiswa</h5>
                        <hr>
                        <form @submit.prevent="submit">

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label>Nim</label>
                                        <input type="text" class="form-control" placeholder="Masukkan Nim Mahasiswa"
                                            v-model="form.nim">
                                        <div v-if="errors.nim" class="alert alert-danger mt-2">
                                            {{ errors.nim }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label>Nama Lengkap</label>
                                        <input type="text" class="form-control" placeholder="Masukkan Nama Mahasiswa"
                                            v-model="form.name">
                                        <div v-if="errors.name" class="alert alert-danger mt-2">
                                            {{ errors.name }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
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
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label>Password</label>
                                        <input type="password" class="form-control" placeholder="Masukkan Password"
                                            v-model="form.password">
                                        <div v-if="errors.password" class="alert alert-danger mt-2">
                                            {{ errors.password }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label>Konfirmasi Password</label>
                                        <input type="password" class="form-control"
                                            placeholder="Masukkan Konfirmasi Password" v-model="form.password_confirmation">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <label>Konfirmasi</label><br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input " type="radio" v-model="form.status"
                                                id="inlineRadio1" value="approve">
                                            <label class="form-check-label" for="inlineRadio1">Disetujui</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input " type="radio" v-model="form.status"
                                                id="inlineRadio2" value="rejected">
                                            <label class="form-check-label" for="inlineRadio2">Ditolak</label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <button type="submit" class="btn btn-md btn-primary border-0 shadow me-2">Update</button>
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
import LayoutAdmin from '../../../Layouts/Admin.vue';

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

export default {

    //layout
    layout: LayoutAdmin,

    //register components
    components: {
        Head,
        Link
    },

    //props
    props: {
        errors: Object,
        student: Object
    },

    //inisialisasi composition API
    setup(props) {

        //define form with reactive
        const form = reactive({
            nim: props.student.nim,
            name: props.student.name,
            gender: props.student.gender,
            password: '',
            password_confirmation: '',
            status: props.student.status,
        });

        //method "submit"
        const submit = () => {

            //send data to server
            Inertia.put(`/admin/students/${props.student.id}`, {
                //data
                nim: form.nim,
                name: form.name,
                gender: form.gender,
                password: form.password,
                password_confirmation: form.password_confirmation,
                status: form.status
            }, {
                onSuccess: () => {
                    //show success alert
                    Swal.fire({
                        title: 'Success!',
                        text: 'Mahasiswa Berhasil Diupdate!.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                },
            });

        }

        return {
            form,
            submit,
        };

    }

}

</script>

<style></style>
