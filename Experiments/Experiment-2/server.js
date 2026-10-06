const express = require('express');
const products = require('./products.json');

const app = express();
app.use(express.json());

app.get('/products', (req, res) => res.json(products));

app.get('/products/:id', (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
