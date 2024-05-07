export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface FormProduct {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface ProductModal extends Product {
    percentage: number;
}

export interface CartItem
    extends Pick<Product, 'id' | 'title' | 'price' | 'image'> {
    quantity: number;
}

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
}

export interface UserAdmin {
    username: string;
    password: string;
}

export interface UserAdminData {
    token: string;
    email: string;
    name: {
        firstname: string;
        lastname: string;
    };
}
