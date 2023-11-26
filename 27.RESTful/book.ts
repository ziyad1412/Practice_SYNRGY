export interface IBook {
    title: string;
    coverImage: string;
    synopsis: string;
    publisher: string;
    author: string;
    price: string;
  }
  
  export class Book {
    id: number;
    title: string;
    coverImage: string;
    synopsis: string;
    publisher: string;
    author: string;
    price: string;
  
    constructor(params: IBook) {
      this.id = this._generateId();
      this.title = params.title;
      this.coverImage = params.coverImage;
      this.synopsis = params.synopsis;
      this.publisher = params.publisher;
      this.author = params.author;
      this.price = params.price;
    }
  
    static records: Book[] = [];
  
    _generateId() {
      const lastRecordId = Book.records.at(-1)?.id;
      if (lastRecordId) {
        return lastRecordId + 1;
      }
      return 1;
    }
  
    update(params: Partial<IBook>) {
      const idx = Book.records.findIndex((i) => i.id === this.id);
  
      params.title && (this.title = params.title);
      params.coverImage && (this.coverImage = params.coverImage);
      params.synopsis && (this.synopsis = params.synopsis);
      params.publisher && (this.publisher = params.publisher);
      params.author && (this.author = params.author);
      params.price && (this.price = params.price);
  
      Book.records[idx] = this;
  
      return this;
    }
  
    delete() {
      Book.records = Book.records.filter((i) => i.id !== this.id);
    }
  
    static create(params: IBook) {
      const book = new Book(params);
  
      Book.records.push(book);
  
      return book;
    }
  
    static find(id: number) {
      const book = this.records.find((i) => i.id === Number(id));
      if (!book) return null;
  
      return book;
    }
  
    static list() {
      return this.records;
    }
  }
  