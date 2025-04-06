import { NavLink } from "react-router-dom";
import { bestDealsImage, bestSellersImage, electronicsImage, fashionImage, homeImage, navHeading } from "../utils/data";
import logo from "../images/nivzone_transparent.png";
import { useState } from "react";
import NavBarMobile from "./NavBarMobile";

const NavBar = ({setBgImage}) => {
    const [isMobileNavShow, setIsMobileNavBarShow] = useState(false);
    const changeImg = (url) => {
        
            switch(url)  {
                case 'Home': setBgImage(homeImage); break;
                case 'Electronics' : setBgImage(electronicsImage); break;
                case 'Fashion' : setBgImage(fashionImage); break;
                case 'Best Deals' : setBgImage(bestDealsImage ); break;
                case 'Best Sellers' : setBgImage(bestSellersImage); break;
                default : setBgImage(homeImage)
                
            } 
        }
    
    return <nav className="max-w-[1400px] mx-auto z-1 w-full  fixed  top-0  ">
       <section className="py-[20px]  md:bg-black/50 bg-gray-700/50    text-white ">
            <div className="flex items-center justify-between md:h-[90px] h-[60px] w-full">
                <div className=" h-[50px]  mb-[40px] w-[180px] mx-auto  lg:ml-[90px] ">
                    <img src={logo} alt="Nivzone logo" /></div>      
                <ul className="cursor-pointer lg:flex hidden items-center justify-between gap-[40px]   text-[1.3rem]" onClick={(e) => changeImg(e.target.id)}>
                    {
                    navHeading.map((heading, index)=> {
                         const updateURL = heading.split(" ").join("")
                    return <NavLink key={heading + index} to={`/${heading == 'Home'?'': updateURL}`} className="relative flex w-fit text-white group"> 
                    <li  id={heading} className="hover:text-red-600" >{heading} 
                        <span className="absolute left-0 bottom-0 h-[2px] bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </li> 
                    </NavLink>
                    
                    })}
                </ul>
            <span><i className="fa-solid fa-cart-shopping mr-[40px] ml-[30px] cursor-pointer text-[1.3rem]"></i></span>
                 </div>
                 <span className="md:hidden pl-[14px] text-[1.6rem]" onClick={ () => setIsMobileNavBarShow(true)} >
                <i className="fa-solid fa-bars text-slate-800"></i>
                </span>
           <NavBarMobile isMobileNavShow = {isMobileNavShow} setIsMobileNavBarShow = {setIsMobileNavBarShow} setBgImage= {setBgImage}/>
        </section>
    </nav>
}


export default NavBar;