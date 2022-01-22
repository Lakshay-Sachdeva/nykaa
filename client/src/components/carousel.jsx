
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";


export  const Carousels=({shows})=> {
  return (
    <Box w="100%" p={4} color="white">
      <ImageSlider slides={shows} />
    </Box>
  );
}
