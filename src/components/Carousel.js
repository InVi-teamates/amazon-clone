import React from 'react';
// import ImgSrc from '../images/carousel_img1.jpg';
// import ImgSrc2 from '../images/ci_img2.jpg';
// import ImgSrc3 from '../images/ci_img3.jpg';

export default function Carousel() {
    return (
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={process.env.PUBLIC_URL + "images/carousel_img1.jpg"} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/images/ci_img2.jpg'} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={process.env.PUBLIC_URL + '/images/ci_img3.jpg'} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


        </>

        

    )
}

// <div className=''>
        //     <img className='carouselImg' src={ImgSrc} alt="carousel img" />
        // </div>