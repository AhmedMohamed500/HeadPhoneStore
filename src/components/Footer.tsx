import { faInstagram , faFacebookF , faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (

        <>
        <section className="Footer bg-[#121212] h-[70%] md:h-[50%] lg:h-[80%] flex items-center flex-col p-4">

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-b-1 border-[#E8ECEF]">

            <div className="left-side flex justify-center items-center space-x-0 md:space-x-7 mb-3 md:mb-10 flex-col md:flex-row">
                <a className="font-poppins text-[1.5rem] md:text-[1.20rem] font-[500] text-[#ffffff] lg:text-[1.1rem] xl:text-[1.2rem]" href="#">3legant.</a>
                    <span className="text-white ">|</span>
                <a className="font-inter text-[0.875rem] font-[400] text-[#E8ECEF] md:text-[1rem] md:font-[500] lg:text-[1.2rem] xl:text-[1rem]" href="#">Head Phone Store </a>    
            </div>

            <div className="links mb-1 md:mb-10 ">
                <ul className="flex flex-col md:flex-row font-inter 
                font-[400] text-[0.875rem] md:text-[0.900rem] md:font-[500] lg:text-[1.1rem] xl:text-[1rem]
                text-[#FEFEFE] space-y-5 justify-end md:space-y-0 md:space-x-2 text-center
                p-5 md:py-8 md:px-0">
                   
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    
                </ul>
            </div>
        
        </div>

        
         <ul className="social-icons flex mt-3 text-[#FEFEFE] space-x-2 md:space-x-3 text-[1.2rem] md:text-[1.5rem] xl:text-[1.4rem] mb-0 md:mb-4">            
               
            
                <li> <FontAwesomeIcon icon={faInstagram} /> </li>
                <li> <FontAwesomeIcon icon={faFacebookF} /> </li>
                <li> <FontAwesomeIcon icon={faYoutube} /> </li>

                
                
                    
        </ul>

        
     <p className="font-poppins mt-3 text-center md:text-left space-x-1 order-3 mb-4 font-[400] text-[0.75rem] md:text-[1.05rem] md:font-[500] xl:text-[1rem] text-[#E8ECEF]">Copyright © 2025 3legant. All rights reserved</p>

            

    </section>

        
        </>
    )
}

export default Footer