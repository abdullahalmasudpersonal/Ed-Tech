import React from 'react';
import banner1 from '../../img/banner/banner1111.jpg';
import banner2 from '../../img/banner/banner2222.jpg';
import banner3 from '../../img/banner/banner3333.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={banner1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={banner2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={banner3} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;