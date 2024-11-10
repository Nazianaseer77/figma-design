import Image from "next/image";
import React from 'react'
import Header from "@/components/Header/Header";

 function Home() {
  return (
    <div className="min-h-screen bg-white mt-0">
    <Header />
    <div className="flex h-[88%]">
      <div className="w-1/2 flex flex-col justify-center items-start m-4">
        <h1 className="text-[40px] font-bold text-black">IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="text-[20px] w-[630px] text-[#787054] mr-3">
        An example of intricate workmanship and detail, 
        elegant necklaces and long and short chains
         form a part of our desirable collection.
         
        </p>
        <br />
        <button className="bg-[#A29875;] text-black font-bold py-2 px-4">Explore now</button>
      </div>
      <div className="w-1/4 flex justify-right items-center mt-5 ml-6">
        <Image
          src={"/image/rs-group-wrap ⏵ rs-group.jpg"}
          alt="hero image"
          width={502}
          height={465}
        />
      </div>
    </div>
  </div>
    
  )
}

export default Home