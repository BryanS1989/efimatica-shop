<script lang="ts">
import { defineComponent } from 'vue';

import { productsStore } from '../stores/products';
import ProductList from '../components/product/ProductList.vue';

export default defineComponent({
    name: 'ProductsView',
    props: {},
    components: { ProductList },
    data() {
        return {};
    },
    computed: {
        products() {
            return productsStore().products;
        },
    },
    beforeMount() {
        console.log('[ProductsView] [beforeMount]');
        productsStore().getProducts();
    },
    mounted() {},
});
</script>

<template>
    <ProductList :products="products" />
</template>
