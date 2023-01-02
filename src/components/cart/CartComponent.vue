<script lang="ts">
import { defineComponent } from 'vue';
import ProductList from '../product/ProductList.vue';

import type { Product } from '../../interfaces/product.interface';
import type { Cart } from '../../interfaces/cart.interface';

export default defineComponent({
    name: 'CartComponent',
    props: {},
    data() {
        return {
            showCart: false,
            products: [
                {
                    id: 1,
                    title: 'iPhone 9',
                    description: 'An apple mobile which is nothing like apple',
                    price: 549,
                    discountPercentage: 12.96,
                    rating: 4.69,
                    stock: 94,
                    brand: 'Apple',
                    category: 'smartphones',
                    thumbnail:
                        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
                    images: [
                        'https://i.dummyjson.com/data/products/1/1.jpg',
                        'https://i.dummyjson.com/data/products/1/2.jpg',
                        'https://i.dummyjson.com/data/products/1/3.jpg',
                        'https://i.dummyjson.com/data/products/1/4.jpg',
                        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
                    ],
                },
                {
                    id: 2,
                    title: 'iPhone X',
                    description:
                        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
                    price: 899,
                    discountPercentage: 17.94,
                    rating: 4.44,
                    stock: 34,
                    brand: 'Apple',
                    category: 'smartphones',
                    thumbnail:
                        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
                    images: [
                        'https://i.dummyjson.com/data/products/2/1.jpg',
                        'https://i.dummyjson.com/data/products/2/2.jpg',
                        'https://i.dummyjson.com/data/products/2/3.jpg',
                        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
                    ],
                },
                {
                    id: 3,
                    title: 'iPhone X',
                    description:
                        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
                    price: 899,
                    discountPercentage: 17.94,
                    rating: 4.44,
                    stock: 34,
                    brand: 'Apple',
                    category: 'smartphones',
                    thumbnail:
                        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
                    images: [
                        'https://i.dummyjson.com/data/products/2/1.jpg',
                        'https://i.dummyjson.com/data/products/2/2.jpg',
                        'https://i.dummyjson.com/data/products/2/3.jpg',
                        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
                    ],
                },
            ] as Product[],
            cart: [
                {
                    id: 1,
                    quantity: 2,
                },
                {
                    id: 2,
                    quantity: 1,
                },
                {
                    id: 3,
                    quantity: 5,
                },
            ] as Cart[],
        };
    },
    components: { ProductList },
    methods: {
        toggle(): void {
            console.log('[CartComponent] [toggle()]');
            this.showCart = !this.showCart;
        },
    },
    computed: {
        total() {
            let total = 0;
            this.products.map(
                (product, index) =>
                    (total += product.price * this.cart[index].quantity)
            );

            return total.toFixed(2);
        },
    },
    mounted() {},
});
</script>

<template>
    <button
        v-if="!showCart"
        class="button__cart button button--primary circle"
        @click="toggle()"
    >
        <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="fa-3x"
        />
    </button>

    <transition name="slide-fade">
        <aside v-if="showCart">
            <header>
                <h2>
                    {{ $t('cart.title') }}
                </h2>
                <h3>
                    {{ $t('cart.subtitle', { count: products.length }) }}
                </h3>
                <font-awesome-icon
                    icon="fa-solid fa-x"
                    class="fa-2x button__close"
                    @click="toggle()"
                />
            </header>
            <ProductList
                :products="products"
                :cart="cart"
                :type="'cart'"
                class="cart__products shadow--inverse"
            />
            <dl class="cart__total shadow--inverse">
                <dt class="text--bold">
                    {{ $t('cart.subtotal') }}
                </dt>
                <dd class="text--right">{{ total }}</dd>

                <dt class="text--medium text--bold">
                    {{ $t('cart.total') }}
                </dt>
                <dd class="text--medium text--bold text--right">
                    {{ total }}
                </dd>
            </dl>
            <button class="cart__button button button--secondary text--medium">
                {{ $t('buttons.checkout') }}
            </button>
        </aside>
    </transition>

    <transition name="slide-fade">
        <div
            v-if="showCart"
            @click="toggle()"
            class="backdrop"
        ></div>
    </transition>
</template>
