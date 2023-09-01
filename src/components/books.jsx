import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookGet } from '../redux/books/booksSlice';
import Styles from '../styles/books.module.css';
import Indicator from './indicator';
import Book from './book';
import Form from './form';

const Books = () => {
  const dispatch = useDispatch();
  let books = useSelector((state) => state.books.list);
  const error = useSelector((state) => state.books.error);
  const loading = useSelector((state) => state.books.loading);
  const updated = useSelector((state) => state.books.updated);
  const selection = useSelector((state) => state.categories.selection);
  if (selection !== 'all') {
    books = books.filter((item) => item.category === selection);
  }

  useEffect(() => {
    if (updated) {
      const promise = dispatch(bookGet());
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, updated]);

  if (loading) {
    return <section className={Styles.section}><Indicator loading="true" /></section>;
  }

  return (
    <section className={Styles.section}>
      {error === undefined && books.length > 0 ? (
        <div className={Styles.list}>
          {books.map((item) => <Book key={item.id} book={item} />)}
        </div>
      ) : <Indicator error={error} length={books.length} />}
      <hr className={Styles.line} />
      <Form />
    </section>
  );
};

export default Books;
