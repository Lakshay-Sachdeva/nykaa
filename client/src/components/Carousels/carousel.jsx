
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";


export  const Carousels=({show})=> {
  return (
    <Box w="100%" p={4} color="white" mt="150px">
      <ImageSlider slides={show} />
    </Box>
  );
}
