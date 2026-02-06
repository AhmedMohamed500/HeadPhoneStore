import {faArrowRightLong ,faTicket,faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Offer = () => {
  return (

    <>

    <div className="Offer bg-[#141718] flex justify-center space-x-3 relative z-30 p-1.5">

        <div className="Offer-Description flex  space-x-2 items-center">

        <FontAwesomeIcon className="text-white" icon={faTicket} />
      <p className="text-white font-inter text-[0.75rem] md:text-[0.875rem]">30% off storewide — Limited time!</p>
        <span className="close-icon md:hidden items-center">
            <FontAwesomeIcon icon={faX} className="text-white text-[0.5rem]"/>
          </span>  
          </div>

          <div className="Offer-Description space-x-1.5 items-center">
            
            <div className="shop-now hidden md:flex" >
              <a className="text-[#FFAB00] space-x-0.5 font-inter border-b text-[0.75rem] md:text-[0.875rem]">Shop Now
            <FontAwesomeIcon className="text-[#ffab00] ps-1.5" icon={faArrowRightLong } />
            </a>
            </div>

            </div>
        
        
    </div>    
    </>
  )
}

export default Offer