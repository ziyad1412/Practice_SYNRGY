import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

// Contoh data sederhana
let items: { id: number; name: string }[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// Endpoint untuk mendapatkan semua item
app.get('/items', (req: Request, res: Response) => {
  res.json(items);
});

// Endpoint untuk mendapatkan item berdasarkan ID
app.get('/items/:id', (req: Request, res: Response) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Endpoint untuk menambahkan item baru
app.post('/items', (req: Request, res: Response) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Endpoint untuk menghapus item berdasarkan ID
app.delete('/items/:id', (req: Request, res: Response) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  res.status(200).send('Item deleted');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
