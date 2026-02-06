import React from 'react';
import Button from './Button';

type CardProps = {
  title: string;
  description: string;
  price?: string;
  imgUrl: string;
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  imgUrl,
  className = "",
}) => {
  return (
    <div className={`border rounded-lg overflow-hidden shadow-md bg-slate-50 ${className}`}>

        <img src={imgUrl} alt={title} className="w-full h-64 md:h-52 object-cover transition-transform duration-500 hover:scale-105" />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        {price && <p className="text-lg font-semibold mb-2">{price}</p>}
       
        <Button/> 

      </div>
    </div>
  );
};

export default Card;