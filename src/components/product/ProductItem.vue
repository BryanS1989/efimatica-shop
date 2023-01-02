<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { productsStore } from '../../stores/products';

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
        addToCart(): void {
            console.log('[ProductItem] [addToCart()]');
            productsStore().addProductToCart(this.product);
        },
        removeItemCart(): void {
            console.log('[ProductItem] [removeItemCart()] ProductId: ');
            productsStore().deleteProductFromCart(this.product);
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
                @click="addToCart()"
            >
                {{ $t('buttons.addToCart') }}
            </button>

            <div
                v-if="type === 'cart'"
                class="product__quantity flex"
            >
                <button
                    class="quantity__button quantity__plus circle"
                    @click="quantityMng(-1)"
                    :disabled="cart.quantity <= 1"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-minus"
                        class="fa-lg"
                    />
                </button>

                <input
                    type="number"
                    class="quantity__number"
                    v-model="cart.quantity"
                />
                <button
                    class="quantity__button quantity__minus circle"
                    @click="quantityMng(+1)"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-plus"
                        class="fa-lg"
                    />
                </button>
            </div>
            <button
                v-if="type === 'cart'"
                class="product__delete button button--secondary circle"
                @click="removeItemCart()"
            >
                <font-awesome-icon
                    icon="fa-solid fa-trash"
                    class="fa-lg"
                />
            </button>
        </section>
    </article>
</template>
