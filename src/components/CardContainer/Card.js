import React from 'react';
import './Card.style.scss';

function Card(props) {
    // state
    // effect
    // render
    return (
        <div className="card">
            <h5 className="card-title">Card title</h5>
            <img src="/public/images/ci_img2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;