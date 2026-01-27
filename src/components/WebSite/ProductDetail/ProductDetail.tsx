'use client';

import { useState, useEffect } from 'react';
import Breadcrumb from '../Navigation/Breadcrumb';
import LoadingSpinner from '@/components/UI/LoadingSpinner';
import { products, Product } from '@/components/mockData/products';
import { Star, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { showSuccessToast, showErrorToast } from '@/lib/toast-utils';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Pack of 6');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    // Simulate API call
    const foundProduct = products.find(p => p.id === productId);
    
    setTimeout(() => {
      setProduct(foundProduct || null);
      setLoading(false);
    }, 500);
  }, [productId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a href="/(public)/products" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
    { label: product.name, href: '#', current: true }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false);
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    try {
      // Add to cart logic here
      console.log(`Added ${product.name} (${selectedSize}) to cart`);
      
      showSuccessToast(
        'Added to Cart!', 
        `${product.name} (${selectedSize}) has been added to your cart.`
      );
    } catch (error) {
      showErrorToast('Failed to Add', 'Unable to add item to cart. Please try again.');
    }
  };

  const handleBuyNow = () => {
    if (!product) return;
    
    try {
      // Buy now logic here
      console.log(`Buy now ${product.name} (${selectedSize})`);
      
      showSuccessToast(
        'Proceeding to Checkout', 
        `Taking you to checkout with ${product.name} (${selectedSize}).`
      );
      
      // Redirect to checkout page
      // window.location.href = '/checkout';
    } catch (error) {
      showErrorToast('Checkout Failed', 'Unable to proceed to checkout. Please try again.');
    }
  };

  const handleWishlistToggle = () => {
    if (!product) return;
    
    try {
      setIsWishlisted(!isWishlisted);
      
      if (!isWishlisted) {
        showSuccessToast(
          'Added to Wishlist!', 
          `${product.name} has been saved to your wishlist.`
        );
      } else {
        showSuccessToast(
          'Removed from Wishlist', 
          `${product.name} has been removed from your wishlist.`
        );
      }
    } catch (error) {
      showErrorToast('Wishlist Error', 'Unable to update wishlist. Please try again.');
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl xl:max-w-420 mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen font-sans">
        {/* Custom styles for image magnification */}
        <style jsx>{`
          .product-info-container {
            position: relative;
            min-height: 600px;
          }
          
          /* Smooth transitions for image switching */
          .magnify-image {
            animation: fadeIn 0.3s ease-in-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
        
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Images */}
              <div className="p-8 lg:p-12 bg-linear-to-br from-gray-50 to-white">
                <div className="sticky top-8">
                  {/* Main Image with Custom Magnification */}
                  <div 
                    className="aspect-square bg-white rounded-xl overflow-hidden mb-6 border border-gray-100 relative cursor-crosshair"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      ref={setImageRef}
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      style={{ opacity: isImageHovered ? 0.8 : 1 }}
                    />
                    
                    {/* Lens overlay */}
                    {isImageHovered && (
                      <div
                        className="absolute w-24 h-24 border-2 border-blue-500 bg-transparent bg-opacity-30 pointer-events-none rounded-lg"
                        style={{
                          left: `${mousePosition.x}%`,
                          top: `${mousePosition.y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    )}
                    
                   
                  </div>
                  
                  {/* Image Thumbnails with Enhanced Hover */}
                  {product.images.length > 1 && (
                    <div className="flex space-x-4 justify-center">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          onMouseEnter={() => setSelectedImage(index)}
                          className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                            selectedImage === index 
                              ? 'border-blue-500 ring-4 ring-blue-200 shadow-lg' 
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info - Shows magnified image when hovering */}
              <div className="product-info-container relative p-8 lg:p-12">
                {/* Magnified Image Overlay - Shows when image is hovered */}
                {isImageHovered ? (
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-r-2xl">
                    <div className="w-full max-w-lxl h-160 bg-white rounded-xl border-2 border-gray-200 shadow-2xl overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-no-repeat transition-all duration-150"
                        style={{
                          backgroundImage: `url(${product.images[selectedImage]})`,
                          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                          backgroundSize: '300%',
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  /* Normal Product Info Content */
                  <div className="space-y-8">
                  {/* Header Section */}
                  <div className="border-b border-gray-100 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">{product.name}</h1>
                      </div>
                      <button 
                        onClick={handleWishlistToggle}
                        className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current text-gray-500' : 'text-gray-400'}`} />
                      </button>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                      <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
                        See all reviews
                      </span>
                    </div>

                    {/* Price */}
                    <div className="bg-[#fdfdfd] rounded-2xl shadow-md p-6">
                      <div className="flex items-baseline space-x-3 mb-2">
                        <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                        {product.originalPrice && (
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Save ${(product.originalPrice - product.price).toFixed(2)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">Price includes all taxes</p>
                    </div>
                  </div>

                  {/* Size and Purchase Options */}
                  <div className="space-y-4">
                    {/* Size Section - Limited Width */}
                    <div className="max-w-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Size: {selectedSize}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedSize('Pack of 6')}
                          className={`flex-1 p-3 border-2 rounded-lg transition-all duration-300 text-left transform hover:scale-105 ${
                            selectedSize === 'Pack of 6'
                              ? 'border-blue-500  shadow-lg ring-2 ring-blue-200'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white'
                          }`}
                        >
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">Pack of 6</div>
                            <div className="text-lg font-bold text-gray-900">₹301.00</div>
                            <div className="text-xs text-gray-500 line-through">₹399.00</div>
                            <div className="text-xs text-green-600 font-semibold">25% OFF</div>
                          </div>
                        </button>
                        <button
                          onClick={() => setSelectedSize('Pack of 12')}
                          className={`flex-1 p-3 border-2 rounded-lg transition-all duration-300 text-left transform hover:scale-105 ${
                            selectedSize === 'Pack of 12'
                              ? 'border-blue-500 shadow-lg ring-2 ring-blue-200'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white'
                          }`}
                        >
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">Pack of 12</div>
                            <div className="text-lg font-bold text-gray-900">₹499.00</div>
                            <div className="text-xs text-gray-500 line-through">₹699.00</div>
                            <div className="text-xs text-green-600 font-semibold">29% OFF</div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Color Section - Limited Width */}
                    <div className="max-w-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Colour: Multi</h3>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-linear-to-r from-gray-400 to-blue-400 border-4 border-white shadow-lg ring-2 ring-blue-200 cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-linear-to-r from-green-400 to-yellow-400 border-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple-400 to-pink-400 border-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"></div>
                      </div>
                    </div>

                    {/* Purchase Panel - Full Width to Match Price Section */}
                    <div className="bg-linear-to-br from-gray-50 to-white p-4 rounded-xl shadow-lg border border-gray-100">
                      {/* Stock Status */}
                      <div className="mb-3">
                        {product.inStock ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-600 font-bold text-base">In stock</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                            <span className="text-gray-600 font-bold text-base">Out of Stock</span>
                          </div>
                        )}
                      </div>

                      {/* Cashback Offer */}
                      <div className="bg-green-100 p-2 rounded-lg mb-3">
                        <div className="text-xs">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-2">
                            Upto ₹80 cashback
                          </span>
                          <span className="text-gray-700 font-medium">₹20 per unit on buying 2+</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {product.inStock && (
                        <div className="flex space-x-2">
                          <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-white text-black border-2 border-gray-700 py-2.5 px-3 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 font-semibold text-sm shadow-lg transform hover:scale-105"
                          >
                            Add to cart
                          </button>
                          <button
                            onClick={handleBuyNow}
                            className="flex-1 bg-[#1d1d1d] text-white py-2.5 px-3 rounded-lg hover:from-orange-600 hover:to-gray-600 transition-all duration-300 font-semibold text-sm shadow-lg transform hover:scale-105"
                          >
                            Buy Now
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Product details</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {/* Always show first 5 details */}
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Colour</span>
                  <span className="text-gray-600">Multi</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Material</span>
                  <span className="text-gray-600">{product.material}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Towel form type</span>
                  <span className="text-gray-600">Hand Towel</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Material</span>
                  <span className="text-gray-600">{product.material}</span>
                </div>
                {product.dimensions && (
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Product Dimensions</span>
                    <span className="text-gray-600">{product.dimensions}</span>
                  </div>
                )}
                
                {/* Show additional details only when expanded */}
                {showAllDetails && (
                  <>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Number of Items</span>
                      <span className="text-gray-600">1</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Style</span>
                      <span className="text-gray-600">LIGHT COLORS</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Pattern</span>
                      <span className="text-gray-600">{selectedSize}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Special Feature</span>
                      <span className="text-gray-600">Lightweight, Low Linting, Quick Dry</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">Theme</span>
                      <span className="text-gray-600">Sport</span>
                    </div>
                  </>
                )}
              </div>

              <div>
                {/* About this item */}
                <h4 className="text-xl font-bold text-gray-900 mb-4">About this item</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">PACK CONTENT - Cotton Hand Towel - Set of 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">MULTI PURPOSE - Perfect for hand wipe at your wash basin, kitchen, as napkins, for gym or along with kids lunch.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">MEDIUM SIZE- 35X50 CM, 14X21 INCH</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Say goodbye to constantly buying paper towels and save money in the long run with this reusable Kitchen Towel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Needs no care - Feel free to use as you like as these towels are easy to wash and quick dry.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* See Less/More Toggle */}
            <div className="mt-6">
              <button 
                onClick={() => setShowAllDetails(!showAllDetails)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                <span className="mr-1">{showAllDetails ? '▲' : '▼'}</span>
                {showAllDetails ? 'See less' : 'See more'}
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why choose this product?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <Truck className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                  <p className="text-sm text-gray-600">Fast and reliable delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                  <p className="text-sm text-gray-600">Premium materials and craftsmanship</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                <RotateCcw className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">30-Day Returns</h4>
                  <p className="text-sm text-gray-600">Easy returns and exchanges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Care Instructions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.careInstructions.map((instruction, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{instruction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
