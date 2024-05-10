import Card from "@/components/team/Card"
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CardContainer() {
    let style = "flex flex-row flex-wrap gap-10 items-center justify-center m-[2%] "

    return (
        <div className={style}>
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
    );
}




const listaTeam = [
    {
        srcImg: "/images/team/ChambillaPerca_ValentinaMilagros_Presidente_JuntaDirectiva.png",
        nombre: "Valentina Milagros Chambilla Perca",
        cargo: "Presidente del Capítulo Estudiantil",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/MamaniMamani_AlexisBaltazar_Vicepresidente_JuntaDirectiva.png",
        nombre: "Alexis Baltazar Mamani Mamani",
        cargo: "Vicepresidente de la Junta Directiva",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/MolloChuquicana_DollyYadhira_Secretaria_JuntaDirectiva.png",
        nombre: "Dolly Yadhira Mollo Chuquicaña",
        cargo: "Secretaria de la Junta Directiva",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/AbrilNonuncay_ChristianJesus_Presidente_Videojuegos.png",
        nombre: "Christian Jesus Abril Noñuncay",
        cargo: "Presidente de Videjuegos",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/MestasZegarra_ChristianRaul_Vicepresidente_Videojuegos.png",
        nombre: "Christian Raul Mestas Zegarra",
        cargo: "Vicepresidente de Videjuegos",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/PlaceholderJoe.png",
        nombre: "Joe Jhony Cuadros Amanqui",
        cargo: "Presidente de Desarrollo Web",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/ValeraYana_JeanpierMichaelson_Vicepresidente_DesarrolloWeb.png",
        nombre: "Jeanpier Michael Valera Yana",
        cargo: "Vicepresidente de Desarrollo Web",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/MamaniUscamayta_AgustinDavid_Presidente_DesarrolloDeSoftware.png",
        nombre: "Agustín David Mamani Uscamayta",
        cargo: "Presidente de Desarrollo de Software",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/MarronCarcausto_DanielEnrique_Presidente_Ciberseguridad.png",
        nombre: "Daniel Enrique Marron Carcausto",
        cargo: "Presidente de Ciberseguridad",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/TaparaQuispe_FabiolaGrissel_Presidente_InteligenciaArtificial.png",
        nombre: "Fabiola Grisel Tapara Quispe",
        cargo: "Presidente de Inteligencia Artificial",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    },
    {
        srcImg: "/images/team/CondoriAnahua_Graciela_VicePresidente_InteligenciaArtificial.png",
        nombre: "Graciela Condori Anahua",
        cargo: "Vicepresidente de Inteligencia Artificial",
        redes: {
            facebook: "",
            twitter: "",
            gmail: "",
            linkedin: ""
        }
    }
];