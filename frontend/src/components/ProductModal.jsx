import React from 'react';
import { X, ShoppingCart, Heart, AlertTriangle, Info } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const { name, price, image, description = {} } = product;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {description.product_name || name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={image || 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg'}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg';
                }}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart - ${price?.toFixed(2)}</span>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="space-y-2">
              {description.scientific_name && (
                <p className="text-lg text-gray-600 italic">
                  {description.scientific_name}
                </p>
              )}
              {description.belongs_to && (
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {description.belongs_to}
                </span>
              )}
              <div className="text-3xl font-bold text-primary-600">
                ${price?.toFixed(2)}
              </div>
            </div>

            {/* Mechanism of Action */}
            {description.mechanism_of_action && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <Info className="w-5 h-5 text-blue-500" />
                  <span>How it Works</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description.mechanism_of_action}
                </p>
              </div>
            )}

            {/* Medical Uses */}
            {description.medical_uses && description.medical_uses.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Medical Uses</h3>
                <ul className="space-y-1">
                  {description.medical_uses.map((use, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage Instructions */}
            {description.usage_instructions && description.usage_instructions.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Usage Instructions</h3>
                <ul className="space-y-1">
                  {description.usage_instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Side Effects */}
            {description.side_effects && description.side_effects.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <span>Possible Side Effects</span>
                </h3>
                <ul className="space-y-1">
                  {description.side_effects.map((effect, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warnings */}
            {description.warnings_precautions && description.warnings_precautions.length > 0 && (
              <div className="space-y-2 p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span>Warnings & Precautions</span>
                </h3>
                <ul className="space-y-1">
                  {description.warnings_precautions.map((warning, index) => (
                    <li key={index} className="text-red-700 text-sm flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Storage Instructions */}
            {description.storage_instructions && description.storage_instructions.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Storage Instructions</h3>
                <ul className="space-y-1">
                  {description.storage_instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pregnancy & Breastfeeding */}
            {description.pregnancy_breastfeeding && (
              <div className="space-y-2 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900">Pregnancy & Breastfeeding</h3>
                <p className="text-purple-700 text-sm">
                  {description.pregnancy_breastfeeding}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;