<<<<<<< Updated upstream
import Footer  from "./components/footer";

function App(){
  return(
  <>
  <Footer />
  </>
  )
=======
import './App.css';
import { Input,Button } from '@chakra-ui/react'
import {ListItem,Wrap,UnorderedList,Image} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function App() {
  return (
    <div className="App">
     <Wrap bg='#1A202C' className='footer-0' p="3%">
       <div>
         <Image src='' className="image"/>
         <UnorderedList>
           
           <ListItem>GET SPECIAL DISCOUNT ON YOUR INBOX</ListItem>
           <ListItem><Input placeholder='Your Email'w='70%'className='image' /></ListItem>
           <Button w='20%' >SEND</Button>
         </UnorderedList>
       </div>
       <div>
         <Image src='' className="image"/>
         <UnorderedList>
           <ListItem>EXPERIENCE THE NYKAA MOBILE APP</ListItem>
           <Image w='32%' m={1} className='image' src='data:image/png;base64,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'className="image"/>
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
          <ListItem  >SHOW US SOME LOVE ❤ ON SOCIAL MEDIA</ListItem>
        
        <Flex >
          <a  href="https://www.instagram.com/mynykaa/?ref=badge"><Image  src="data:image/png;base64,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"/></a>
          

          <a href ="https://www.facebook.com/MyNykaa"><Image  mt='-1'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J20plrd1giVrUB8h3eC8HFLLfAnwpje6Mu_oVPaUniJvtIgrGju8K_PBMzj0esrS6nY&usqp=CAU"/></a>
          <a href="https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA"><Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhIbyxQ3Ek15GZaKAj8TVXc_GKP6WjxfGayV4TguH_TXCVPvz5rC2eKp5OPV-btKQb4g&usqp=CAU"/></a>
          <a href="https://twitter.com/MyNykaa"><Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8AAAD8/Pzt7e35+fn29vba2tp0dHTh4eH39/fX19fk5OQxMTHQ0NDw8PDp6elLS0sgICC0tLSrq6vDw8OVlZWhoaFhYWEnJyeMjIw5OTmFhYV9fX3AwMAoKCi4uLhBQUENDQ1UVFRcXFw3NzdISEhqamqSkpJ3d3cbGxsLCwuAgICdnZ0/Pz9gYGBLFBENAAAPZElEQVR4nN1d52LiuhJOXIAAJhgbA6EaEieU7Ps/3iWApZGtXmzO/X7s7jkhkgZJ02f08uIYXuBHk+SyLMa/cRznr6/59a/fr9nykk3S98BzPb9LBIPosjpsXrmI9z/TdBC2vVZ1jKLpYcinDWK+X6Tvba9ZHt56qUAcxma1/Q/spde77HWoK/E17Qdt08BDX2/zSMxX0ZOyn/7CAnkPIs9R29TUECYCnqmKPBu1TRNEvyta8GnzsT/8K7o3FP/+7X83ueh3irRtukpsx5xlzmfn6bYz8MPK3fJCf9BbX84F72j/Jk/AdrwkZq0vPifRm5BpeEE/WX6yxsinLdMYTBkL+5qmakuLsv2RPtayxQsZZifq2TqnWosKo8UXlcbvtmjMaOdzlw1MpNl7QlMY8u82JGRKEQ/DiwXlcpT8Uojcmg+shl79qz6u+tZG/65/fbtGlYBgUVvAeGJVa/bSQ22KbnN6ef2Adq1tH0ZvVTslDR3VsKbArHxHM9WOyt7RTATWeWXWs8NZw+8qjRN3kz1QPTqrgdv5RtV9LNzexk5Fizw04HoYVW7FySVTzci5Phpi4J2Kar9wNZFX+TITVxPVsSXVp72bkzogVY1ZE2wNIfghJo87DuZIycvQuHUakULY/gFKiPG7bVhtJFe1fRmXxOiNq8F3pIQF2bU69gwOvWv0BkKExDrG9g5S8AEH/rY2rgaIy3K09VWPdnDYlh1gEZQbRzsKlQ/dREPHSpoYIyj+jz0LI/rwes+ewd9OqMbmgtHPHXJoTWQ2SfShqt2gmsbHGiwqNzuob5CLri2tzwL6YFmxkX0DmcxThYN6gDvEBu5U6FBzoesaYDAHDF6b/wF9/vRkBF45BBCMe80xLmAHbcgdyxiBg7rSGmH7vEf0DriLU43fh+zqqZgMRi83YfQhuMlPE4utogd2QVlmADbq3kVZhzcZ7yQUjAiv8lORoQJ7+qK3Ri0E953o31RPGRVqgtepZhEDp8yPxkJ1kQ7H1z+zu7UmZ4eCILSKUjnCv/altVQ9LP4OjL/D6+1vL91iypdUBV6rgkjDlzBuMNPsL57mP47dMQpwNJjPyrFmuZGeClgnDcqJPx/MvnQ6d/8BNsnXOwf4g2fJqQAPbtBeIl2+ECJ1A9hSknINW0yF8bqlUQujlRiLBR1m/LGUyMDq6Lw5n0VCI+6KTynXLN4TGc4PjnVzlzCiEPcqn9kG1iwRbsdXvDnH6HtOIa+7lbds8RH4EH4WX9tfkzWrYVelbpwpnh8sFTPBJz1sdDVnEtaSLuLxeLa8rN/l3fZARxE4wjFLa+6MTqoEIgyLiawHGp9Tvn7q48E5fLRjNXvmnUng/cBKmjbYFc6Vn/g48+7BVU9a2Is/0bLYSCxlbD/MT3ecT2G7nivrb59YWfJs1BPIKJDJ2cEDcex9HJ7jjojOjwW1vP8qBxGLfHkJEZPcSczGZzN43h/jjWQkBtfxIeTtmNkwFSFkrgjUO+go/kyMEnjJ6DkfQmcDUt5YYh9voYB9XciZu/ranewZvaN444+GdT/GTUQZnSIveac69VC3aoBXx0DBp4CposM1FKxbKIFqWpZmBh/LomCDfxnxJlJVdpTTRf8ChCs7pKrGVqhMoMh2QMdwTPkhVmfEJplHL3IaKtYqqbAZORLxJlKYPGYfEmvb0ub+w0rB9SxQ11jgzoDuD8UUzsufSflm2GWUM2mldcYcg4uYx9Wwo7ems6Af5VKKik+d/I6xnGWuJikADrxRUTyqpgShTZHMt2CbPFfsZLwrmlv4yhf9iAl+Vn6A90SW6/PZxEYY7dLewleu4fOGPlS5LYjPcI8AgX/UyRGGAhrrFSPy4Dm30Tdf4TVIpZOPNHoiw+6Ldx97gl/mg2MZYMVF5n/zQaYs0rBnmx7Culo+OCIDVfgRXzDaWiXvjCc+aV2GDqApCxE4FjriNTO4VLQbig42RgkpxIUqvqQsex7YpwO53Y7g20WHVOxPrSCa0xcAsKFwvpBZPCwLjkcNnSxwTBEnVY9oBxIXql5Wx9T65MFWgdHggJuiBERXJlDVHqPX+yqB7bgJyo/EyGJG4l4tpN2LLucuqwK7goL4yk2kfYmqzgKAtCUk9JEGppAhO2LX0FNxhILWUFTcwT5v6FShTCnkB1ZwuNQ8GUL8IANZx/Ktg53ohUQROpP543/IRVAro8hjWHL4i/izEuCobsj941W2Y8b+nRoCtUN6x8P0tNTlhX3ikALzkBfoGirlJZx1FnWTYoyArzLYXAPN8DjJ6BoqKTR6qvMu5GVdqIFtBvllN4tHlBfZCCoEEslICohDz1Yrog3bG4HcNbeLiHiGyjV8IcKuKtgNxJ+RBNvAQBfxJhHRoRWHd0hwHRls5MaUlWB7rlE2ws2dgni3cvhBi9lYxHyxfR9h0yUI/TRbnf4MQHRObqopUjAEcQ8K9J1J9jAcF0X3pyhmXw8z5yZ1y5/efN/lrdSpWjBxtjjC3TYuVft5CDRxrapTPYbqEMM7g0U5JQNgWOill6iHj5yirJxFy4qAs1uzfLnaSKJVIHGABEQCqNXNgfK0QkguAFJgkPmyBMJCv8ht8Aw89UCcwaDU27pYWHB0IDHEbQWdYndOq6GmkpmOiX+aYJS0xFb3V7FPWU+5mqvNW7oD/5lR+BJNlsYuQg36WKl9iDkESPqbNGEYZUaNZw0xXkzeR1V1BfmqQ0Shfralb8vgM8HvofjrHVoUxb3vERAR5b+0Cw+eTOY/CEFiPkIU6lZqM8sIWsLDpELOpzWiULPIkBfQbwHz0gmMnCwTRKFuclqbPKaGBbIAkYWYGFNoFsy1igUQjBQKtXO3LcSRbOAjIwQG8j5liEL9XNj2eU18SKp2A3Io2qDQTqBFB5vVd7bt+z5FpUY9WaxQqJeCZwEc3mGZwrakPmdFtil86bVhWfBUaco9NK2D6TRvBvNymSm81LzY8G0ylq4tsAJeUYhFiU/A60+Ws6/PeSOUcuMsFAptNr/o6YRPlcG1FSh6qcUuUFHeBIE5twKCYlvYK0w3zuiSA7/rDsU+tFZR2ZTc4DN/io1vq1mmnUQLMeb8ZQA/TekgM/W1PRAwFmQdgsIe4Guz5C8toRkYVgafzxD+Uis+b4xaXbYjiELyYOMsxC0gGuIz3LKSKzwQtzCOPZFoiNGIyutg7Mk0fliBvVwSHnaiZcD4oWEMuIZGrGGhqQdjwGZxfAoa4DXiJoIwjm+Ui0GFc4M/FufFwFwMk3waBvyL5WfmKpAwEsqP3qQ80m8sNtwJOtPCmY0okX+HLPxbTpR2XpsQI3Exhg4kVBMyr003N1EIz40dLGPIkrmJuvmlQgItFFVQIMXyyfxSeo5wx7QhZCjuyqIDqSaA1Rxhep73amikxvVzJwTKuXWred70XH3v+DrVl5CuZKKcr6Waq/+SP/6brLfoX5UATQHiu8rKlGwCWK23YNXM/DWI1HrQKaOuzgIk67LqNTOsuqebhqn8qNraWbLiXLIpRb3uiVm7do/RSzWiKpG6kRE3yAaP6rVr7PrDxw+6smMnwuJnA8gyBUr9IVZNq0IwLFcs02On79Y0lA47oMQCoByw64BDfOiKLedGBp1vx7EK+agDrQ6YU8sdgEZHp0NGczR7nQn3ZWYrkA8cUWu5ufX4ZC+n43g6icoHcf3+OjnvctfUvSpZdtR6fH5PhfZTDzcqCiS9pwK/L4YzCS4JpccAWZvF722SUiduCmqPV7B6mwj60/RaLKpQC90y+9OIegxV369sDHvFpoXMHkPYs3FkiPZ2LqOyHY68fHWvU17+iBUS6DSfir9TNsJxFXVdPUG85sT89abFhkZqARIVlH5tMj33tk1mBBUajXy5Pfek+iaOGktf03ssnts3UbL35Zq6HtuI9bJ7BL0vJfuXBu7rm4+63ndB/1LpHrR9h2b8q0G7V3EPWmxFiJqcbHN39G31XZjCPsLSvaCvSNzQuDfJH8SJLmxpINnP+w9eYt1rv/k2esZVpp+3bE/2B1KrWcGzteEDxrgogseI5frqI/gXS5rczqwr+B/k+upLvo0A0ZsaG1ZfiY1nCCTfRgC5ofLJJ/2pfnXXvLu288oCDgUJLhjKllLLkfLXS42t3E/7tp4EA81yRB56/XdmwvVUQRVQfkmGD8xAxBal2VtBvTQrxtztzD8O36ntN2ywKJTobWnhvafgvRMl36vubD/+/JznV8w/h+NZd7VIop69x00wFNeMe5JuzLOkAi8Ir7j+ZTwUB1j5kHutsZV310yABcBRbk/aeTtPH8CbK6vWtvP+oS403j9s6w1LTeBLpfDWH5CfllL43UHvHVLojWnyLVkNgG7Uar6Plt4DVgYo71Bl/C2/6SwJ+KazqsT9/3+Xm+jXbPWtPHsY5HiJOg5WWMFk6RU5u/CBg4HdNpkHWP7S3IOW0hgBAtXCxBgg1nR6ul2EO7jXHgV6J56MxAHghAY2ENHy96lU1B6I88UmJucbzMSzWO1tCsjoY7OyQh/u4tPYUjDEdzJlgsRzywovC7gEkTRhzh98GNm2XXSihZVdAq8kwrTKoZ1aWgOMIIM/2pHTIyLK1LKS2oeRkqNRsAqAfAdBT0GyBKKO42jRM0m8QPblwuUphZCI531Z9VCSKdx2iqKVkRLpPLZdnWSZT9epg5cBsmeKfclF5pieGmc4ERkNcaF9DMhaCp2kLH0EZE7d0Y1NXs0xbVCJ25LRdKW0aCVUckx/GzI3OpWnn10qj9UW81qlbYoYVdOTHX+v1Y4JWq9VK2BU7TpVOI8zrE+VKZcOWU5Y6xzaxOUPazmmZ0c0vtXoGzfEwNe1PKGuA+7dq7UQyZvzvgf1Orz9xOr98NL6Y7ysN03doFdPEjqerW3k4LuezqGXFm2ClNL0YphZkB6jZFcfuR1lP6Nl7u+ygUkGx3tCyyA7fdvqnaOIMKtKjjuR50jrxrxFizFtvNdFoxewsijGg8D5+JKqGVhRxnrR1KW8lYGXMVNM43MSBcLj5QX9hP2maT59hlSJLf1s3bGZnS/b3sAPq6SG/ntvfVlyK4h/tdP2bSMS1u6dNh/7w6zb7f6srn/MDvvfTS76neKpYs9hYrn5VZ61yF4Y6C+sFZrOV08V6AKIdDKFq4hXUUvSTwpB78LjO0Lspv1nYS4ceFpJ339nc/sMokESo3R6UCBzs1+krcd81BEMomy1F3Sli/c/l2jwH9q7OrzAjybZZTn7+ojj+KrInq5/fX79O1+yJH0X6zzG+B+3MucrSVuwrgAAAABJRU5ErkJggg=="/></a>
          <a><Image src="https://www.pinterest.com/mynykaa/"/><Image src="data:image/png;base64,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"/></a>

        </Flex>
        
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
>>>>>>> Stashed changes
}
export default App;