
const ShopCollection = () => {
return (

    <>
    
    <section className="Shop-Collection container mx-auto px-4 space-y-7 ">
        <h2 className="font-[500] mb-2 md:mb-2 text-center md:text-left text-[2rem] border-b border-gray-100 pb-4">Shop Collection</h2>

    <div className="Collection-Cards grid grid-cols-1 md:grid-cols-3 gap-4">
            
        
            <div className="col-span-1 md:col-span-2 md:row-span-2 bg-[#F3F5F7] ">

                <div className="left-img flex flex-col hover:cursor-pointer ">

                <img className="h-full w-[100%] md:w-[75%] object-cover transition-transform duration-500 hover:scale-105" src="/images/JBL-HeadPhone.webp" alt="headphone-img" />

                <div className="p-5">

                    <a href="#">
                        <h3 className="text-[#212121] text-[1.5rem] md:text-[2.125rem] md:text-left font-[500] font-poppins">Headband</h3>
                    </a>

                    <a href="#" className="inline-flex items-center border-b-1 py-2 text-sm font-medium text-center text-[#121212]">
                        Collection
                        
                    </a>

                </div>

                </div>
            </div>








            <div className="right-side relative col-span-1 row-span-1 flex justify-between items-end h-[100%]
                bg-[#F3F5F7]
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300 hover:cursor-pointer h-[300px] md:h-full">

                <div className="p-5 relative z-10 ">

                    <a href="#">
                        <h3 className="text-[#212121] text-[1.5rem] md:text-[2.125rem] font-[500] font-poppins">Earbuds</h3>
                    </a>

                    <a href="#" className="inline-flex items-center border-b-1 py-2 text-sm font-medium text-center text-[#121212]">
                        Collection
                        <svg className=" rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>

                </div>

                

                <img className=" w-full h-full absolute inset-0 object-cover z-0
                transition-transform duration-500 hover:scale-105"  
                src="/images/Earbuds.webp" alt="Earbuds-img" />


                
            </div>


             <div className="right-side relative col-span-1 row-span-1 flex justify-between items-end
                bg-[#F3F5F7]
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300 hover:cursor-pointer h-[300px] md:h-full" >

                <div className="p-5 relative z-10 ">

                    <a href="#">
                        <h3 className="text-[#212121] text-[1.5rem] md:text-[2.125rem] font-[500] font-poppins">Accessories</h3>
                    </a>

                    <a href="#" className="inline-flex items-center border-b-1 py-2 text-sm font-medium text-center text-[#121212]">
                        Collection
                        <svg className=" rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>

                </div>

                

                <img className=" w-full h-full absolute inset-0 object-cover z-0
                transition-transform duration-500 hover:scale-105"  
                src="/images/Charger Cable.webp" alt="Charger Cable-img" />


                
            </div>
            


        </div>


    </section>


    </>

    )
}

export default ShopCollection