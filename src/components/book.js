import PropTypes from 'prop-types';

const Book = ({ book, handler }) => (
  <li>
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <button type="button" onClick={() => handler(book.id)}>Delete</button>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default Book;
