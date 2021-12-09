import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from '../styles/navbar.module.css';

const Navbar = () => (
  <header className={styles.navbar}>
    <h1 className={styles.bookStore}>Bookstore CMS</h1>
    <ul className={styles.list}>
      <li className={styles.listItem1}>
        <Link to="/" className={styles.listLink}>BOOKS</Link>
      </li>
      <li className={styles.listItem2}>
        <Link to="/categories" className={styles.listLink}>CATEGORIES</Link>
      </li>
    </ul>
    <div className={styles.userIconCont}>
      <ImUser className={styles.userIcon} />
    </div>
  </header>
);

export default Navbar;
