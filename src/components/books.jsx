import { useState } from 'react';
import { v4 } from 'uuid';
import Book from './book';

const Books = () => {
  const [items, setItems] = useState([{ id: 1, title: 'Book title', author: 'Book author' }]);
  const handleDelete = (itemId) => setItems(items.filter((item) => item.id !== itemId));
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.title.value !== '' && form.author.value !== '') {
      const book = { id: v4(), title: form.title.value, author: form.author.value };
      setItems([...items, book]);
      form.reset();
    }
  };

  return (
    <section>
      <h2>Books List</h2>
      <div>{items.map((item) => <Book key={item.id} book={item} handler={handleDelete} />)}</div>
      <form onSubmit={handleSubmit}>
        <h3>Add New Book</h3>
        <input type="text" placeholder="Book title" name="title" autoComplete="on" required />
        <input type="text" placeholder="Book author" name="author" autoComplete="on" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Books;
