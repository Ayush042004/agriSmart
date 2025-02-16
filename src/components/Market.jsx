import { Search } from 'lucide-react'
import React from 'react'


const topProducts = [

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
    
]

function Market() {
  return (
    <div className='min-h-screen bg-gray-50'>
        <div className='bg-gray-100 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex-1 max-w-2xl'>
                    <div className='relative '>
                        <input
                        type="text"
                        placeholder="Search products"
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-green-600 focus:border-transparent'
                        />
                        <button>
                        <Search className='absolute left-[640px] h-5 w-5 top-3 text-center'/>
                        </button>

                    </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Market