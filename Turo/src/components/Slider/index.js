import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
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
      <div>
        <h2> Browse by make </h2>
        <Slider {...settings} >
          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div>

          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div>

          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div>

          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div> 
          
          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div> 
          
          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div> 
          
          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div> 
          
          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div> 
          
          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div>

          <div className="slider-father">
            <div className="slider">
              <img src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" height={152} width={190} />
              <div className="cars-name">ghghgh</div>
            </div>
          </div>
        </Slider >
      </div >
    );
  }
}
