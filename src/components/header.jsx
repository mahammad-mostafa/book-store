import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = ['Books', 'Categories'];

  return (
    <header>
      <nav>
        <h1>Book Store</h1>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <NavLink to={link === 'Books' ? '/' : link.toLowerCase()}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
