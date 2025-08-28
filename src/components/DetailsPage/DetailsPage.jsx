import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);


    const book = data.find(book => book.bookId === id)
    const { bookId: currentBookId, bookName, author, image, review, totalPages, rating, category, tags, yearOfPublishing, publisher } = book;

    return (
            <div className=" mt-12 gap-4 flex flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-h-screen p-14 bg-gray-50 rounded-lg "
                />
                <div>

                    <h1 className="text-2xl font-playfair font-bold">{bookName}</h1>
                    <p className='pb-2'>By : {author}</p>
                    <div className='border-1 border-dashed border-gray-300 '></div>
                    <h3 className='my-1 '>{category}</h3>
                    <div className='border-1 border-dashed border-gray-300 '></div>
                    <p className="py-6"><span className='text-lg font-semibold'>Review:</span> {review}</p>
                    <div className='flex gap-8'>
                        <span className='text-lg font-semibold'>Tags:</span>
                        {
                            tags.map((tag, index) => <span
                                key={index}
                                className=' text-[#23BE0A] py-1 
                       bg-gray-100 rounded-2xl font-semibold px-4'>{tag}</span>)
                        }
                    </div>
                    <div className='border-t-1 my-4 border-dashed border-gray-300 '></div>
                   
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-600 font-medium">Number of Page:</span>
                                <span class="text-gray-800">{totalPages}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 font-medium">Publisher:</span>
                                <span class="text-gray-800">{publisher}</span>
                            </div>
                            <div class="flex justify-between ">
                                <span class="text-gray-600 font-medium">Year of Publisher:</span>
                                <span class="text-gray-800">{yearOfPublishing}</span>
                            </div>
                            <div class="flex justify-between ">
                                <span class="text-gray-600 font-medium">Rating:</span>
                                <span class="text-gray-800">{rating}</span>
                            </div>
                        </div>
                    

                    <div className='mt-4 flex gap-4'>
                        <button className="btn">Read</button>
                    <button className="btn text-white bg-[#50B1C9]">WishList</button>
                    </div>
                </div>
            </div>
        
    );
};

export default DetailsPage;