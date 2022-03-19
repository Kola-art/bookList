import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';

const RoutePage = () => {

  return (
    <Routes>
      <Route path='/' element={ <Dashboard />} exact />
      <Route path='/:id' element={ <EditBook />} />
      <Route path='addBook' element={<AddBook />} />
      <Route  path="*" element={<Error />} />
    </Routes>
  ) 

}

export default RoutePage;