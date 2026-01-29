import Image from "next/image";
import Banner from "./Component/Banner";
import ProductImg2 from "../../public/images/Product1-img2.jpg";
import ProductImg3 from "../../public/images/Product1-img3.jpg";

export default function Home() {
  return (
    <div className="home-page">

      {/* Banner Section */}
      <Banner />

      {/* Product 1 Section */}
      <section className="max-w-7xl mx-auto py-[20px] lg:py-[20px] grid grid-cols-1 lg:grid-cols-12 items-satrt">

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
        <div className="lg:col-span-5 px-[20px] lg:px-0">
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

      </section>

      {/* Product 2 Section */}
      <section className="max-w-7xl mx-auto py-[20px] lg:py-[20px] grid grid-cols-1 lg:grid-cols-12 items-satrt">

        {/* Left Box */}
        <div className="lg:col-span-5 px-[20px] lg:px-0">
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

        {/* Right Box */}
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
        
      </section>

    </div>
  );
}
