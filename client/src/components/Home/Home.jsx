import Navbar from "./NavBar";
import { Carousels } from "../Carousels/carousel";
import { SlideData } from "../../Asset/Images/sliderData1";

export const Home = ({ show }) => {
  return (
    <>
      <Navbar />

      <Carousels show={SlideData} />
    </>
  );
};
