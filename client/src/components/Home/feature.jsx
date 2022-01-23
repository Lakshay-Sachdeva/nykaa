import {Wrap,Button} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import "../../App.css";

function Feature() {
  return (
    <div className="App">

      
    
<Wrap className="feature" ml='11%'>
    <div >
   <Image  m="1" borderRadius='5px' boxSize='250px'  src ="https://i.ibb.co/S6RggJF/feature1.jpg"  />
   <Button bg="white" w="100%">Upto 30% Off</Button> 
     </div>
     <div>
        <Image m="1" borderRadius='5px' boxSize='250px' src ="https://i.ibb.co/fFQK2f7/feature2.jpg"/>
        <Button bg="white" w="100%"> Upto 50% Off On Bestsellers</Button> 
        </div>
        <div>
        <Image m="1" borderRadius='5px' boxSize='250px'  src ="https://i.ibb.co/80Fxbmf/feature3.jpg"/>
        <Button bg="white" w="100%">Upto 35% off </Button> 
        </div>
        <div>
        <Image m="1"  borderRadius='5px' boxSize='250px'src ="https://i.ibb.co/44v8hKx/feature6.gif"/>
        <Button bg="white" w="100%"> Upto 20% off</Button> 
        </div>
        <div>
        <Image m="1" borderRadius='5px' boxSize='250px' src ="https://i.ibb.co/8mqfKfL/feature5.jpg"/>
        <Button bg="white" w="100%">Complimentary Wishful Yo Glow
        </Button> 
        </div>
        <div>
        <Image m="1" borderRadius='5px' boxSize='250px'  src ="https://i.ibb.co/5YR7jsT/feature7.jpg"/>
        <Button bg="white" w="100%">Sample On All Orders </Button> 
        </div>
        <div>
        <Image m="1" borderRadius='5px' boxSize='250px' src ="https://i.ibb.co/vPMVtbd/feature8.gif"/>
        <Button bg="white" w="100%"> Upto 30% Off</Button> 
        </div>
        <div>
        <Image m="1" borderRadius='5px' boxSize='250px' src ="https://i.ibb.co/9bmknpS/feature4.jpg"/>
        <Button bg="white" w="100%">Day And Night Serum
For Brighter </Button> 
        </div>
</Wrap>
  
    </div>
  );
}

export default Feature;
