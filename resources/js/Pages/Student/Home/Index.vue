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
        <section class="my-auto d-flex align-items-center justify-content-center">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="row align-items-center ">
                            <div class="col-lg-5 order-2 order-lg-1 text-center text-lg-left">
                                <h1 class="mt-5">Aplikasi Ujian Online</h1>
                                <p class="lead my-4">It's always time for a coffee break. We should be back by the time you
                                    finish
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
                                class="col-lg-7 order-1 order-lg-2 text-center d-flex align-items-center justify-content-center intro-img">
                                <img class="img-fluid w-100" src="assets/images/exam2.png" alt="Exam Image">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="row align-items-center ">
                            <div class="col-lg-5 order-2 order-lg-1 text-lg-left">
                                <h1 class="mt-5">Halaman Mahasiswa</h1>
                                <p>Halaman ini diperuntukkan bagi Mahasiswa Jurusan Sistem Informasi. Mahasiswa dapat
                                    mengakses ujian komprehensif melalui platform ini, serta melihat nilai hasil ujian
                                    setelah menyelesaikan ujian. Selain itu, fitur riwayat ujian memungkinkan mahasiswa
                                    untuk melihat catatan hasil ujian sebelumnya.</p>
                                <a href="/students/login"
                                    class="btn btn-gray-800 d-inline-flex align-items-center justify-content-center mb-4">
                                    <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Login Sekarang
                                </a>
                            </div>
                            <div
                                class="col-lg-7 order-1 order-lg-2 text-center d-flex align-items-center justify-content-center intro-img">
                                <img class="img-fluid w-100" src="assets/images/mahasiswa.jpg" alt="Exam Image">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="row align-items-center ">
                            <div class="col-lg-5 order-2 order-lg-1 text-lg-left">
                                <h1 class="mt-5">Halaman Dosen</h1>
                                <p>Halaman ini diperuntukkan bagi dosen Jurusan Sistem Informasi. Pada halaman Dosen Sistem
                                    Computer Assisted Test (CAT), dosen dapat membuat, mengelola, dan mengoreksi soal ujian
                                    dengan antarmuka yang intuitif. Dosen dapat dengan mudah mengatur sesi ujian, menentukan
                                    waktu, serta mengakses laporan nilai mahasiswa secara cepat dan efisien.</p>
                                <a href="/teacher"
                                    class="btn btn-gray-800 d-inline-flex align-items-center justify-content-center mb-4">
                                    <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Login Sekarang
                                </a>
                            </div>
                            <div
                                class="col-lg-7 order-1 order-lg-2 text-center d-flex align-items-center justify-content-center intro-img">
                                <img class="img-fluid w-100" src="assets/images/teacher.jpg" alt="Exam Image">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="row align-items-center ">
                            <div class="col-lg-5 order-2 order-lg-1 text-lg-left">
                                <h1 class="mt-5">Halaman Admin</h1>
                                <p>Selamat datang di Dashboard Admin Sistem Computer Assisted Test (CAT)! Di sini, Admin
                                    memiliki akses penuh ke fitur pengelolaan user mahasiswa dan dosen. Selain itu, Admin
                                    dapat dengan mudah melihat laporan nilai untuk memonitor performa akademis secara
                                    efisien. Admin, gunakan dashboard ini untuk mengoptimalkan pengelolaan dan evaluasi
                                    dalam sistem CAT kami. Selamat bekerja!</p>
                                <a href="/login"
                                    class="btn btn-gray-800 d-inline-flex align-items-center justify-content-center mb-4">
                                    <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Login Sekarang
                                </a>
                            </div>
                            <div
                                class="col-lg-7 order-1 order-lg-2 text-center d-flex align-items-center justify-content-center intro-img">
                                <img class="img-fluid w-100" src="assets/images/admin.jpg" alt="Exam Image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="mt-5" id="best-student">
            <h1 class="text-center mb-5">Mahasiswa Terbaik</h1>
            <div class="row">
                <div v-for="(data, index) in data" :key="index" class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img v-if="data.foto" class="rounded" width="150" height="150" :src="`/foto/${data.foto}`"
                                    alt="change avatar">
                                <img v-else class="rounded" width="150" height="150" src="/assets/images/user.jpg" alt="change avatar">
                                <div class="mt-3">
                                    <h4>{{ data.name }}</h4>
                                    <p>{{ data.nim }}</p>
                                    <h5 class="text-primary mb-1">{{ data.exam_name }}</h5>
                                    <p class="text-muted font-size-sm">Nilai : {{ data.nilai }}</p>
                                </div>
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
    props: {
        data: Array
    },
}

</script>

<style>
.intro-img img {
    width: 100%;
    height: 500px;
    object-fit: contain;
}

.carousel-inner img {
    width: 100%;
    object-fit: contain;

}

.head-title {
    color: #1F2937;
}

.carousel-control-prev-icon {
    background-color: #1F2937;
}

.carousel-control-next-icon {
    background-color: #1F2937;
}

.carousel-item .row {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.carousel-item .head-title {
    margin-bottom: 20px;
}

.carousel-item .header-button {
    margin-top: 20px;
}

.carousel-indicators .active {
    background-color: #1F2937 !important;
}

.carousel-indicators button {
    background-color: #168645 !important;
}
</style>
