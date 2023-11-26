import express, { Express, Response } from "express";
import {Book, IBook} from "./book";

interface IParams {
  id:string;
}

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Get List Books
app.get("/books", (_, res: Response) => {
  return res.status(200).json(Book.list());
});

// Get Book by ID
app.get("/books/:id", (req: Request<IParams>, res: Response) => {
  const id = +req.params.id;
  return res.status(200).json(Book.find(+id));
});

// Create Book
app.post("/books", (req: Request<{}, {}, IBook>, res: Response) => {
  const book = req.body;
  Book.create(book);
  return res.status(201).json(book);
});

// Update Book Patch
app.patch("/books/:id", (req: Request<IParams, {}, Partial<IBook>>, res: Response) => {
  const id = +req.params.id;
  const body = req.body;
  const book = Book.find(+id);
  if (book) {
    book.update(body);
    return res.status(200).json(book);
  }
  return res.status(404).json({message: "Book not found"});
};

// Delete Book
app.delete("/books/:id", (req: Request<IParams>, res: Response) => {
  const id = +req.params.id;
  const book = Book.find(+id);
  if (book) {
    book.delete();
    return res.status(200).json(book);
  }
  return res.status(404).json({message: "Book not found"});
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
