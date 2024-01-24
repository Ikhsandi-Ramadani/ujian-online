<template>
    <Head>
        <title>Aplikasi Ujian Online</title>
    </Head>

    <nav class="navbar bg-light">
        <div class="container-fluid d-flex justify-content-between">
            <img class="img-fluid" width="80" src="assets/images/logo2.png" alt="Exam Image">
            <div>
                <Link href="/students/login" class="btn btn-sm btn-primary border-0 shadow me-2" type="button">Login
                Mahasiswa</Link>
                <Link href="/teacher" class="btn btn-sm btn-primary border-0 shadow" type="button">Login Dosen</Link>
            </div>
        </div>
    </nav>

    <main>
        <section class="my-auto d-flex align-items-center justify-content-center" style="height: 600px;">
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
        </section>

        <section class="mt-5" id="best-student">
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle"
                                width="150">
                            <div class="mt-3">
                                <h4>John Doe</h4>
                                <p class="text-secondary mb-1">Full Stack Developer</p>
                                <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                <button class="btn btn-primary">Follow</button>
                                <button class="btn btn-outline-primary">Message</button>
                            </div>
                        </div>
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
