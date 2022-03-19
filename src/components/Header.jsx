import React from 'react';
import books from '../images/books.png';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/"><img src={books} alt='books' className='header__logo' /></Link>
      <h1 className='header__title'>Welcome to book list</h1>
    </div>
  )
}
export default Header;