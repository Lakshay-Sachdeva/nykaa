import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SlideData } from "./Images/sliderData1";
import {Box,Image} from "@chakra-ui/react"

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//     };
//     return (
//       <Box w="100%" p={4} color="white">
        
//         <Slider {...settings}>
//         {SlideData.map((slide) => {
//         return <Image src={slide.image} height="auto" width="800px" />;
//          })}
//         </Slider>
//       </Box>
//     );
//   }
// }
function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "yellow",borderRadius:"50%", fontSize:"" }}
            onClick={onClick}
          />
        );
      }
export default class MultipleItems extends Component {
        render() {
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
          return (
                <Box w="80%" a color="white">
        
                <Slider {...settings}>
                {SlideData.map((slide) => {
                return <Image src={slide.image} height="80" p={2} />;
                  })}
                </Slider>
              </Box>
          );
        }
      }