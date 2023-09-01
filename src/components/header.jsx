import { NavLink } from 'react-router-dom';
import Styles from '../styles/header.module.css';

const Header = () => {
  const links = ['Books', 'Categories'];

  return (
    <header className={Styles.header}>
      <nav className={Styles.navigation}>
        <h1 className={Styles.title}>Book Store</h1>
        <ul className={Styles.links}>
          {links.map((link) => (
            <li key={link}>
              <NavLink to={link === 'Books' ? '/' : link.toLowerCase()} className={({ isActive }) => (isActive ? Styles.active : null)}>{link}</NavLink>
            </li>
          ))}
        </ul>
        <button className={Styles.button} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
