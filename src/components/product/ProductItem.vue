<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { Product } from '../../interfaces/product.interface';
import type { Cart } from '../../interfaces/cart.interface';

export default defineComponent({
    name: 'ProductItem',
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        },
        cart: {
            type: Object as PropType<Cart>,
            default() {
                return {};
            },
        },
        type: {
            type: String,
            default: '',
        },
    },
    data() {
        return {};
    },
    methods: {
        addToCart(productId: number): void {
            console.log('[ProductItem] [addToCart()] ProductId: ', productId);
        },
        removeItemCart(productId: number): void {
            console.log(
                '[ProductItem] [removeItemCart()] ProductId: ',
                productId
            );
        },
        quantityMng(addition: number): void {
            console.log('[ProductItem] [quantityMng()] addition: ', addition);
            this.cart.quantity += addition;
        },
    },
    computed: {
        price(): number {
            if (this.type === 'cart') {
                return this.product.price * this.cart.quantity;
            } else {
                return this.product.price;
            }
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
                <h3
                    v-if="type !== 'cart'"
                    class="product__rating"
                >
                    {{ product.rating }}
                </h3>
            </header>

            <p class="product__description">{{ product.description }}</p>

            <p class="product__price text--medium text--bold">{{ price }} €</p>

            <button
                v-if="type !== 'cart'"
                class="product__button button button--primary"
                @click="addToCart(product.id)"
            >
                {{ $t('buttons.addToCart') }}
            </button>

            <div
                v-if="type === 'cart'"
                class="product__quantity flex"
            >
                <font-awesome-icon
                    icon="fa-solid fa-minus"
                    class="fa-lg quantity__button quantity__plus circle shadow"
                    @click="quantityMng(-1)"
                />
                <input
                    type="number"
                    class="quantity__number"
                    v-model="cart.quantity"
                />
                <font-awesome-icon
                    icon="fa-solid fa-plus"
                    class="fa-lg quantity__button quantity__minus circle shadow"
                    @click="quantityMng(+1)"
                />
            </div>
            <button
                v-if="type === 'cart'"
                class="product__delete button button--secondary circle"
                @click="removeItemCart(product.id)"
            >
                <font-awesome-icon
                    icon="fa-solid fa-trash"
                    class="fa-lg"
                />
            </button>
        </section>
    </article>
</template>
