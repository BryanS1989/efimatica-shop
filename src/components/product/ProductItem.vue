<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { Product } from '../../interfaces/product.interface';

export default defineComponent({
    name: 'ProductItem',
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        addToCart(productId: number): void {
            console.log('[ProductItem] [addToCart()] ProductId: ', productId);
        },
    },
    mounted() {},
});
</script>

<template>
    <article class="product__item flex shadow">
        <img
            class="product__image"
            :src="product.thumbnail"
            alt="product.title"
        />

        <section class="product__info flex">
            <header class="product__header">
                <h2 class="product__title text--underline">
                    {{ product.title }}
                </h2>
                <h3 class="product__rating">{{ product.rating }}</h3>
            </header>

            <p class="product__description">{{ product.description }}</p>

            <p class="product__price text--medium text--bold">
                {{ product.price }} €
            </p>

            <button
                class="product__button button button--primary"
                @click="addToCart(product.id)"
            >
                {{ $t('buttons.addToCart') }}
            </button>
        </section>
    </article>
</template>
