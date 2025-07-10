import React from 'react';
import { Heart, Pill, Baby, Eye, Thermometer, Bandage } from 'lucide-react';

const CategorySidebar = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Products', icon: Pill, color: 'text-primary-600' },
    { id: 'health', name: 'Health', icon: Heart, color: 'text-red-500' },
    { id: 'self-care', name: 'Self Care', icon: Bandage, color: 'text-blue-500' },
    { id: 'beauty', name: 'Beauty', icon: Eye, color: 'text-pink-500' },
    { id: 'vitamins', name: 'Vitamins', icon: Thermometer, color: 'text-orange-500' },
    { id: 'mother-needs', name: 'Mother Needs', icon: Baby, color: 'text-purple-500' },
    { id: 'medicine', name: 'Medicine', icon: Pill, color: 'text-green-500' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-50 text-primary-700 border border-primary-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${selectedCategory === category.id ? 'text-primary-600' : category.color}`} />
              <span className="font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySidebar;