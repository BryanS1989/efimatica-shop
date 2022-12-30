<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/shared/navbarMenu.vue';
</script>

<template>
    <header>
        <h1>Comparador de precios</h1>
        <Navbar></Navbar>
    </header>

    <RouterView />
</template>

<style scoped></style>
