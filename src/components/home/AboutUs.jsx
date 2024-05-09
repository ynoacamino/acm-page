import React from "react";
import Image from "next/image";
import "../../styles/home/globals.css";

export default function AboutUs() {
  return (
    <main className="bg-gradient-to-br from-black via-blue-700 to-blue-400 max-h-screen p-4">
      <section style={{ marginTop: "2rem" }}>
        <div className="md:w-full mb-4">
          <h1 className="text-6xl font-bold text-white mt-8 text-center">ACM STUDENT CHAPTER</h1>
        </div>
      </section>
      <section style={{ marginTop: "4rem" }} className="flex flex-col md:flex-row" >
        <div className="md:w-2/5">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 flex flex-col items-center justify-center h-full ">
            <a className="underline decoration-neutral-400 decoration-4">
            Pioneering the edges of innovation, forging tomorrow's breakthroughs
            today.
            </a>
            <section style={{ marginTop: "4rem" }}>
            <button className="transition ease-in-out delay-150 bg-indigo-600 shadow-lg shadow-indigo-900/50 px-8 py-4 rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer ...">About Us</button>
            </section>
            
          </h3>
          
        </div>
        <div className="md:w-3/5">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <Image src="/images/home/acmunsa.png" alt="Innovate" width={878} height={426}   className="w-full rounded-lg"/>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <Image src="/images/home/unsa2.jpg" alt="Innovate" width={878} height={426}   className="w-full rounded-lg"/>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <Image src="/images/home/unsa1.jpg" alt="Innovate" width={878} height={426}   className="w-full rounded-lg"/>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </main>
  );
}
