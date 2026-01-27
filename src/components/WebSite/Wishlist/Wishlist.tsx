'use client';

import { useState } from 'react';
import { products } from '@/components/mockData/products';
import { Heart, ShoppingCart, Share2, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { showSuccessToast, showErrorToast } from '@/lib/toast-utils';

interface WishlistItem {
  id: string;
  dateAdded: string;
}

const Wishlist = () => {
  // Mock wishlist items - in a real app, this would come from state management
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    { id: '1', dateAdded: '2024-12-15' },
    { id: '2', dateAdded: '2024-12-10' },
    { id: '4', dateAdded: '2024-12-08' }
  ]);

  // Get product details for wishlist items
  const wishlistProducts = wishlistItems.map(item => ({
    ...products.find(p => p.id === item.id)!,
    dateAdded: item.dateAdded
  }));

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (productId: string, productName: string) => {
    try {
      // Mock add to cart functionality
      console.log(`Added ${productName} to cart`);
      showSuccessToast('Added to Cart!', `${productName} has been added to your cart.`);
    } catch (error) {
      showErrorToast('Failed to Add', 'Unable to add item to cart. Please try again.');
    }
  };

  const shareProduct = (productId: string, productName: string) => {
    try {
      // Mock share functionality
      const url = `${window.location.origin}/products/${productId}`;
      if (navigator.share) {
        navigator.share({
          title: productName,
          text: `Check out this amazing product: ${productName}`,
          url: url,
        });
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url);
        showSuccessToast('Link Copied!', 'Product link has been copied to clipboard.');
      }
    } catch (error) {
      showErrorToast('Share Failed', 'Unable to share product. Please try again.');
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="text-gray-400 mb-6">
            <Heart className="w-24 h-24 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">
            Save items you love to your wishlist and never lose track of them.
          </p>
          <Link
            href="/products"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white font-sans'>
      {/* Hero Section */}
      <section className="relative py-42" style={{ backgroundImage: 'url(/assets/images/categories/cb7.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My Wishlist
            </h1>
            <p className="text-xl text-white/90">
              Your saved items ({wishlistItems.length})
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-420 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Wishlist Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Saved Items
            </h2>
            <p className="text-gray-600">
              Items you've saved for later
            </p>
          </div>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Share Wishlist
            </button>
            <Link
              href="/products"
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Product Image */}
              <div className="relative h-64">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.originalPrice && (
                  <div className="absolute top-2 left-2 bg-gray-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    Sale
                  </div>
                )}
                {!item.inStock && (
                  <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded text-sm">
                    Out of Stock
                  </div>
                )}
                
                {/* Remove from Wishlist */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-500 fill-current" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-sm text-amber-600 font-medium">{item.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  <Link href={`/products/${item.id}`} className="hover:text-amber-600 transition-colors">
                    {item.name}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date Added */}
                <p className="text-xs text-gray-500 mb-3">
                  Added on {formatDate(item.dateAdded)}
                </p>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(item.id, item.name)}
                    disabled={!item.inStock}
                    className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                      item.inStock
                        ? 'bg-amber-600 text-white hover:bg-amber-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 inline mr-1" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  
                  <button
                    onClick={() => shareProduct(item.id, item.name)}
                    className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                  
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 border border-gray-300 rounded hover:bg-gray-50 hover:border-gray-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-gray-600 hover:text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wishlist Tips */}
        <div className="mt-12 bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Wishlist Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Save for Later</h4>
              <p className="text-sm text-gray-600">
                Click the heart icon on any product to save it to your wishlist
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Share2 className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Share with Friends</h4>
              <p className="text-sm text-gray-600">
                Share your wishlist with family and friends for gift ideas
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingCart className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Quick Add to Cart</h4>
              <p className="text-sm text-gray-600">
                Easily move items from your wishlist to your shopping cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
