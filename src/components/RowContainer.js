import React from 'react';
import RowImg from './RowImg';


export default function RowContainer(props) {
    
    return (
        <div className="row-container container mt-3">
            <h3 className='p-2'>{props.heading}</h3>

            <div className='d-flex overflow-auto'>
                {props.imgUrls.map((ele) => 
                <RowImg src={ele} alt="" />)}
            {/* <RowImg src={process.env.PUBLIC_URL + '/images/books/book1.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book2.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book3.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book4.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book5.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book6.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book7.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book8.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book9.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book10.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book2.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book1.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book2.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book3.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book4.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book5.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book6.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book7.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book8.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book9.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book10.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book2.jpg'} alt="" />
            <RowImg src={process.env.PUBLIC_URL + '/images/books/book3.jpg'} alt="" /> */}
        </div>
        </div>
        
    )
}
