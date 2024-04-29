import ImageContainer from "@/components/team/ImageContainer"
import Info from "@/components/team/Info"
import Social from "@/components/team/Social"

export default function Card ({srcImg, nombre, cargo, redes}) {
    let style = "md:w-1/3 lg:w-1/4 w-[60%] ";

    return (
        <div className={style}>
            <Container
                srcImg={srcImg}
                nombre={nombre}
                cargo={cargo}
                redes={redes}
            />
        </div>
    );
}

export function Container ({srcImg, nombre, cargo, redes}) {
    let style = "group bg-lime-50 py-7 px-0 pb-14 mb-8 text-center overflow-hidden relative rounded-xl";

    return (
        <div className={style}>
            <ImageContainer
                src = {srcImg}
                nombre = {nombre}
            />
            <Info
                nombre = {nombre}
                cargo = {cargo}
            />
            <SocialContainer
                redes={redes}
            />
        </div>
    );

}

export function SocialContainer ({redes}) {
    let style = "w-full p-0 m-0 bg-neutral-700 absolute bottom-[-100px] left-0 transition-all duration-500 ease-in-out group-hover:bottom-0"
    return (
        <ul className={style}>
            <Social
                nombreRed="fab fa-facebook"
                hRef={redes.facebook}
            />
            <Social
                nombreRed="fab fa-twitter"
                hRef={redes.twitter}
            />
            <Social
                nombreRed="far fa-envelope"
                hRef={redes.gmail}
            />
            <Social
                nombreRed="fab fa-linkedin"
                hRef={redes.linkedin}
            />
        </ul>
    );
}