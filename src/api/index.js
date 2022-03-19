import { v4 as uuidv4 } from 'uuid';

export const fetchData = async ( setBooks ) => {
  await fetch('http://localhost:4000/books')
  .then((response) => response.json())
  .then((data) => {
    setBooks(data) }
  )
  .catch((err) => console.error(err))
}

export const postData = async (title, author, category, ISBN, setBooks) => {
  await fetch('http://localhost:4000/books', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      author: author,
      category: category,
      ISBN: ISBN,
      id: uuidv4(),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    } 
  })
  .then((response) => response.json())
  .then((data) => {
    setBooks((books) => [...books, data])
  })
    .catch((err) => console.error(err))
}

export const deleteData = async (id, setBooks) => {
  await fetch(`http://localhost:4000/books/${id}`, {
    method: 'DELETE',
  })
  .then((response) => {
    setBooks((books) => books.filter((book) => book.id !== id))
  })
  .catch((err) => console.error(err))
}
  
  

export const patchData = (title, author, category, ISBN, id, setBooks) => {
  fetch(`http://localhost:4000/books/${id}`, {
  method: 'PATCH',
  body: JSON.stringify({
        title: title,
        author: author,
        category: category,
        ISBN: ISBN,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    setBooks((books) => {
      books = books.map((book) => {
        if (book.id === data.id){
          book.title = data.title;
          book.author = data.author;
          book.category = data.category;
          book.ISBN = data.ISBN;
        }
        return book;
      })
      return books;
    })
  })
  .catch((err) => console.error(err))
}

export const getBook = (id) => {
  fetch(`http://localhost:4000/books/${id}`)
  .then(response => response.json())
  .then(json => json)
}