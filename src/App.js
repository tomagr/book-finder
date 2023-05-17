import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

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

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];

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
