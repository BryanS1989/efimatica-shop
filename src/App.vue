<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/shared/headerComponent.vue';
</script>

<template>
    <Header></Header>

    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
