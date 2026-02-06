import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NewArrival as arrivalData } from "./Data/CardData"; 
import CustomCard from "./Ui/Card";

const NewArrival = () => {
  return (
    <section className="New-Arrival container mx-auto px-4 py-12 space-y-8">
      <div className="flex justify-between items-end border-b border-gray-100 pb-4">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight text-gray-900">
          New Arrival
        </h2>
        <div className="slide-icon flex space-x-2 text-[8px] text-gray-300">    
          <FontAwesomeIcon icon={faCircle} className="text-black" />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
      
     
      <div className="Products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {arrivalData.map((card) => (
          <CustomCard 
            key={card.id}
            title={card.title}
            description={card.description}
            imgUrl={card.imgUrl}
            price={card.price}     
          />
          
        ))}
      </div>
      
    </section>
  );
};

export default NewArrival;