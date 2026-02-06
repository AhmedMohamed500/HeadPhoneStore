import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BestSeller as bestSellerData } from "./Data/CardData";
import Card from "./Ui/Card";

const BestSeller = () => {
  return (
    <section className="bestseller container mx-auto px-4 space-y-7">
      <h2 className="font-[500] text-center md:text-left text-[2rem] border-b border-gray-100 pb-4">
        Best Seller
      </h2>

      <div className="Products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellerData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imgUrl={item.imgUrl}
            className="rounded-2xl hover:-translate-y-1 transition-all"
          >
            
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;










  {/* <div className="Product ">
    
        <div className="md:h-[360px] bg-[#F3F5F7] border border-gray-200">

            <div className="Status&Favourite flex justify-between items-center p-4">
                <h3 className="bg-white text-[#121212] font-inter font-[700] p-0.5 w-[25%] text-center">Hot</h3>

                
            </div>
            
            <div className="Headphone-img flex justify-center items-center">
                <img className="w-[65%]" src="/src/images/headphone (4).png" alt="headphone image" />
            </div>

        </div>

        <div className="Product-Description flex flex-col space-y-1.5">

        <div className="rate-icons text-[#343839] mt-2">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div>

            <a href="#" className="font-inter text-[#141718] font-semibold w-[80%]">
                <p>Beats </p>
                <p>Studio Pro </p>
            </a>
        </div>

        <div className="Product-Price">
            <h5 className="font-[600] font-inter text-[0.875rem] text-[#212121]">$349.99</h5>
        </div>

        </div>
    
    </div>


    <div className="Product">
    
        <div className="md:h-[360px] bg-[#F3F5F7] border border-gray-200 ">

            <div className="Status&Favourite flex justify-between items-center p-4">
                <h3 className="bg-white text-[#121212] font-inter text-[1rem] font-[700] p-0.5 w-[25%] text-center">Hot</h3>                
            </div>
            
            <div className="Headphone-img flex justify-center items-center">
                <img className="w-[70%]" src="/src/images/bestseller (6).png" alt="headphone image" />
            </div>


        </div>


        <div className="Product-Description flex flex-col space-y-1.5">

        <div className="rate-icons text-[#343839] mt-2">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div>

            <a href="#">
                <p className="font-inter text-[#141718] font-semibold w-[80%]">Sony - WH-CH720N Wireless Noise Canceling </p>
            </a>
        </div>

        <div className="Product-Price">
            <h5 className="font-[600] font-inter text-[0.875rem] text-[#212121]">$149.99</h5>
        </div>

        </div>
    
    </div>

    <div className="Product">
    
        <div className="md:h-[360px] bg-[#F3F5F7] border border-gray-200">

            <div className="Status&Favourite flex justify-between items-center p-4">
                <h3 className="bg-white text-[#121212] font-inter font-[700] p-0.5 w-[25%] text-center">Hot</h3>                
            </div>
            
            <div className="Headphone-img flex justify-center items-center">
                <img className="w-[70%]" src="/src/images/bestseller (5).png" alt="headphone image" />
            </div>


        </div>


        <div className="Product-Description flex flex-col space-y-1.5">

        <div className="rate-icons text-[#343839] mt-2">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div>

            <a href="#">
                <p className="font-inter text-[#141718] font-semibold w-[80%]">Skullcandy - Rail True Wireless Earbuds</p>
            </a>
        </div>

        <div className="Product-Price">
            <h5 className="font-[600] font-inter text-[0.875rem] text-[#212121]">$79.99</h5>
        </div>

        </div>
    
    </div>


    <div className="Product ">
    
        <div className="md:h-[360px] bg-[#F3F5F7] border border-gray-200">

            <div className="Status&Favourite flex justify-between items-center p-4">
                <h3 className="bg-white text-[#121212] font-inter font-[700] p-0.5 w-[25%] text-center">Hot</h3>                
            </div>
            
            <div className="Headphone-img flex justify-center items-center">
                <img className="w-[70%]" src="/src/images/bestseller (4).png" alt="headphone image" />
            </div>


        </div>


        <div className="Product-Description flex flex-col space-y-1.5">

        <div className="rate-icons text-[#343839] mt-2">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div>

            <a href="#" className="font-inter text-[1rem] text-[#141718] font-semibold w-[80%]">
                <p>Beats </p>
                <p>Studio Pro </p>
            </a>
        </div>

        <div className="Product-Price">
            <h5 className="font-[600] font-inter text-[0.875rem] text-[#212121]">$249.99</h5>
        </div>

        </div>
    
    </div>


<div className="Product ">
    
        <div className="md:h-[360px] bg-[#F3F5F7] border border-gray-200">

            <div className="Status&Favourite flex justify-between items-center p-4">
                <h3 className="bg-white text-[#121212] font-inter font-[700] p-0.5 w-[25%] text-center">Hot</h3>                
            </div>
            
            <div className="Headphone-img flex justify-center items-center">
                <img className="w-[70%]" src="/src/images/bestseller.png" alt="headphone image" />
            </div>


        </div>


        <div className="Product-Description flex flex-col space-y-1.5">

        <div className="rate-icons text-[#343839] mt-2">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div>

            <a href="#">
                <p className="font-inter text-[#141718] font-semibold w-[80%]">JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports </p>
            </a>
        </div>

        <div className="Product-Price">
            <h5 className="font-[600] font-inter text-[0.875rem] text-[#212121]">$179.95</h5>
        </div>

        </div>
    
    </div>


<div className="Product ">
    
        <div className="md:h-[360px] bg-[#F3F5F7] border border-gray-200">

            <div className="Status&Favourite flex justify-between items-center p-4">
                <h3 className="bg-white text-[#121212] font-inter font-[700] p-0.5 w-[25%] text-center">Hot</h3>                
            </div>
            
            <div className="Headphone-img flex justify-center items-center">
                <img className="w-[100%]" src="/src/images/bestseller (3).png" alt="headphone image" />
            </div>


        </div>


        <div className="Product-Description flex flex-col space-y-1.5">

        <div className="rate-icons text-[#343839] mt-2">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div>

            <a href="#" className="font-inter text-[#141718] font-semibold w-[80%]">
                <p>Bose</p>
                <p>QuietComfort Headphones</p>
            </a>
        </div>

        <div className="Product-Price">
            <h5 className="font-[600] font-inter text-[0.875rem] text-[#212121]">$349.00</h5>
        </div>

        </div>
    
    </div>

    <div className="Product ">
    
        <div className="md:h-[360px] bg-[#F3F5F7] border border-gray-200">

            <div className="Status&Favourite flex justify-between items-center p-4">
                <h3 className="bg-white text-[#121212] font-inter font-[700] p-0.5 w-[25%] text-center">Hot</h3>                
            </div>
            
            <div className="Headphone-img flex justify-center items-center">
                <img className="w-[80%]" src="/src/images/bestseller (2).png" alt="headphone image" />
            </div>


        </div>


        <div className="Product-Description flex flex-col space-y-1.5">

        <div className="rate-icons text-[#343839] mt-2">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div>

            <a href="#" className="font-inter text-[#141718] font-semibold w-[80%]">  
                <p>AKG</p>
                <p>Y600NC Wireless</p>
            </a>
        </div>

        <div className="Product-Price">
            <h5 className="font-[600] font-inter text-[0.875rem] text-[#212121]">$349.99</h5>
        </div>

        </div>
    
    </div> */}