import Image from "next/image";
import Banner from "./Component/Banner";
import ProductImg2 from "../../public/images/Product1-img2.jpg";
import ProductImg3 from "../../public/images/Product1-img3.jpg";
import ProductImg4 from "../../public/images/Product2-img2.jpg";
import ProductImg5 from "../../public/images/Product2-img1.jpg";
import { categories, features } from "./StaticData";
import ProductImg from "../../public/images/Product/Product-1.jpg";
export default function Home() {
  return (
    <div className="home-page">

      {/* Banner Section */}
      <Banner />

      {/* Category Section */}
      <section className="max-w-7xl mx-auto py-[20px] md:py-[30px]">
        <div className="text-center leading-14">
          <span className="text-[45px] text-[#00BCD4] font-[Quentin]">Category</span> <br />
          <span className="text-[45px] uppercase text-gray-700">Fragrance Types</span>
          <p className="text-[17px] text-gray-500 -mt-3">The stylish and organized cosmetic products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-7">
          {categories.map((item, index) => {
            const Style = index === 0 ? "w-[100px] h-[100px]" : index === 1 ? "w-[140px] h-[100px]" : index === 2 ? "w-[113px] h-[100px]" : "w-[86px] h-[100px]";
            return <div key={index} className="text-center">
              <div className={`${Style} mx-auto text-[#00BCD4]`}>{item.icon}</div>
              <div className="mt-5">
                <h1 className="text-[25px] text-gray-700">{item.title}</h1>
                <p className="text-gray-500 text-[18px] leading-7 mt-3">{item.desc}</p>
              </div>
            </div>
          })}
        </div>
      </section>

      {/* Product 1 Section */}
      <section className="bg-[#00cce70a]">
        <div className="max-w-7xl mx-auto py-[20px] grid grid-cols-1 lg:grid-cols-12 items-satrt">
          {/* Left Box */}
          <div className="h-[500px] max-[425px]:h-[300px] lg:col-span-6 flex items-center justify-center">
            <div className="img-section">
              {/* Left image */}
              <div className="image-1">
                <Image src={ProductImg2} className="object-cover p-[5px] rounded-[15px]" alt="Product Image 2" fill />
              </div>
              {/* Right image */}
              <div className="image-2">
                <Image src={ProductImg3} className="object-cover p-[5px] rounded-[15px]" alt="Product Image 2" fill />
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="lg:col-span-5 px-[20px] lg:px-0 py-3 md:py-6">
            <span className="text-pink-600 text-sm font-bold tracking-[0.3em] uppercase">Our Original Perfume</span>
            <p className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#181113] mt-4">
              Pink <br /> <span className="italic text-pink-500">Emotions</span>
            </p>
            <p className="w-full md:w-[500px] text-[15px] md:text-[16px] md:leading-7 mt-4">Pink Emotions ek soft ane elegant fragrance che, je tamari bhavnao ne pink rang ni jem khoobsurat rite express kare che. Aa perfume ma fresh floral notes, light sweetness ane warm musky touch che, je divas bhar fresh ane confident feel karave che</p>
            <p className="text-[12px] md:text-sm font-medium text-[#181113]/60 mt-4 uppercase tracking-widest">
              Notes: Rose, Bergamot, Pink Pepper, Vanilla
            </p>

            {/* Shop Now Button */}
            <div className="w-full flex justify-center">
              <button className="mt-5 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 uppercase cursor-pointer duration-200 transition-colors">
                Shop now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Best products Section */}
      <section>
        <div className="max-w-7xl mx-auto py-[20px] md:py-[50px]">
          <div className="text-center leading-14">
            <span className="text-[45px] text-[#00BCD4] font-[Quentin]">Best Sellers</span> <br />
            <span className="text-[45px] uppercase text-gray-700">Best Sellers Products</span>
            <p className="text-[17px] text-gray-500 -mt-3">The stylish and organized cosmetic products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-7">
            {Array.from({ length: 8 }).map((_, index) => {
              return <div key={index} className="cursor-pointer">
                <div className="relative w-full h-[320px] overflow-hidden relative group">
                  <Image src={ProductImg} alt={`Best Product ${index + 1}`} className="object-cover" fill />
                  <div className="absolute -top-8 -right-8 group-hover:top-3 group-hover:right-3 duration-300">
                    <button className="border p-2 rounded-full border-gray-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21L3.5 12.5a5 5 0 0 1 7.1-7.1L12 6.8l1.4-1.4a5 5 0 0 1 7.1 7.1L12 21z" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full absolute -bottom-[50px] group-hover:bottom-2 left-1/2 -translate-x-1/2 flex justify-center translate-all duration-300">
                    <button className="w-[80%] bg-[#00BCD4] text-white font-medium text-[15px] py-[8px] cursor-pointer">ADD TO CARD</button>
                  </div>

                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="uppercase text-[13px] font-medium tracking-[0.1em] text-[#00BCD4]">Exclusive</p>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((_, index) => {
                        return <svg key={index} className="text-[#00BCD4]" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                        </svg>
                      })}
                    </div>
                  </div>
                  <h1 className="mt-2 text-[22px] font-bold font-heading">Cool Blue Parfume</h1>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[#00BCD4] text-2xl font-bold tracking-tighter">$89.00</span>
                    <span className="text-gray-400 text-[16px] font-medium line-through decoration-text-muted/30">$120.00</span>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>

      {/* Product 2 Section */}
      <section className="bg-[#00cce70a]">
        <div className="max-w-7xl mx-auto py-[20px] grid grid-cols-1 lg:grid-cols-12 items-satrt">

          {/* Left Box */}
          <div className="lg:col-span-5 px-[20px] lg:px-0 py-3 md:py-6">
            <span className="text-orange-600 text-sm font-bold tracking-[0.3em] uppercase">Our Original Perfume</span>
            <p className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#181113] mt-4">
              Eternity <br /> <span className="italic text-orange-500">by Belle</span>
            </p>
            <p className="w-full md:w-[500px] text-[15px] md:text-[16px] md:leading-7 mt-4">Eternity by Belle is a timeless and graceful fragrance designed to celebrate enduring beauty and lasting memories. It opens with a bright and refreshing burst of fruity notes that instantly uplift the senses.</p>
            <p className="text-[12px] md:text-sm font-medium text-[#181113]/60 mt-4 uppercase tracking-widest">
              Notes: Green Apple, Bergamot, Jasmine, Sandalwood
            </p>

            {/* Shop Now Button */}
            <div className="w-full flex justify-center">
              <button className="mt-5 bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 uppercase cursor-pointer duration-200 transition-colors">
                Shop now
              </button>
            </div>

          </div>

          {/* Right Box */}
          <div className="h-[500px] max-[425px]:h-[300px] lg:col-span-6 flex items-center justify-center">
            <div className="img-section-2">
              {/* Left image */}
              <div className="image-1">
                <Image src={ProductImg4} className="object-cover p-[5px] rounded-[15px]" alt="Product Image 2" fill />
              </div>
              {/* Right image */}
              <div className="image-2">
                <Image src={ProductImg5} className="object-cover p-[5px] rounded-[15px]" alt="Product Image 2" fill />
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="shadow rounded-2xl p-10 text-center border border-gray-200
            hover:border-[#00BCD4] transition duration-300"
            >
              <div className="text-[#00BCD4] text-4xl flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-gray-600 text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
