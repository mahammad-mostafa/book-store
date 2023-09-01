import { useDispatch, useSelector } from 'react-redux';
import { select } from '../redux/categories/categoriesSlice';
import Styles from '../styles/categories.module.css';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
  const selection = useSelector((state) => state.categories.selection);
  return (
    <section className={Styles.section}>
      <h2 className={Styles.title}>Filter Books By Category</h2>
      <select
        className={Styles.select}
        name="category"
        onChange={(event) => dispatch(select(event.target.value))}
        defaultValue={selection}
      >
        <option value="all">all</option>
        {categories.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </section>
  );
};

export default Categories;
