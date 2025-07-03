import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  image,
  price,
  location,
  rating,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer ${className}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${title}`}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {title}
          </h3>
          {rating && (
            <div className="flex items-center ml-2">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-gray-600 ml-1">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
        
        {/* Location */}
        <p className="text-sm text-gray-600 mb-2">
          {location}
        </p>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-gray-700 mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        {/* Price */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">
            ${price}
            <span className="text-sm font-normal text-gray-600"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
