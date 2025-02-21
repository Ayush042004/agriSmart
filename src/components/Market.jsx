import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from "axios"


{/*const topProducts = [

    {
        id: 1,
        name: "Ugaoo Organic Vermicompost Fertilizer Manure For Plants - 5 Kg",
        category: "Fertilizers",
        price: 399,
        rating: 4.5,
        image:"https://m.media-amazon.com/images/I/615ogT1U-KL.SL1044.jpg",
        reviews: 100
    },
    {
        id: 2,
        name: "UGAOO Ridge Gourd Vegetable Seeds (Green, Pack of 2.4g)",
        category: "Seed",
        price: 299,
        rating: 4.2,
        image:"https://m.media-amazon.com/images/I/71X60AewLxL.SL1100.jpg",
        reviews: 150
    },
    {
        id: 3,
        name: "rustBasket Gardening Hand Tools Set - 5 Pcs (Cultivator, Big and Small Trowel, Weeder, Fork)",
        category: "Tools",
        price: 349,
        rating: 4.3,
        image:"https://m.media-amazon.com/images/I/61mCS9kj2uS.SX679.jpg",
        reviews: 200
    },
    {
        id: 4,
        name: "Health 360 - Spray Pest Control for Plants - 500 ml",
        category: "Pesticides",
        price: 299,
        rating: 4.2,
        image:"https://m.media-amazon.com/images/I/715zO-EgtsL.SX679.jpg",
        reviews: 150
    },
    {
        id: 5,
        name: "HARIVAR MART Cordless Grass Trimme-r, Electric Weed Eater 3-in-1 ",
        category: "Machinery",
        price: 349,
        rating: 4.3,
        image:"https://m.media-amazon.com/images/I/613ahSSo9rL.SX679.jpg",
        reviews: 200
    },
    
]*/}



function Market() {

    const [products,setProducts] = useState([])

useEffect(()=>{
    axios.get("https://cropx-backend.onrender.com/market-place/products")
    .then((response) => {
        setProducts(response.data)
    })
    .catch((error)=>console.log("Error while catching",error))
},[])


return (
  <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
  {/* Search Header */}
  <div className='sticky top-0 z-10 bg-white shadow-md backdrop-blur-sm bg-opacity-90'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
      <div className='flex items-center justify-between'>
        <div className='flex-1 max-w-2xl mx-auto w-full'>
          <div className='relative group'>
            <input
              type="text"
              placeholder="Search products"
              className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200' />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Products Grid */}
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {products.map((product) => (
        <div key={product._id} className="group">
          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img 
                className="object-cover w-full transform transition-transform duration-300 group-hover:scale-105" 
                src={product.image} 
                alt={product.name}
              />
            </a>
            <div className="p-5 space-y-4">
              <a href="#" className="block">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 line-clamp-2 hover:text-green-600 transition-colors duration-200">
                  {product.name}
                </h5>
              </a>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">₹{product.price}</p>
                  <p className="text-sm text-gray-500 line-through">₹{product.price + 100}</p>
                </div>
                <div className="flex items-center bg-yellow-50 px-2.5 py-1 rounded-lg">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-yellow-800">5.0</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
);
}

export default Market;