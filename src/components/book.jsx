import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookDelete } from '../redux/books/booksSlice';
import Styles from '../styles/book.module.css';
import Chapter from './chapter';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <article className={Styles.article}>
      <div className={Styles.details}>
        <div>
          <p className={Styles.category}>{book.category}</p>
          <h3 className={Styles.title}>{book.title}</h3>
          <p className={Styles.author}>{book.author}</p>
        </div>
        <ul className={Styles.buttons}>
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" onClick={() => dispatch(bookDelete(book.id))}>Remove</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <Chapter progress={Math.floor(book.title.length / 0.5)} chapter={book.title.length} />
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
