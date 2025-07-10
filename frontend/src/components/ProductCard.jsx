import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const {
    _id,
    name,
    price,
    image,
    description = {}
  } = product;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={image || 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg'}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg';
          }}
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
        </button>
        {description.belongs_to && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
            {description.belongs_to}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">
            {description.product_name || name}
          </h3>
          {description.scientific_name && (
            <p className="text-sm text-gray-500 italic">
              {description.scientific_name}
            </p>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">(4.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-primary-600">
              ${price?.toFixed(2) || '0.00'}
            </span>
            <span className="text-sm text-gray-500 line-through ml-2">
              ${(price * 1.2)?.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Medical Uses */}
        {description.medical_uses && description.medical_uses.length > 0 && (
          <div className="text-sm text-gray-600">
            <span className="font-medium">Uses: </span>
            {description.medical_uses.slice(0, 2).join(', ')}
            {description.medical_uses.length > 2 && '...'}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 px-4 py-2 border border-primary-200 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;