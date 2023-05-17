import "./index.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBook = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, title };
      return book;
    });
    setBooks(updatedBooks);
    console.log("updatedBooks after edit", updatedBooks);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = (title) => {
    let inventedId = Math.round(Math.random() * 9999);
    const updatedBooks = [
      ...books,
      // { id: inventedId, title: title }
      { id: inventedId, title }, // same as above
    ];

    setBooks(updatedBooks);
    console.log("updatedBooks", updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <hr />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
