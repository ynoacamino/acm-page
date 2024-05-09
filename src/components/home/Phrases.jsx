import React from 'react';
import Image from "next/image";
import '../../styles/home/globals.css';

export default function WhyUs() {
  return (
    <main className="max-h-screen p-4">
      <section className="mx-auto max-w-7xl mt-4 mb-4 grid grid-cols-1 gap-10">

        <div className="relative rounded-2.5xl border border-blue-700 bg-blue-700 p-6 pt-8 transition-shadow hover:shadow-xl mb-4 flex flex-wrap items-center">
          <div className="mr-4">
            <Image src="/images/home/AlanKay.jpg" alt="Left Image" width={100} height={100} className="rounded-full object-cover w-20 h-20" />
          </div>
          <div>
            <p className="text-lg font-bold leading-relaxed text-white">
              {"\"The best way to predict the future is to invent it. Coding is today's language of creativity.\""}
            </p>
            <p className="text-sm leading-relaxed text-white">
              - Alan Kay
            </p>
          </div>
        </div>

        <div className="relative rounded-2.5xl border border-blue-700 bg-blue-700 p-6 pt-8 transition-shadow hover:shadow-xl mb-4 flex flex-wrap items-center">
          <div className="mr-4">
            <Image src="/images/home/MariaKlawe.jpg" alt="Left Image" width={100} height={100} className="rounded-full object-cover w-20 h-20" />
          </div>
          <div>
            <p className="text-lg font-bold leading-relaxed text-white">
              {"\"Coding is today's language of creativity. All our children deserve a chance to become creators instead of consumers of computer science.\""}
            </p>
            <p className="text-sm leading-relaxed text-white">
              - Maria Klawe
            </p>
          </div>
        </div>

        <div className="relative rounded-2.5xl border border-blue-700 bg-blue-700 p-6 pt-8 transition-shadow hover:shadow-xl mb-4 flex flex-wrap items-center">
          <div className="mr-4">
            <Image src="/images/home/GradyBooch.jpg" alt="Left Image" width={100} height={100} className="rounded-full object-cover w-20 h-20" />
          </div>
          <div>
            <p className="text-lg font-bold leading-relaxed text-white">
              {"\"The function of good software is to make the complex appear simple.\""}
            </p>
            <p className="text-sm leading-relaxed text-white">
              - Grady Booch
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}