<template>
    <Head>
        <title>Aplikasi Ujian Online</title>
    </Head>

    <nav class="navbar bg-light mb-5">
        <div class="container-fluid d-flex justify-content-between">
            <img class="img-fluid" width="80" src="assets/images/logo2.png" alt="Exam Image">
            <div>
                <Link href="/students/login" class="btn btn-sm btn-primary border-0 shadow me-2" type="button">Login Mahasiswa</Link>
                <Link href="/teacher" class="btn btn-sm btn-primary border-0 shadow" type="button">Login Dosen</Link>
            </div>
        </div>
    </nav>

    <main>
        <section class="mt-5 my-auto d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row align-items-center ">
                    <div class="col-12 col-lg-5 order-2 order-lg-1 text-center text-lg-left">
                        <h1 class="mt-5">Aplikasi Ujian Online</h1>
                        <p class="lead my-4">It's always time for a coffee break. We should be back by the time you finish
                            your coffee.</p>
                        <a href="/students/login"
                            class="btn btn-gray-800 d-inline-flex align-items-center justify-content-center mb-4">
                            <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Explore Sekarang
                        </a>
                    </div>
                    <div
                        class="col-12 col-lg-7 order-1 order-lg-2 text-center d-flex align-items-center justify-content-center">
                        <img class="img-fluid w-75" src="assets/images/exam2.png" alt="Exam Image">
                    </div>
                </div>
            </div>
        </section>
    </main>
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

export default {
    //layout
    layout: LayoutStudent,

    //register component
    components: {
        Head,
        Link
    },

}

</script>

<style></style>
