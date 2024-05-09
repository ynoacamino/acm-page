import ImageContainer from "@/components/team/ImageContainer"
import Info from "@/components/team/Info"
import Social from "@/components/team/Social"

export default function Card ({srcImg, nombre, cargo, redes}) {
    let style = "md:w-1/3 lg:w-1/5 2xl:w-1/6 w-[60%] 3xl:p-[20px] w-[50%]";

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
    let style = "group bg-[rgba(0,48,77,0.5)]  py-7 px-0 pb-8 2xl:pb-12 text-center overflow-hidden relative rounded-xl shadow-md shadow-[rgba(0,86,135,0.5)]";

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
    let style = "w-full p-0 m-0 bg-[radial-gradient(circle,rgba(0,48,77,1)_0%,rgba(0,11,18,1)_100%)] absolute bottom-[-100px] left-0 transition-all duration-500 ease-in-out group-hover:bottom-0 "
    return (
        <ul className={style}>
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