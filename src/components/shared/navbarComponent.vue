<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">{{ $t('navbar.products') }}</RouterLink>
    </nav>
</template>
