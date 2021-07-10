import { Product } from './product.model';

export interface ShoppingCart {
    products: Product[];
    subtotal: number;
    shipping: number;
    total: number;
}