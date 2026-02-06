
const Promotion = () => {
return (

    <>
    
    <section className="Promotion flex items-center flex-col w-[100%] md:flex-row bg-[#FFAB0066]">

        <div className="man-img order-2 md:order-1">
            <img src="/images/promotion.webp" alt="man-img" />
        </div>

        <div className="promotion-side p-7 md:p-20 order-1 md:order-2">
            <h4 className="font-[700] text-[#377DFF] mb-1">PROMOTION</h4>
            <p className="font-poppins text-[2rem] md:text-[2.5rem] font-[500] text-[#121212]">Hurry up! 40% OFF</p>
            <p className="text-[0.875rem] md:text-[1.25rem] font-inter font-[400] text-[#121212]">Thousands of high tech are waiting for you</p>
            <h5 className="font-inter font-[400] mt-6">Offer expires in:</h5>

            <div className="Offer-Time flex justify-start space-x-4 mt-3">

                <div className="time">
                    <div className="number text-center">
                        <p className="text-[34px] text-[#141718] font-[500] w-[55px] h-[55px] bg-[#FEFEFE]">02</p>
                        <p className="text-[0.8rem]">Days</p>
                    </div>
                </div>

                <div className="time">
                    <div className="number text-center">
                        <p className="text-[2.125rem] text-[#141718] font-[500] w-[55px] h-[55px] bg-[#FEFEFE]">12</p>
                        <p className="text-[0.8rem]">Hours</p>
                    </div>
                </div>

                <div className="time">
                    <div className="number text-center">
                        <p className="text-[34px] text-[#141718] font-[500] w-[55px] h-[55px] bg-[#FEFEFE]">45</p>
                        <p className="text-[0.8rem]">Minute</p>
                    </div>
                </div>

                <div className="time">
                    <div className="number text-center">
                        <p className="text-[34px] text-[#141718] font-[500] w-[55px] h-[55px] bg-[#FEFEFE]">05</p>
                        <p className="text-[0.8rem]">Second</p>
                    </div>
                </div>            

            </div>
                <div className="shop-button bg-[#141718] w-[50%] md:w-[35%] p-2 text-center rounded-[8px] mt-6">
                    <button><a className="text-[0.875rem] md:text-[0.938rem] font-inter font-[500] text-[#ffffff]" href="#">Shop Now</a></button>
                </div>
        </div>



    </section>
    
    
    </>


    )
}

export default Promotion