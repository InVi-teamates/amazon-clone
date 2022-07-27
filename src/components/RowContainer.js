import React from 'react';
import RowImg from './RowImg';


export default function RowContainer(props) {
    
    return (
        <div className="row-container container mt-3">
            <h3 className='p-2'>{props.heading}</h3>

            <div className='d-flex overflow-auto'>
                {props.imgUrls.map((ele) => <RowImg src={ele} alt="" />)}
        </div>
        </div>
        
    )
}
