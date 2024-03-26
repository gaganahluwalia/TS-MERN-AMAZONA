import express, { Request, Response } from 'express';
import { sampleProducts, sampleUsers } from './data';
import cors from 'cors';
import { generateToken } from './utils';
import bcrypt from 'bcryptjs';

const app = express();
app.use(cors(
    {
        credentials: true,
        origin: ['http://localhost:5173'],
    }

));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');

})

app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts);
});

app.get('/api/products/:slug', (req: Request, res: Response) => {
    const { slug } = req.params;
    const product = sampleProducts.find((p) => p.slug === slug);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.post('/api/users/signin', async (req: Request, res: Response) => {
    console.log("Data", req.body);
    const user = sampleUsers.find((u) => u.email === req.body.email)
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return
        }
    }
    res.status(401).json({ message: 'Invalid email or password' });

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});