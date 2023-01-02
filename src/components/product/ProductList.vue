<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

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
            type: Object as PropType<Cart>,
            default() {
                return {
                    products: [],
                    quantities: [],
                } as Cart;
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
            :cart="cart.quantities[index]"
            :type="type"
        ></ProductItem>
    </article>
</template>
