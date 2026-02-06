import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser, faMagnifyingGlass,faChevronDown,faBagShopping,faBars,faX} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom'; 
import { useState } from "react";

const Header = () => {

    const [isopen, setIsopen] = useState(false)
    const toggleMenu = () =>{
        setIsopen(!isopen);
    };

    return (

        <header>

            <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="logo flex items-center space-x-2">
                <div className="menu-icon md:hidden">
                {!isopen &&(
                    <div onClick={toggleMenu} className="cursor-pointer">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                )}

                {isopen &&(
                    <div onClick={toggleMenu} className="cursor-pointer fixed z-30">
                    <FontAwesomeIcon icon={faX} className="text-white"/>
                        
                    </div>
                )}

                {isopen ? (
                    <ul className="bg-gray-800 text-white fixed top-0 left-0 flex flex-col justify-center items-center
                    z-10 duration-100 ease-in min-h-screen space-y-6 py-10 px-6 text-center">
                    
                    <NavLink to= "/">Home</NavLink>
                    <NavLink to= "/shop">Shop<span><FontAwesomeIcon className="ml-1" icon={faChevronDown}/></span></NavLink>
                    <NavLink to= "/collection">Product <span><FontAwesomeIcon className="" icon={faChevronDown}/></span></NavLink>
                    <NavLink to= "/customize">Contact Us</NavLink>

                    
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <FontAwesomeIcon icon={faCircleUser} />
                    </ul>
                ):(
                    <div className="bg-gray-800 text-white fixed top-0 left-[-150%] flex flex-col items-center
                    z-10 duration-100 ease-in min-h-screen space-y-6 py-10 px-6"></div>
                )}
            

                
                </div>
                <a className="font-[800] font-poppins text-[#000000] md:text-[1.4rem]" href="#">3legant.</a>
            </div>
            
            <nav className="sm:flex-col lg:flex-row ">

                <ul className="tems font-bold font-SpaceGrotesk lg:flex-row text-[0.875rem] gap-x-10 hidden md:flex">

                    <NavLink to= "/">3legant</NavLink>
                    <NavLink to= "/shop">Shop<span><FontAwesomeIcon className="ml-1" icon={faChevronDown}/></span></NavLink>
                    <NavLink to= "/collection">Product <span><FontAwesomeIcon className="ml-1" icon={faChevronDown}/></span></NavLink>
                    <NavLink to= "/customize">Contact Us</NavLink>
                
                </ul>
            </nav>

            <div className="icons flex  items-center space-x-3 text-[1.2rem]">              
            <div className="magnifyglass-circle-icons  space-x-3 hidden md:flex">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <FontAwesomeIcon icon={faBagShopping} />
            <div className="bg-[#000000] text-center w-[1.25rem] h-[1.25rem] text-[0.8rem] rounded-[50%] text-white">2</div>
            </div>

            </div>

        </header>

    ) 

}

export default Header