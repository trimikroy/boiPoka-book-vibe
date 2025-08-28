import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, yearOfPublishing, publisher } = book;

    return (
        <Link to={`/detailsPage/${bookId}`}>
            <div className="card bg-base-100 border-1 font-work-sans  border-gray-300 ">
                <figure className='bg-gray-100 rounded-xl py-8 m-4'>
                    <img
                        src={image}
                        className='w-26'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-8'>
                        {
                            tags.map((tag, index)=> <span 
                             key={index}
                            className=' text-green-600 py-1 
                       bg-gray-100 rounded-2xl px-4'>{tag}</span>)
                        }
                    </div>
                    <div>
                        <h3 className='font-playfair pt-2 text-xl font-bold'>{bookName}</h3>
                        <p className='text-md pt-2'>By : {author}</p>
                    </div>
                    <div className='divider '></div>
                    <div className='flex justify-between'>
                        <h3>{category}</h3>
                        <span>
                            {rating}
                            <div className="rating">
                               
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>

                        </span>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;