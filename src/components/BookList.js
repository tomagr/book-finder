import BookShow from "./BookShow";
import "./BookList.scss";

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />;
  });

  return (
    <div className="book-list">
      <h1>Books ({books.length})</h1>
      {renderBooks}
    </div>
  );
}

export default BookList;
