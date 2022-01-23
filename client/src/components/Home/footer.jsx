import '../App.css';
import { Input,Button } from '@chakra-ui/react'
import {ListItem,Wrap,UnorderedList,Image} from '@chakra-ui/react'
function Footer() {
  return (
    <div className="App">
     <Wrap bg='#1A202C' className='footer-0' p="3%">
       <div>
         <Image src='' className="image"/>
         <UnorderedList>
           <ListItem>GET SPECIAL DISCOUNT ON YOUR INBOX</ListItem>
           <ListItem><Input placeholder='Your Email'w='80%'className='image' /></ListItem>
           <Button w='20%' >SEND</Button>
         </UnorderedList>
       </div>
       <div>
         <Image src='' className="image"/>
         <UnorderedList>
           <ListItem>EXPERIENCE THE NYKAA MOBILE APP</ListItem>
           <Image w='32%' m={1} className='image'src='data:image/png;base64,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'className="image"/>
         <Image w='32%'m={1} src='data:image/png;base64,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'/>
         </UnorderedList>
       </div>
       <div>
         <Image className='image'src=''/>
         <UnorderedList>
           <ListItem>FOR ANY HELP YOU MAY CALL US AT1800-267-4444</ListItem>
           <ListItem fontSize='xs'>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</ListItem>
         </UnorderedList>
       </div>
     </Wrap>

        <Wrap className="footer2" bg="gray" h='400'pl='13%' pt='2%' >
      
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
          <ListItem>CANCELLATION & DELIVERY</ListItem>
          <ListItem>SHIPPING & DELIVERY</ListItem>
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
    <Wrap className="footer1" p={20} >
        <div >
          <Image className="image" p='10%' mt='-10%' src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg'/>
          <UnorderedList>
            <ListItem>Free shipping</ListItem>
            <ListItem   ml='38%'h='1px' bg='#CBD5E0'></ListItem>
            <ListItem fontSize='xs' >for orders above INR499</ListItem>
          </UnorderedList>
        </div>
        <div w={10}>
          <Image className="image" p='10%' mt='-10%' src='https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg'/>
          <UnorderedList>
            <ListItem>EASY RETURNS</ListItem>
            <ListItem   ml='36%'h='1px' bg='#CBD5E0'></ListItem>
            <ListItem fontSize='xs' >15 Day Easy Returns For Most Products</ListItem>
          </UnorderedList>
        </div>
        <div>
          
          <Image className="image" p='10%' mt='-10%' src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg'/>
          <UnorderedList>
            <ListItem>PRODUCTS</ListItem>
          <ListItem   ml='36%'h='1px' bg='#CBD5E0'></ListItem>
          <ListItem fontSize='xs'>Sourced Directly from Brands/ Authorised Distributors</ListItem>
          </UnorderedList>
        </div>
        <div>
          <Image className="image" p='10%' mt='-10%' src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg'/>
          <UnorderedList>
            <ListItem>2400+ BRANDS</ListItem>
            <ListItem   ml='36%'h='1px' bg='#CBD5E0'></ListItem>
          <ListItem fontSize='xs'>Well Curated 1.9Lakh +Product</ListItem>
          </UnorderedList>
        </div>
        <div >
        <UnorderedList fontSize='xs'>
          <ListItem >SHOW US SOME LOVE ❤ ON SOCIAL MEDIA</ListItem>
        
        </UnorderedList>
      </div>
      </Wrap>
      <Wrap bg='#D53F8C' p="1%">
        <Wrap  px='30%'>
        <div> <UnorderedList fontSize='xs'><ListItem>TERMS & CONDITION</ListItem></UnorderedList></div>
        <div> <UnorderedList fontSize='xs'><ListItem>SHIPPING POLICY</ListItem></UnorderedList></div>
        <div> <UnorderedList fontSize='xs'><ListItem>CANCELLATION POLICY</ListItem></UnorderedList></div>
        <div> <UnorderedList fontSize='xs'><ListItem>PRIVACY POLICY</ListItem></UnorderedList></div>
        </Wrap>
        <Wrap px='38%'> 
        <div> <UnorderedList fontSize='xs'><ListItem>© 2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</ListItem></UnorderedList></div>
        </Wrap>
      </Wrap>
    </div>
  );
}

export default Footer;
