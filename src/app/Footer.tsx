import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">

        {/* Brand */}
        <div className='md:col-span-6'>

          <h2 className="text-3xl font-heading font-bold text-[#d4af37] mb-4">
            LuxeScent
          </h2>
          <p className="leading-relaxed mb-6 font-medium text-[18px]">
            Crafting timeless fragrances for the modern <br /> connoisseur since 1987.
          </p>

          <div className="flex gap-4">
            {[1, 2, 3, 4].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition cursor-pointer"
                >
                  {Icon}
                </div>
              )
            )}
          </div>
          
        </div>

        {/* Shop */}
        <div className='md:col-span-3'>
          <h3 className="text-2xl font-heading font-bold text-[#d4af37] mb-5">
            Shop
          </h3>
          <ul className="space-y-3 text-[17px]">
            <li className="footer_link">Women's Fragrances</li>
            <li className="footer_link">Men's Fragrances</li>
            <li className="footer_link">New Arrivals</li>
            <li className="footer_link">Bestsellers</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className='md:col-span-3'>
          <h3 className="text-2xl font-heading font-bold text-[#d4af37] mb-5">
            Customer Care
          </h3>
          <ul className="space-y-3 text-[17px]">
            <li className="footer_link">FAQ</li>
            <li className="footer_link">Privacy Policy</li>
            <li className="footer_link">Terms of Service</li>
            <li className="footer_link">Track Order</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-16 py-6 text-center text-gray-400">
        © 2024 LuxeScent. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer