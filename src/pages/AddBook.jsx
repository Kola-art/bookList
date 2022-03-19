import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BooksContext } from '../context/BooksContext';
import { postData } from '../api';
import Validation from '../validation/Validation';
import Modal from '../components/modal/Modal';

const AddBook = () => {
 
  const [, setBooks] = useContext(BooksContext);
  const navigate = useNavigate();
  const [descr, setDescr] = useState({
    title: '',
    author: '',
    category: '',
    ISBN: '',
    id: ''
  })
  const [modal, setModal] = useState(false);

  const onAdd =  (author) => {
    postData(descr.title, descr.author, descr.category, descr.ISBN, setBooks)
  }

  const handleOnSubmit = (e) => {
    setModal(true);
    e.preventDefault();
    onAdd(e.target.author.value);

    setTimeout(()=> {
      navigate('/')}, 2000
    );
  }

  const handleChange = (event) => {
    setDescr({
      ...descr,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className='formcontainer'>
      <Validation  handleOnSubmit={handleOnSubmit} handleChange={handleChange}
        descr={descr} />
     <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

export default AddBook;