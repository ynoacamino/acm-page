import React from 'react';
import Image from "next/image";
import '../../styles/home/globals.css';

export default function WhyUs() {
  return (
    <main className="bg-gradient-to-br from-black via-blue-700 to-blue-400 min-h-screen p-4">
      <section className="mx-auto max-w-7xl flex flex-col items-center justify-center text-center">

        <div className="relative rounded-2.5xl border border-blue-700 bg-blue-700 p-10 pt-12 transition-shadow hover:shadow-xl mb-8 flex items-start h-[300px]">
          <div className="mr-4">
            <Image src="/images/home/AlanKay.jpg" alt="Left Image" width={100} height={100} className="rounded-full object-cover w-24 h-24" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold leading-relaxed text-white">
              {"\"The best way to predict the future is to invent it. Coding is today's language of creativity.\""}
            </p>
            <p className="text-lg leading-relaxed text-white">
              - Alan Kay
            </p>
          </div>
        </div>

        <div className="relative rounded-2.5xl border border-blue-700 bg-blue-700 p-10 pt-12 transition-shadow hover:shadow-xl mb-8 flex items-start h-[300px]">
          <div className="mr-4">
            <Image src="/images/home/MariaKlawe.jpg" alt="Left Image" width={100} height={100} className="rounded-full object-cover w-24 h-24" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold leading-relaxed text-white">
              {"\"Coding is today's language of creativity. All our children deserve a chance to become creators instead of consumers of computer science.\""}
            </p>
            <p className="text-lg leading-relaxed text-white">
              - Maria Klawe
            </p>
          </div>
        </div>

        <div className="relative rounded-2.5xl border border-blue-700 bg-blue-700 p-10 pt-12 transition-shadow hover:shadow-xl mb-8 flex items-start h-[300px]">
          <div className="mr-4">
            <Image src="/images/home/GradyBooch.jpg" alt="Left Image" width={100} height={100} className="rounded-full object-cover w-24 h-24" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold leading-relaxed text-white">
              {"\"The function of good software is to make the complex appear simple.\""}
            </p>
            <p className="text-lg leading-relaxed text-white">
              - Grady Booch
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}