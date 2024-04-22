import Card from "@/components/team/Card"
import 'bootstrap/dist/css/bootstrap.min.css';

const listaTeam = [
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 1",
        cargo: "Presidente",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 2",
        cargo: "Esclavo",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 3",
        cargo: "Esclavo",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 4",
        cargo: "Esclavo",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 5",
        cargo: "Esclavo",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 6",
        cargo: "Esclavo",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 6",
        cargo: "Esclavo",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png",
        nombre: "Persona 6",
        cargo: "Esclavo",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    }
];


export default function CardContainer() {
    return (
        <div className="container-cards">
            <div class="container">
                <div class="row">
                    {listaTeam.map((persona, index) => (
                        <Card
                            key={index}
                            srcImg={persona.srcImg}
                            nombre={persona.nombre}
                            cargo={persona.cargo}
                            redes={persona.redes}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}