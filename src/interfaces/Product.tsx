export interface Product {
    [x: string]: any
    id: number,
    title: string,
    category: string,
    description: string,
    image: string,
    price: number,
    rating: {
        count: number,
        rate: number
    }
}