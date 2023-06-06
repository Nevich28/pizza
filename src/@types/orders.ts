export interface OrderItem {
    id: string;
    title: string;
    imageUrl: string;
    price: string;
    type: string;
    size: number;
    count?: number;
}

export interface Order {
    id?: string;
    userId: string;
    address: string;
    items: OrderItem[];
    totalPrice: string;
    totalCount: number;
    date: string;
}
