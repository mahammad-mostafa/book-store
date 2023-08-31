import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookGet, bookPost } from '../redux/books/booksSlice';
import Book from './book';

const Books = () => {
  const dispatch = useDispatch();
  let books = useSelector((state) => state.books.list);
  const updated = useSelector((state) => state.books.updated);
  const categories = useSelector((state) => state.categories.list);
  const selection = useSelector((state) => state.categories.selection);
  if (selection !== 'all') {
    books = books.filter((item) => item.category !== selection);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.title.value !== '' && form.author.value !== '' && form.category.value !== '') {
      const book = {
        title: form.title.value, author: form.author.value, category: form.category.value,
      };
      dispatch(bookPost(book));
      form.reset();
    }
  };

  useEffect(() => {
    if (updated) {
      const promise = dispatch(bookGet());
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, updated]);

  return (
    <section>
      <h2>Books List</h2>
      <div>{books.map((item) => <Book key={item.id} book={item} />)}</div>
      <form onSubmit={handleSubmit}>
        <h3>Add New Book</h3>
        <input type="text" placeholder="Book title" name="title" autoComplete="on" required />
        <input type="text" placeholder="Book author" name="author" autoComplete="on" required />
        <select name="category">
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Books;
