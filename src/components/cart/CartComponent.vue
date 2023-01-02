<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { productsStore } from '../../stores/products';

import ProductList from '../product/ProductList.vue';

import type { Product } from '../../interfaces/product.interface';
import type { Cart } from '../../interfaces/cart.interface';

export default defineComponent({
    name: 'CartComponent',
    data() {
        return {
            showCart: false,
            cart: {} as PropType<Cart>,
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
            this.cart.products.map(
                (product: Product, index: number) =>
                    (total +=
                        product.price * this.cart.quantities[index].quantity)
            );

            return total.toFixed(2);
        },
    },
    beforeMount() {
        console.log('[CartComponent] [beforeMount()]');
        this.cart = productsStore().cart;
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
                    {{ $t('cart.subtitle', { count: cart.products.length }) }}
                </h3>
                <font-awesome-icon
                    icon="fa-solid fa-x"
                    class="fa-2x button__close"
                    @click="toggle()"
                />
            </header>
            <ProductList
                :products="cart.products"
                :cart="cart.quantities"
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
