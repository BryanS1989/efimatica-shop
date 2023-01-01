<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavbarComponent',
    props: {
        categories: {
            type: Array,
            required: true,
        },
        brands: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            showCategories: false,
            showBrands: false,
        };
    },
    methods: {
        toggle(navbarElement: string): void {
            console.log(
                '[NavbarComponent] [toggle()] navbarElement: ',
                navbarElement
            );
            switch (navbarElement) {
                case 'categories':
                    this.showCategories = !this.showCategories;
                    this.showBrands = false;
                    break;
                case 'brands':
                    this.showBrands = !this.showBrands;
                    this.showCategories = false;
                    break;
                default:
                    break;
            }
        },
    },
    mounted() {},
});
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar flex">
        <RouterLink
            class="navbar__item"
            to="/"
            >{{ $t('navbar.products') }}</RouterLink
        >
        <a
            @mouseenter="toggle('categories')"
            class="navbar__item"
        >
            {{ $t('navbar.categories') }}

            <transition
                name="fade"
                apear
            >
                <ul
                    v-if="showCategories"
                    class="navbar__submenu"
                    @mouseleave="toggle('categories')"
                >
                    <li
                        v-for="(categoryItem, i) in categories"
                        :key="i"
                    >
                        <RouterLink :to="`categories/${categoryItem}`">{{
                            categoryItem
                        }}</RouterLink>
                    </li>
                </ul>
            </transition>
        </a>
        <a
            class="navbar__item"
            @mouseenter="toggle('brands')"
        >
            {{ $t('navbar.brands') }}

            <transition
                name="fade"
                apear
            >
                <ul
                    v-if="showBrands"
                    class="navbar__submenu"
                    @mouseleave="toggle('brands')"
                >
                    <li
                        v-for="(brandItem, i) in brands"
                        :key="i"
                    >
                        <RouterLink :to="`brands/${brandItem}`">{{
                            brandItem
                        }}</RouterLink>
                    </li>
                </ul>
            </transition>
        </a>
    </nav>
</template>
