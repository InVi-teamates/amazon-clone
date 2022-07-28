import React from 'react';
import RowImg from './RowImg';
import './RowContainer.style.scss';


export default function RowContainer(props) {
    
    return (
        <div className="row-container container mt-3">
            {[1,2,3].map((ele) =>
            <div className="row-item">
                <h3 className='p-2'>{props.heading}</h3>

                <div className='d-flex overflow-overlay row-scrollbar'>
                    {props.imgUrls.map((ele) => <RowImg src={ele} alt="" />)}
                </div>
            </div>)
            }
        </div> 
    )
}
