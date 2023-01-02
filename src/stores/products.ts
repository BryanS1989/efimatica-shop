import { defineStore } from 'pinia';
import type { PropType } from 'vue';

import BackendApi from '../services/product.service';

import type { ProductList, Product } from '../interfaces/product.interface';
import type { Cart } from '../interfaces/cart.interface';

export const productsStore = defineStore('products', {
    state: () => ({
        productsList: {} as PropType<ProductList>,
        cart: { products: [], quantities: [] } as PropType<Cart>,
        loading: false,
    }),
    getters: {
        products(): Product[] {
            return this.productsList.products;
        },
        categories(): String[] {
            const categories: String[] = [];
            this.productsList.products.map((product: Product) => {
                if (!categories.includes(product.category)) {
                    categories.push(product.category);
                }
            });
            return categories;
        },
        brands(): String[] {
            const brands: String[] = [];
            this.productsList.products.map((product: Product) => {
                if (!brands.includes(product.brand)) {
                    brands.push(product.brand);
                }
            });
            return brands;
        },
    },
    actions: {
        getProducts(): void {
            console.log('[store] [actions] [getProducts()]');
            this.loading = true;
            BackendApi.getProducts()
                .then((response) => {
                    console.log(
                        '[store] [actions] [getProducts()]',
                        response.data
                    );
                    this.productsList = response.data;
                    this.loading = false;
                })
                .catch((error) => {
                    console.log('[store] [actions] [getProducts]', error);
                    this.loading = false;
                });
        },
        getCartProductIndex(productId: Number): Number {
            console.log('[store] [actions] [getCartProductIndex()] productId: ', productId);
            return this.cart.products.findIndex((product: Product) => {
                return product.id === productId;
            });
        },
        addProductToCart(product: Product): void {
            console.log('[store] [actions] [addProductToCart()] productId: ', productId);

            const index = this.getCartProductIndex(product.id);
            if (index !== -1) {
                this.cart.quantities[index].quantity += 1;
            } else {
                this.cart.products.push(product);
                this.cart.quantities.push({ id: product.id, quantity: 1 });
            }
        },
        deleteProductFromCart(product: Product): void {
            console.log('[store] [actions] [deleteProductFromCart()] productId: ', productId);
            const index = this.getCartProductIndex(product.id);
            this.cart.products.splice(index, 1);
            this.cart.quantities.splice(index, 1);
        },
    },
});