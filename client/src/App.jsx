import {Wrap,Button} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import './App.css';
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
function App() {
  return (
    <div className="App">

      
    
<Wrap className="feature" ml='10%'>
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
     
     <Wrap className="footer" bg="gray" h='400'pl='15%' pt={50} >
      
       <div m={3}>
       <UnorderedList>
  <ListItem>NYKAA</ListItem>
  <ListItem>WHO ARE WE?</ListItem>
  <ListItem>CAREERS</ListItem>
  <ListItem>AUTHENTICITY</ListItem>
  <ListItem>PRESS</ListItem>
  <ListItem>TESTINONIALS</ListItem>
  <ListItem>NYKAA CSR</ListItem>
  <ListItem>RESPONSIBLE DISCLOSURE</ListItem>
  <ListItem>INVESTOR RELATIONS</ListItem>
</UnorderedList>
       </div>
       <div m={3}>
         <UnorderedList>
           <ListItem>HELP</ListItem>
           <ListItem>CONTACT US</ListItem>
           <ListItem>FREQUENTLY ASKED QUESTIONS</ListItem>
           <ListItem>STORE LOCATOR</ListItem>
           <ListItem>CANCELLATION&DELIVERY</ListItem>
           <ListItem>SHIPPING&DELIVERY</ListItem>
           <ListItem>SELL ON NYKAA</ListItem>

         </UnorderedList>
       </div>
       <div m={3}>
         <UnorderedList>
           <ListItem>INSPIRE ME</ListItem>
           <ListItem>BEAUTY BOOK</ListItem>
           <ListItem>NYKAA TV</ListItem>
           <ListItem>NYKAA NETWORK</ListItem>
           <ListItem>BUYING GUIDES</ListItem>
         </UnorderedList>
       </div>
       <div m={3}>
         <UnorderedList>
           <ListItem>QUICK LINKS</ListItem>
           <ListItem>OFFER CONE</ListItem>
           <ListItem>NEW LANCHES</ListItem>
           <ListItem>NYKAA MAN</ListItem>
           <ListItem>NYKAA FASHION</ListItem>
           <ListItem>NYKAA PRO</ListItem>
           <ListItem>NYKAA FEMINA</ListItem>
           <ListItem>SITEMAP</ListItem>
         </UnorderedList>
       </div>
       <div m={3}>
         <UnorderedList>
           <ListItem>Top CATEGORIES</ListItem>
           <ListItem>MAKEUP</ListItem>
           <ListItem>SKIN</ListItem>
           <ListItem>HAIR</ListItem>
           <ListItem>PERSONAL CARE</ListItem>
           <ListItem>APPLIANCES</ListItem>
           <ListItem>MOM AND BABY</ListItem>
           <ListItem>WELLNESS</ListItem>
           <ListItem>FRAGRANCE</ListItem>
           <ListItem>NATUREAL</ListItem>
           <ListItem>LUXE</ListItem>
         </UnorderedList>
       </div>
     </Wrap>
    </div>
  );
}

export default App;
