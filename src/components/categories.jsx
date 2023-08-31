import { useDispatch, useSelector } from 'react-redux';
import { select } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
  const selection = useSelector((state) => state.categories.selection);
  return (
    <section>
      <h2>Books Categories</h2>
      <select onChange={(event) => dispatch(select(event.target.value))} defaultValue={selection}>
        <option value="all">all</option>
        {categories.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </section>
  );
};

export default Categories;
