import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Join = () => {
    return (

    <>
    <section className="Join bg-[#f1f3f2] w-full ">

        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center md:space-x-0 ">

        <div className="left-side w-full md:w-1/4 flex justify-center md:justify-start ">
            <img className=" w-[75%] md:w-[100%] " src= "/images/h1.webp" alt="headphone-img" />
        </div>

        <div className="center-side w-[90%] lg:w-[45%] md:w-2/4 text-center  mx-auto">
            <p className="text-[1.7rem] md:text-[2.5rem] font-[900]">Join Our Newsletter </p>
            <p className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem]">sign up for deals,new products and promotions</p>

            <div className="signup flex justify-between items-center 
            border-b border-gray-400 py-2 mt-5 
            sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.5rem]">
                
               <div className="Email">
                 <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-[#121212]" />
                <input type="email" placeholder="Email address" className="bg-transparent font-bold outline-none "/>
               </div>

                <button className= "font-inter text-[#6C7275] font-bold"><a href="#">Sign Up</a></button>

            </div>
            


            

        </div>

        <div className="right-side w-full md:w-1/4 flex justify-center lg:w-[30%] md:justify-end mt-3">
            <img className="w-[75%]  md:w-[100%]" src= "/images/h2.webp" alt="headphone-img" />

        </div>

    
        </div>


    </section>
    </>
)
}

export default Join