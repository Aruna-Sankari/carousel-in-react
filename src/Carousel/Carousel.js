import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import './Carousel.css'
import g1 from '../Images/g-3.jpg'
import g2 from '../Images/g-4.jpg'
import g3 from '../Images/g-7.jpg'
import g4 from '../Images/g-9.jpg'
import g5 from '../Images/g-6.jpg'
import g6 from '../Images/gallery-2.jpg'
import g7 from '../Images/gallery-1.jpg'
import g8 from '../Images/events-1.jpg'


const Carousel = () => {
    const arr = [g1, g2, g3, g4, g5, g6, g7, g8]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <h2 style={{ textAlign: "center" }}> Image Carousel </h2>

            <Slider {...settings}>
                {
                    arr.map((e,i)=>{
                        return <div key={i} className="gallery-img">
                            <img src={e} alt="" />
                        </div>
                        
                    })
                  
                }

                
            </Slider>
        </div>
    )



}
export default Carousel;




