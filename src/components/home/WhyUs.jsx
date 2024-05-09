import React from 'react';
import Image from "next/image";
import '../../styles/home/globals.css';

export default function WhyUs() {
  return (
    <main className="min-h-screen p-4">
      <section className="mx-auto max-w-7xl flex flex-col items-center justify-center text-center">
        <span></span>
        <h1 className="text-6xl font-medium my-8">Why Join Us? </h1>
        <span></span>

        <div className="w-full xl:grid grid-cols-3 gap-4 sm:flex flex-wrap">
          <div className="relative rounded-2.5xl p-8 pt-10 transition-shadow hover:shadow-xl hover:border-white">
            <div className="flex items-center justify-center">
              <Image src="/images/home/reason1.png" alt="Innovate" width={100} height={100} />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Advanced Learning Opportunities</h3>
            <p className="text-base leading-relaxed ">
              Gain access to diverse workshops, talks, and projects aimed at expanding your knowledge in computer science and technology. 
              Explore emerging topics and develop relevant skills for the modern world.
            </p>
          </div>

          <div className="relative rounded-2.5xl p-8 pt-10 transition-shadow hover:shadow-xl hover:border-white">
            <div className="flex items-center justify-center">
              <Image src="/images/home/reason2.png" alt="Innovate" width={100} height={100} />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Supportive Collaboration Network</h3>
            <p className="text-base leading-relaxed">
                Join a passionate community of like-minded students, fostering collaboration on projects and building lasting relationships beyond the university.
            </p>
          </div>

          <div className="relative rounded-2.5xl p-8 pt-10 transition-shadow hover:shadow-xl hover:border-white">
            <div className="flex items-center justify-center">
              <Image src="/images/home/reason3.png" alt="Innovate" width={100} height={100} />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Professional Preparation</h3>
            <p className="text-base leading-relaxed">
                Enhance your communication, leadership, and teamwork skills through events tailored to your professional development, ensuring you stand out in your career.
            </p>
          </div>

          <div className="relative rounded-2.5xl p-8 pt-10 transition-shadow hover:shadow-xl hover:border-white">
            <div className="flex items-center justify-center">
              <Image src="/images/home/reason4.png" alt="Innovate" width={100} height={100} />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Exclusive Resource Access</h3>
            <p className="text-base leading-relaxed">
                Benefit from industry connections, offering exclusive opportunities such as internships, recruitment events, and specialized conferences to strengthen your professional profile.
            </p>
          </div>

          <div className="relative rounded-2.5xlp-8 pt-10 transition-shadow hover:shadow-xl hover:border-white">
            <div className="flex items-center justify-center">
              <Image src="/images/home/reason5.png" alt="Innovate" width={100} height={100} />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2 ">Competitions and Challenges</h3>
            <p className="text-base leading-relaxed ">
                Participate in internal and external competitions spanning various areas, from programming to algorithm design, to showcase your skills and gain recognition.
            </p>
          </div>

          <div className="relative rounded-2.5xl p-8 pt-10 transition-shadow hover:shadow-xl hover:border-white">
            <div className="flex items-center justify-center">
              <Image src="/images/home/reason6.png" alt="Innovate" width={100} height={100} />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2 ">Community and Society Impact</h3>
            <p className="text-base leading-relaxed">
                Contribute to community welfare and societal progress through projects and initiatives, leveraging your skills in computer science and technology for real-world impact.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}