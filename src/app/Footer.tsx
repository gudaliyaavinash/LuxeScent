import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">

        {/* Brand */}
        <div className='md:col-span-6'>

          <h2 className="text-3xl font-heading font-bold text-[#00BCD4] mb-4">
            LuxeScent
          </h2>
          <p className="leading-relaxed mb-6 font-medium text-[18px]">
            Crafting timeless fragrances for the modern <br /> connoisseur since 1987.
          </p>

          <div className="flex gap-4">
            {[<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M23 4.5a9.6 9.6 0 0 1-2.8.8 4.9 4.9 0 0 0 2.1-2.7 9.7 9.7 0 0 1-3.1 1.2 4.8 4.8 0 0 0-8.2 4.4 A13.6 13.6 0 0 1 1.7 3.1 a4.8 4.8 0 0 0 1.5 6.4 4.7 4.7 0 0 1-2.2-.6 4.8 4.8 0 0 0 3.9 4.7 4.9 4.9 0 0 1-2.2.1 4.8 4.8 0 0 0 4.5 3.3 A9.6 9.6 0 0 1 0 19.5 c13.6 7.5 23-4.2 23-13.9z" />
            </svg>].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#00BCD4] hover:text-white hover:bg-[#00BCD4] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {Icon}
                </div>
              )
            )}
          </div>

        </div>

        {/* Shop */}
        <div className='md:col-span-3'>
          <h3 className="text-2xl font-heading font-bold text-[#00BCD4] mb-5">
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
          <h3 className="text-2xl font-heading font-bold text-[#00BCD4] mb-5">
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