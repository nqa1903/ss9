class Book {
    private title: string;
    private author: string;
    private quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getQuantity(): number {
        return this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        let existingBook = this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity();
        } else {
            this.books.push(book);
        }
    }

    viewBooks(): void {
        console.log("List of books in the library:");
        this.books.forEach(book => {
            console.log(`Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Quantity: ${book.getQuantity()}`);
        });
    }
}

let book1 = new Book("Book 1", "Author 1");
let book2 = new Book("Book 2", "Author 2", 3); 
let book3 = new Book("Book 1", "Author 1"); 

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.viewBooks();
