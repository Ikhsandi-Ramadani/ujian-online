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
    </div>
</template>

<script>
//import layout student
import LayoutStudent from '../../../Layouts/Student.vue';

//import Link from Inertia
import {
    Link
} from '@inertiajs/inertia-vue3';

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
        auth: Object
    }

}

</script>

<style></style>
