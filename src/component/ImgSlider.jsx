import styled from "styled-components";
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImgSlider = (props) => {
  return (

    <Carousell
     showStatus={false} 
     showArrows={true} 
    //  showIndicators={false} 
    //  showThumbs={false} 
     interval={2000}
      infiniteLoop={true} 
      autoPlay={true}
      >
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>

    </Carousell>

  );
};

 
const Carousell = styled(Carousel)`

  width:100%;
  margin:20px auto ;
  ${'' /* & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  } */}
  ${'' /* ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  } */}
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 1px;
    img {
      width: 100%;
      height: 100%;
    }}
    &:hover {
      ${'' /* padding:4px; */}
      border: 1px solid rgba(249, 249, 249, 0.8);
      ${'' /* transition-duration: 300ms; */}

    }
  }
`;

export default ImgSlider;
