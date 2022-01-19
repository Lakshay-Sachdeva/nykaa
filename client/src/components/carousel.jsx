// import "./styles.css";
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
// import { SlideData } from "./SlideData";

export  const Carousels=()=> {
     const   SlideData = [
                {
                  image:
                    "https://i.ibb.co/0CtVf94/slider1.jpg"
                },
                {
                  image:
                  "https://i.ibb.co/ynK1mK9/silder2.gif"
                },
                {
                  image:
                    "https://i.ibb.co/h2SW9wy/silder3.gif"
                },
                {
                  image:
                    "https://i.ibb.co/Wc55vfz/silder4.jpg"
                },
                {
                  image:
                   "https://i.ibb.co/VTnDYpt/silder5.gif"
                },
                {
                  image:
                   "https://i.ibb.co/M1jTd8M/silder6.jpg"
                }
              ];
  return (
    <Box w="100%" p={4} color="white">
      <ImageSlider slides={SlideData} />
    </Box>
  );
}
