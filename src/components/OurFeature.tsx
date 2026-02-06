import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTruckFast,faMoneyBill,faLock,faPhone} from "@fortawesome/free-solid-svg-icons"

const OurFeature = () => {
return (

    <>
    <section className="OurFeature container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">

    <div className="feat  h-[180px] font-poppins rounded-2xl bg-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">

        <FontAwesomeIcon icon={faTruckFast} className="mb-4 flex h-6 w-6 items-center justify-center rounded-full p-2 bg-black text-white group-hover:bg-primary transition" />
        <h5 className="font-[500] md:text-[1.25rem] text-lg  text-gray-900">Free Shipping</h5>
        <p className="font-[400] text-[0.875rem] mt-1 text-sm text-gray-500">Order above $200</p>

    </div>

    <div className="feat font-poppins h-[180px] rounded-2xl bg-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">

        <FontAwesomeIcon icon={faMoneyBill} className="mb-4 flex h-6 w-6 items-center justify-center rounded-full p-2 bg-black text-white group-hover:bg-primary transition"  />

        <h5 className="font-[500] md:text-[1.25rem]">Money-back</h5>
        <p className="font-[400] text-[0.875rem] text-[#6c7275]">30 days guarantee</p>

    </div>

    <div className="feat font-poppins h-[180px] rounded-2xl bg-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl  ">

        <FontAwesomeIcon icon={faLock} className="mb-4 flex h-6 w-6 items-center justify-center rounded-full p-2 bg-black text-white group-hover:bg-primary transition" />

        <h5 className="font-[500] md:text-[1.25rem]">Secure Payments</h5>
        <p className="font-[400] text-[0.875rem] text-[#6c7275]">Secured by Stripe</p>

    </div>


    <div className="feat font-poppins h-[180px] rounded-2xl bg-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl  ">

        <FontAwesomeIcon icon={faPhone} className="mb-4 flex h-6 w-6 items-center justify-center rounded-full p-2 bg-black text-white group-hover:bg-primary transition" />

        <h5 className="font-[500] md:text-[1.25rem]">24/7 Support</h5>
        <p className="font-[400] text-[0.875rem] text-[#6c7275]">Phone and Email support</p>

    </div>


    </section>
    
    </>
)
}

export default OurFeature