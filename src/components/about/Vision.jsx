import React from "react";

export default function Vision() {
    return(
        <>
            <div className="container-section">
                <div className="transform container-vision-mision flex flex-col md:flex-row items-center justify-center
                 rounded-3xl border-4 border-indigo-500/100 transition duration-500 hover:scale-105  p-6 mx-16 mb-16" >
                    <figure className="max-w-lg">
                        <img className="h-auto max-w-full rounded-lg" src="/images/about/vision.png"
                             alt="image description"/>
                    </figure>
                    <div className="container-text md:w-1/2 md:pr-8">
                        <h3 className="text-2xl font-bold mb-4">Vision</h3>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur sequi nam aperiam
                            corporis cum quia excepturi aliquid, dolor ab iste atque aut blanditiis enim! Libero nam qui
                            voluptates tempore.
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}