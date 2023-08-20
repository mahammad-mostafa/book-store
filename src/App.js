import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
