import { useDispatch, useSelector } from 'react-redux';
import { bookPost } from '../redux/books/booksSlice';
import Styles from '../styles/form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
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
  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <h2 className={Styles.title}>Add New Book</h2>
      <input className={Styles.input} type="text" placeholder="Book title" name="title" autoComplete="on" required />
      <input className={Styles.input} type="text" placeholder="Book author" name="author" autoComplete="on" required />
      <select className={Styles.select} name="category" defaultValue="" required>
        <option value="" disabled>Book category</option>
        {categories.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <button type="submit" className={Styles.submit}>ADD BOOK</button>
    </form>
  );
};

export default Form;
