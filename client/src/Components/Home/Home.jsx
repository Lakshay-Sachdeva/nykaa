import Navbar from "./NavBar"
import {Carousels} from "../Carousels/carousel"
import {SlideData} from "src/Asset/Images/sliderData1.jsx"



export const Home =({show})=>{
        return(
                <>
                <Navbar/>
                
                <Carousels show={SlideData}/>
                
                
                </>
        )
}