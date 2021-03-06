import TopBrands from "./TopBrands";
import Feature from "./feature";
import { Carousels } from "../Carousels/carousel";
import { SlideData } from "../../Asset/Images/sliderData1";
import Footer from "./footer";
const data = [
  {
    link: "https://i.ibb.co/nbjz7mf/1.gif",
    head: " On Rs.3000: Get 5 Gifts",
    desc: " On Rs.4000: Additional Luxe Lipstick (Worth Rs.3850)",
  },
  {
    link: "https://i.ibb.co/8PzfHsm/2.jpg",
    head: "Upto 18% +",
    desc: "Free Glow Kit Worth Rs.198 On Rs.599",
  },
  {
    link: "https://i.ibb.co/pb74tJV/3.jpg",
    head: "Upto 33% Off",
    desc: "Buy 5 Get 3 On Sheetmasks!*",
  },
  {
    link: "https://i.ibb.co/hmrCjhw/4.jpg",
    head: "Upto 30% Off",
    desc: " ",
  },
  {
    link: "https://i.ibb.co/mtfsKN7/5.jpg",
    head: "Free 3 Bestseller Minis Worth Rs.399",
    desc: "On Rs.399 & Above + Upto 30% Off",
  },
  {
    link: "https://i.ibb.co/JBSVBhb/6.gif",
    head: "Upto 30% Off + 5% Off",
    desc: "On Purchase Of Rs.899 & Above",
  },
  {
    link: "https://i.ibb.co/Y3kB9My/7.gif",
    head: "Upto 50% Off + Free Shipping",
    desc: "On Purchase Of Any Kajal",
  },
  {
    link: "https://i.ibb.co/PxFp8kw/8.jpg",
    head: "2 Free Haircare Deluxe Samples",
    desc: "On Rs.1000",
  },
];

export const Home = ({ show }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Carousels show={SlideData} />
      <TopBrands data={data} />
      {/* <Feature/> */}
      {/* <Footer/> */}
    </>
  );
};
