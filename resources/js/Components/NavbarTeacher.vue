<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#"> <span>
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-mortarboard-fill icon icon-xs me-2" viewBox="0 0 16 16">
                            <path
                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                            <path
                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                        </svg>
                    </span>
                    <span class="sidebar-text fw-bold">UJIAN ONLINE</span>
                </span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item" :class="{ 'active': $page.url.startsWith('/teacher/dashboard') }">
                        <Link href="/teacher/dashboard" class="nav-link d-flex justify-content-between">
                        <span>
                            <span class="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    class="bi bi-speedometer2 icon icon-xs me-2" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                    <path fill-rule="evenodd"
                                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                </svg>
                            </span>
                            <span class="sidebar-text">Dashboard</span>
                        </span>
                        </Link>
                    </li>

                    <li class="nav-item" :class="{ 'active': $page.url.startsWith('/teacher/question_group') }">
                        <Link href="/teacher/question_groups" class="nav-link d-flex justify-content-between">
                        <span>
                            <span class="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-bank icon icon-xs me-2" viewBox="0 0 16 16">
                                    <path
                                        d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                                </svg>
                            </span>
                            <span class="sidebar-text">Bank Soal</span>
                        </span>
                        </Link>
                    </li>

                    <li class="nav-item" :class="{ 'active': $page.url.startsWith('/teacher/exams') }">
                        <Link href="/teacher/exams" class="nav-link d-flex justify-content-between">
                        <span>
                            <span class="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    class="bi bi-pencil-square icon icon-xs me-2" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                            </span>
                            <span class="sidebar-text">Ujian</span>
                        </span>
                        </Link>
                    </li>

                    <li class="nav-item" :class="{ 'active': $page.url.startsWith('/teacher/exam_sessions') }">
                        <Link href="/teacher/exam_sessions" class="nav-link d-flex justify-content-between">
                        <span>
                            <span class="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    class="bi bi-stopwatch icon icon-xs me-2" viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                    <path
                                        d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                </svg>
                            </span>
                            <span class="sidebar-text">Sesi Ujian</span>
                        </span>
                        </Link>
                    </li>

                    <li class="nav-item" :class="{ 'active': $page.url.startsWith('/teacher/reports') }">
                        <Link href="/teacher/reports" class="nav-link d-flex justify-content-between">
                        <span>
                            <span class="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    class="bi bi-graph-up-arrow icon icon-xs me-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                                </svg>
                            </span>
                            <span class="sidebar-text">Laporan Nilai</span>
                        </span>
                        </Link>
                    </li>
                </ul>
                <div class="d-flex">
                    <div class="nav-item dropdown ms-lg-3">
                        <a class="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <div class="media d-flex align-items-center">
                                <img class="avatar rounded-circle" alt="Image placeholder"
                                    :src="`https://ui-avatars.com/api/?name=${$page.props.auth.teacher.name}&amp;background=4e73df&amp;color=ffffff&amp;size=100`">
                                <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                    <span class="mb-0 font-small fw-bold text-white">{{ $page.props.auth.teacher.name
                                    }}</span>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1 border-0 shadow">
                            <Link class="dropdown-item d-flex align-items-center" href="/logout" method="POST" as="button">
                            <svg class="dropdown-icon text-danger me-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                </path>
                            </svg>
                            Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

//import Link
import { Link } from '@inertiajs/inertia-vue3';

export default {

    //register component
    components: {
        Link,
    }
}

</script>

<style></style>
