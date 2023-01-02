<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/shared/headerComponent.vue';
import CartComponent from './components/cart/CartComponent.vue';
</script>

<template>
    <Header></Header>

    <CartComponent></CartComponent>

    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
