import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookDelete } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.category}</p>
      <button type="button" onClick={() => dispatch(bookDelete(book.id))}>Delete</button>
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
