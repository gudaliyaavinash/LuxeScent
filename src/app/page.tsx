import Image from "next/image";
import Banner from "./Component/Banner";
import ProductImg1 from "../../public/images/Product1-img1.jpg";
import ProductImg2 from "../../public/images/Product1-img2.jpg";
import ProductImg3 from "../../public/images/Product1-img3.jpg";
export default function Home() {
  return (
    <div className="home-page">

      {/* Banner Section */}
      <Banner />

      <section className="py-[50px] grid grid-cols-1 md:grid-cols-2 items-start">
        <div className="img-section">
          <Image src={ProductImg2} className="image-1" alt="Product image" width={125} height={125} />
          <Image src={ProductImg1} className="mx-auto object-cover shadow" alt="Product image" width={280} height={280} />
          <Image src={ProductImg3} className="image-3" alt="Product image" width={125} height={125} />
        </div>
        <div>
          <p className="font-text uppercase font-bold mb-5">Our original perfume</p>
          <h1 className="font-heading text-[35px] md:text-[50px] leading-9 md:leading-12">Pink <br /> Emotions</h1>
          <p className="w-full md:w-[500px] leading-7 mt-7">Pink Emotions ek soft ane elegant fragrance che, je tamari bhavnao ne pink rang ni jem khoobsurat rite express kare che. Aa perfume ma fresh floral notes, light sweetness ane warm musky touch che, je divas bhar fresh ane confident feel karave che</p>
        </div>
      </section>

    </div>
  );
}
