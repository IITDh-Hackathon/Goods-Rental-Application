import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "./../images/carousel1.jpeg";
import ExampleCarouselImage2 from "./../images/carousel2.jpeg";
import "./../css/carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='carousel-img-div'>

        <img className="carousel-img"  src={ExampleCarouselImage1} alt="First slide" />
        </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-img-div'>

        <img className="carousel-img" src={ExampleCarouselImage2} alt="Second slide" />
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-img-div'>

        <img className="carousel-img" src={ExampleCarouselImage2} alt="Third slide" />
        </div>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
