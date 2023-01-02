import type { Product } from './product.interface';
export interface Cart {
    products: Product[];
    quantities: ProductQuantity[];
}

export interface ProductQuantity {
    id: number;
    quantity: number;
}
