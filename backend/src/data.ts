import bcrypt from 'bcryptjs';
import { Product } from "./types/Product";
import { User } from "./types/User";

export const sampleProducts: Product[] = [
    {
        name: 'Nike Slim Shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '../images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt'
    },
    {
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '../images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality Product'
    },
    {
        name: 'Lacoste Free Trousers',
        slug: 'lacoste-free-trousers',
        category: 'Trousers',
        image: '../images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product'
    },
    {
        name: 'Nike Slim Trousers',
        slug: 'nike-slim-trousers',
        category: 'Trousers',
        image: '../images/p4.jpg',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product'
    }
]

export const sampleUsers: User[] = [
    {
        name: 'John Doe',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: 'Jane Doe',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
]