import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { getBook, patchData } from '../api';
import { BooksContext } from '../context/BooksContext';
import Validation from '../validation/Validation';
import Modal from '../components/modal/Modal';
import '../styles/relative.css';

const EditBook = () => {
  const  { id }   = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getBook(id);
  },[id]);
   
  const [books, setBooks] = useContext(BooksContext);
  const book = books.reduce((accum, book) => book.id == id ? book : accum, {});
    
  const [descr, setDescr] = useState({
    title: book.title,
    author: book.author,
    category: book.category,
    ISBN: book.ISBN,
    id: book.id
  })

  const onEdit = (title, author, category, ISBN, id) => {
    patchData(title, author, category, ISBN, id, setBooks)
  }

  const handleChange = (event) => {
    setDescr({
      ...descr,
      [event.target.name]: event.target.value
    })
  }
   
  const handleOnSubmit = (e) => {
    setModal(true);
    e.preventDefault();
    onEdit(descr.title,descr.author, descr.category, descr.ISBN, descr.id);
    setTimeout(()=> {
      navigate('/')}, 2000
    );
  }

  return (
    <div className='formcontainer'>
      <Validation  handleOnSubmit={handleOnSubmit} handleChange={handleChange}
        descr={descr} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

export default EditBook;