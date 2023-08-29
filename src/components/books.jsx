import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/booksSlice';
import Book from './book';

const Books = () => {
  const items = useSelector((state) => state.books.list);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.title.value !== '' && form.author.value !== '') {
      const book = { title: form.title.value, author: form.author.value };
      dispatch(add(book));
      form.reset();
    }
  };

  return (
    <section>
      <h2>Books List</h2>
      <div>{items.map((item) => <Book key={item.id} book={item} />)}</div>
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
