import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(book.title);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (id, newTitle) => {
    setIsEditing(!isEditing);
    onEdit(id, newTitle);
  };

  let content = (
    <h3>
      {book.id} - {book.title}
    </h3>
  );

  if (isEditing) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="BookShow">
      <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt={book.title} />
      {content}

      <div className="action">
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
