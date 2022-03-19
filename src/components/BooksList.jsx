import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
import Button from "./UI/Button";

const BooksList = ({ descr, idx, onDelete }) => {
    const { title, author, category, ISBN, id } = descr;
    const navigate = useNavigate();

    const deleteBook = () => {
      onDelete(id)
    };

    const handleClick = () =>  {
      navigate(`${id}`);
    }

    return (
        <tr className="dashboard__table_tr">
          <td>{idx+1}</td>
          <td> { title } </td>
          <td> { author }</td>
          <td> { category }</td>
          <td> { ISBN }</td>
          <td>
            <div className="dashboard__table_btn">
              <Button onClick={ deleteBook }>delete</Button>
              <Button onClick={ handleClick }>edit</Button>
            </div>
          </td>
        </tr>
    )
} 

export default BooksList;