export interface Product {
    id: number;
    sku: string;
    brand: string;
    product_name: string;
    product_image: string;
    product_price: string;
    discount: string;
    is_favorite: boolean;
    score: number;
    description: string;
    colors: Color[];
    reviews: string;
}


export interface Color {
    name: string;
    hex: string;
}