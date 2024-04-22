import React from 'react';
import Image from "next/image";
import './Presentation.css';

export function Presentation() {
  return (
    <div className="presentation-container">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />

      <div className="presentation-content">
        {/* Contenido de la página Home */}
        <h1 className="presentation-title">ACM STUDENT CHAPTER</h1>
        <p>Pioneering the edges of innovation, forging tomorrow's breakthroughs today.</p>
      </div>

      <div className="carousel-container">
        {/* Carrusel con reproducción automática */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/images/home/unsa1.jpg" className="d-block w-100" alt="unsa1" width={800} height={500} />
            </div>
            <div className="carousel-item">
              <Image src="/images/home/unsa2.jpg" className="d-block w-100" alt="unsa2" width={800} height={500} />
            </div>
            <div className="carousel-item">
              <Image src="/images/home/unsa3.jpg" className="d-block w-100" alt="unsa3" width={800} height={500} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}


