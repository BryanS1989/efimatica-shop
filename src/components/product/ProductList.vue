<script lang="ts">
import { defineComponent } from 'vue';
import ProductItem from './ProductItem.vue';

import type { Product } from '../../interfaces/product.interface';
import type { Cart } from '../../interfaces/cart.interface';

export default defineComponent({
    props: {
        products: {
            type: Array<Product>,
            default() {
                return [];
            },
        },
        cart: {
            type: Array<Cart>,
            default() {
                return [];
            },
        },
        type: {
            type: String,
            default: '',
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
            v-for="(product, index) of products"
            :key="product.id"
            :product="product"
            :cart="cart[index]"
            :type="type"
        ></ProductItem>
    </article>
</template>
