<script setup lang="ts">
import Navbar from './navbarComponent.vue';
</script>

<template>
    <header>
        <h1>{{ $t('mainTitle') }}</h1>
        <Navbar></Navbar>
    </header>
</template>
