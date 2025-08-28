import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

   const [books, setBooks] = useState([]);

   useEffect(()=> {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
   } ,[])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-20 mb-8'>Books </h1>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
           </div>

        </div>  
    );
};

export default Books;