<template>
    <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
        <a class="navbar-brand me-lg-5" href="/">
            <img class="navbar-brand-dark" src="" />
            <img class="navbar-brand-light" src="" />
        </a>
        <div class="d-flex align-items-center">
     
        </div>
    </nav>

    <!-- sidebar -->
    <!-- <Sidebar /> -->
    <Navbar />

    <main class="container">

        <!-- navbar -->

        <!-- content -->
        <slot />

    </main>
</template>

<script>
//import navbar
import Navbar from "../Components/NavbarStudent.vue";

//import sidebar
import Sidebar from '../Components/SidebarStudent.vue';

export default {

    //register components
    components: {
        Navbar,
        Sidebar
    },
}

</script>

<style></style>
