const asyncHandler = require('../utils/asyncHandler');
const Product = require('../models/product.model');

const searchProducts = asyncHandler(async (req, res) => {
  console.log('Search products called with query:', req.query);
  const { query, page = 1, limit = 10, sort = 'name', order = 'asc' } = req.query;
  
  // Validate pagination parameters
  const pageNum = Math.max(1, parseInt(page) || 1);
  const limitNum = Math.min(50, Math.max(1, parseInt(limit) || 10));

//-----------------------  search query ------------------------//
  const searchQuery = query
    ? {
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { 'description.scientific_name': { $regex: query, $options: 'i' } },
          { 'description.product_name': { $regex: query, $options: 'i' } },
        ],
      }
    : {};

  //---------------------- Sorting ----------------------------//
  const sortOptions = {};
  if (sort === 'price') {
    sortOptions.price = order === 'asc' ? 1 : -1;
  } else if (sort === 'name') {
    sortOptions.name = order === 'asc' ? 1 : -1;
  } else if (sort === 'createdAt') {
    sortOptions.createdAt = order === 'asc' ? 1 : -1;
  }else if (sort === 'belongs_to') {
    sortOptions['description.belongs_to'] = order === 'asc'? 1 : -1;
}

  //----------------------- Pagination ----------------------------//
  const skip = (pageNum - 1) * limitNum;

  try {
    const products = await Product.find(searchQuery)
      .sort(sortOptions)
      .skip(skip)
      .limit(limitNum);

    const total = await Product.countDocuments(searchQuery);
    
    console.log(`Found ${products.length} products out of ${total} total`);

    res.json({
      success: true,
      products,
      total,
      page: pageNum,
      limit: limitNum,
      pages: Math.ceil(total / limitNum),
    });
  } catch (error) {
    console.error('Search products error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

//------------------------- GetProductById ---------------------------//
const getProductById = asyncHandler(async (req, res) => { 
  console.log('Getting product by ID:', req.params.id);
  const product = await Product.findById(req.params.id);
   if (!product) {
    return res.status(404).json({ 
      success: false,
      message: 'Product not found' 
    }); 
   }
   res.json({
    success: true,
    product
   }); 
  });


  //------------------------------ Admin -------------------------------------//
  
  
  //createProduct
const createProduct = asyncHandler(async (req, res) => {
   console.log('Creating product:', req.body);
   const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save(); 
   res.status(201).json({
    success: true,
    product: savedProduct
   });
   });


//updateProduct
const updateProduct = asyncHandler(async (req, res) => {
   console.log('Updating product:', req.params.id, req.body);
   const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
       return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
       });
    }
     res.json({
      success: true,
      product: updated
     });
     });


//deleteProduct
const deleteProduct = asyncHandler(async (req, res) => { 
  console.log('Deleting product:', req.params.id);
  const deleted = await Product.findByIdAndDelete(req.params.id);
   if (!deleted) {
     return res.status(404).json({ 
      success: false,
      message: 'Product not found' 
     });
   }
    res.json({ 
      success: true,
      message: 'Product deleted successfully' 
    });
   });


  module.exports = { getProductById, createProduct , updateProduct , deleteProduct ,searchProducts};  