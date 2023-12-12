<template>
    <Head>
        <title>History Ujian - Aplikasi Ujian Online</title>
    </Head>
    <div class="container-fluid mb-5 mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5>History Ujian {{ student.name }} ({{ student.nim }})</h5>
                        <div class="table-responsive">
                            <table class="table table-bordered table-centered table-nowrap mb-0 rounded">
                                <thead class="thead-dark">
                                    <tr class="border-0">
                                        <th class="border-0 rounded-start">Ujian</th>
                                        <th class="border-0">Sesi</th>
                                        <th class="border-0 rounded-end">Nilai</th>
                                    </tr>
                                </thead>
                                <div class="mt-2"></div>
                                <tbody>
                                    <tr v-for="(data, index) in history" :key="index">
                                        <td>{{ data.exam.title }}</td>
                                        <td>{{ data.exam_session.title }}</td>
                                        <td>{{ data.grade }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import layout admin
import LayoutAdmin from '../../../Layouts/Admin.vue';

//import Head from Inertia
import {
    Head
} from '@inertiajs/inertia-vue3';

export default {

    //layout
    layout: LayoutAdmin,

    //register components
    components: {
        Head,
    },

    //props
    props: {
        errors: Object,
        history: Array,
        student: Object
    },

}

</script>

<style></style>
