<script lang="ts">
import { defineComponent } from 'vue';
import ProductItem from './ProductItem.vue';

import type { Product } from '../../interfaces/product.interface';

export default defineComponent({
    props: {
        products: {
            type: Array<Product>,
            default() {
                return [];
            },
        },
    },
    components: { ProductItem },
    data() {
        return {};
    },
    mounted() {},
});
</script>

<template>
    <article class="product__list flex">
        <ProductItem
            v-for="product in products"
            :key="product.id"
            :product="product"
        ></ProductItem>
    </article>
</template>
