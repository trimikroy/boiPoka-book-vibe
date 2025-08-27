import React from 'react';
import bannerPic from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-gray-100 rounded-2xl my-4 ">
            <div className="hero-content p-20 flex-col lg:flex-row-reverse">
                <img
                    src={bannerPic}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className=''>
                    <h1 className="text-4xl font-semibold font-playfair ">Books to freshen up your bookshelf</h1>
                    <button className="btn mt-8 bg-[#23BE0A] text-[#FFFFFF]  work-sans">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;