import IconFacebook from "./icons/IconFacebook";
import IconGithub from "./icons/IconGithub";
import IconInstagram from "./icons/IconInstagram";

import "./Footer.css";

export function Footer(){
  return (
    <footer className="bg-gray-800">
      <div className="internalFooter">
        <img
          src="/ACM-logo.png"
          alt="Logo ACM"
          className=""
        />
        <div className="rightFooter text-white">
          <div className="leftColumnFooter">
            <h1 style={{marginBottom: '6px'}}>
              Navegación
            </h1>
            <a href="/" className="underline text-white">
              Inicio
            </a>
            <a href="/about" className="underline text-white">
              Acerca de
            </a>
            <a href="/events" className="underline text-white">
              Eventos
            </a>
            <a href="/team" className="underline text-white">
              Equipo
            </a>
          </div>
          <div>
            <h1>
              Redes sociales
            </h1>
            <div className="rightColumnFooter">
              <a href="https://facebook.com" aria-label="facebook">
                <IconFacebook className="iconFooter"/>
              </a>
              <a href="https://instagram.com" aria-label="instagram">
                <IconInstagram className="iconFooter"/>
              </a>
              <a href="https://github.com" aria-label="github">
                <IconGithub className="iconFooter"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}