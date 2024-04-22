import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import './Card.css';

export default function Card ({srcImg, nombre, cargo, redes}) {
    return (
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">  
                <div className="picture">
                    <img class="img-fluid" src={srcImg}/>
                </div>
                <div className="team-content">
                    <h3 class="name">{nombre}</h3>
                    <h4 class="title">{cargo}</h4>
                </div>
                <ul className="social">
                    <li><a href={redes.facebook} className="fab fa-facebook-f" aria-hidden="true"></a></li>
                    <li><a href={redes.twitter} className="fab fa-twitter" aria-hidden="true"></a></li>
                    <li><a href={redes.gmail} className="fab fa-google-plus-g" aria-hidden="true"></a></li>
                    <li><a href={redes.linkedin} className="fab fa-linkedin-in" aria-hidden="true"></a></li>
                </ul>
            </div>
        </div>
    );
}