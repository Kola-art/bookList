import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import BooksList from "../components/BooksList";
import { fetchData, deleteData } from '../api';
import { BooksContext } from '../context/BooksContext';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [books, setBooks] = useContext(BooksContext);
  
  useEffect(() => {
    fetchData(setBooks);
  },[setBooks])

  const onDelete = (id) => {
    deleteData(id, setBooks)
  }

  return (
  <div className="dashboard">
    <table className="dashboard__table">
      <thead>
        <tr>
          <th>
              "#"
          </th>
          <th>
            "Title"
          </th>
          <th>
            "Author"
          </th>
          <th>
            "Category"
          </th>
          <th>
            "ISBN"
          </th>
          <th>
            "Actions"
          </th>
        </tr>
      </thead>
      <tbody>
        {
          books.map((book, idx) => (
            <BooksList descr={book} idx={idx} onDelete={onDelete} key={book.id} />
            )
          )
        }
      </tbody>
    </table>
    <div className="dashboard__link">
      <Link to='addBook'> <span >ADD BOOK</span> </Link>
    </div>
  </div>
  )

}

export default Dashboard;