const mongoose = require('mongoose');
const Product = require('./models/product.model');
require('dotenv').config();

const sampleProducts = [
  {
    name: 'Paracetamol 500mg',
    price: 12.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    description: {
      product_name: 'Paracetamol Tablets',
      scientific_name: 'Acetaminophen',
      belongs_to: 'Pain Relief',
      mechanism_of_action: 'Works by blocking pain signals in the brain and reducing fever.',
      medical_uses: ['Pain relief', 'Fever reduction', 'Headache treatment'],
      usage_instructions: ['Take 1-2 tablets every 4-6 hours', 'Do not exceed 8 tablets in 24 hours'],
      side_effects: ['Nausea', 'Stomach upset', 'Allergic reactions (rare)'],
      warnings_precautions: ['Do not exceed recommended dose', 'Consult doctor if pregnant'],
      storage_instructions: ['Store in cool, dry place', 'Keep away from children']
    }
  },
  {
    name: 'Vitamin D3 1000 IU',
    price: 24.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    description: {
      product_name: 'Vitamin D3 Supplements',
      scientific_name: 'Cholecalciferol',
      belongs_to: 'Vitamins',
      mechanism_of_action: 'Supports calcium absorption and bone health.',
      medical_uses: ['Bone health', 'Immune support', 'Calcium absorption'],
      usage_instructions: ['Take 1 tablet daily with food'],
      side_effects: ['Rare: nausea, vomiting if overdosed'],
      warnings_precautions: ['Do not exceed recommended dose'],
      storage_instructions: ['Store in cool, dry place']
    }
  },
  {
    name: 'Ibuprofen 400mg',
    price: 15.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    description: {
      product_name: 'Ibuprofen Tablets',
      scientific_name: 'Ibuprofen',
      belongs_to: 'Pain Relief',
      mechanism_of_action: 'Reduces inflammation and blocks pain signals.',
      medical_uses: ['Pain relief', 'Anti-inflammatory', 'Fever reduction'],
      usage_instructions: ['Take 1 tablet every 6-8 hours with food'],
      side_effects: ['Stomach upset', 'Dizziness', 'Headache'],
      warnings_precautions: ['Take with food', 'Avoid if allergic to NSAIDs'],
      storage_instructions: ['Store below 25°C', 'Keep in original packaging']
    }
  },
  {
    name: 'Multivitamin Complex',
    price: 29.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    description: {
      product_name: 'Daily Multivitamin',
      scientific_name: 'Mixed Vitamins & Minerals',
      belongs_to: 'Vitamins',
      mechanism_of_action: 'Provides essential nutrients for daily health.',
      medical_uses: ['Nutritional supplement', 'Energy support', 'Immune support'],
      usage_instructions: ['Take 1 tablet daily with breakfast'],
      side_effects: ['Mild stomach upset if taken on empty stomach'],
      warnings_precautions: ['Do not exceed recommended dose'],
      storage_instructions: ['Store in cool, dry place', 'Keep bottle tightly closed']
    }
  },
  {
    name: 'Omega-3 Fish Oil',
    price: 34.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    description: {
      product_name: 'Omega-3 Capsules',
      scientific_name: 'Eicosapentaenoic acid (EPA) & Docosahexaenoic acid (DHA)',
      belongs_to: 'Supplements',
      mechanism_of_action: 'Supports heart and brain health through essential fatty acids.',
      medical_uses: ['Heart health', 'Brain function', 'Joint health'],
      usage_instructions: ['Take 2 capsules daily with meals'],
      side_effects: ['Fishy aftertaste', 'Mild digestive upset'],
      warnings_precautions: ['Consult doctor if on blood thinners'],
      storage_instructions: ['Refrigerate after opening', 'Keep away from light']
    }
  },
  {
    name: 'Calcium + Vitamin D',
    price: 19.99,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    description: {
      product_name: 'Calcium Carbonate with Vitamin D3',
      scientific_name: 'Calcium Carbonate + Cholecalciferol',
      belongs_to: 'Bone Health',
      mechanism_of_action: 'Calcium builds bones, Vitamin D aids absorption.',
      medical_uses: ['Bone strength', 'Osteoporosis prevention', 'Dental health'],
      usage_instructions: ['Take 2 tablets daily with meals'],
      side_effects: ['Constipation', 'Gas', 'Bloating'],
      warnings_precautions: ['Drink plenty of water', 'Space from other medications'],
      storage_instructions: ['Store at room temperature', 'Keep dry']
    }
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();