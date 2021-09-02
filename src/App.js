import React from "react"
import './style/App.css';

const Banner = () =>(
    <React.Fragment>
        <div className="container mb-auto">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <a href="/" className="mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <span className="logo">Miam Miam</span>
                </a>
                <ul className="nav nav-masthead">
                    <li className="nav-item">
                        <a className="nav-link" href="#menu">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#shop">Shop</a>
                    </li>
                </ul>
            </header>
        </div>

    </React.Fragment>
);

const Info = () => (
  <div className="p-5 info d-inline-block col-4">
      Horaire:<br/><br/>
      Lundi au vendredi<br/>
      Heure d'ouverture: 09h00<br/>
      Heure de fermerture: 22h<br/><br/>
      Samedi - Dimanche<br/>
      Heure d'ouverture: 09h00<br/>
      Heure de fermerture: 02h<br/><br/>
      Etat Actuel: Ouvert<br/>
  </div>
);

const Main = () =>(
    <main>
        <h1 style={{textAlign:"center",color:"yellow"}}>Bar Restau Miam Miam</h1>
        <p className="lead">
            Miam Miam bar restau situé à Blabala , fais de délicieux repas, des desserts,
            notre menu du jour et nos différens menus qui vous tendent les bras vous
            tranporterons dans le monde des belles saveurs,
            retrouvez chez nous l'extase que cache les mets Africains et Européens.
            Faites nous confiance et venez redécouvrir la saveur sous une autre forme.
        </p>
    </main>
);


const Acceuil = () => (
    <div className="home">
        <div className="homeh">
            <Banner/>
            <div className="cover-container d-flex w-100 h-100 p-4 mx-auto flex-column">
                <Main/>
            </div>
        </div>
    </div>
);


const Menu = () =>(
    <React.Fragment>
        <div id="menu" className="container pt-4">
            <h2 style={{color:"yellow"}}>Nos Menus</h2>
            <p className="lead">
                Découvrez ici nos divers menus, à commencer par notre menu du jours,
                nos menus statiques, nos vins nos boissons nos coktails et jus de fruits
                et terminer votre exploration avec nos menus des desserts.
            </p>
            <h4>Menu du jour</h4>
            <h4>Menu statique</h4>
            <h4>Nos vins, boissons, cocktails et jus</h4>
            <h4>Menu des desserts</h4>
        </div>
    </React.Fragment>
);

const About = () =>(
    <React.Fragment>
        <div id="about"  className="container pt-4">
            <h2 style={{color:"yellow"}}>A propos de nous ?</h2>
            <h3 style={{color:"yellow"}}>Nos horaires:</h3>
            Lundi au vendredi<br/>
            Heure d'ouverture: 09h00<br/>
            Heure de fermerture: 22h<br/><br/>
            Samedi - Dimanche<br/>
            Heure d'ouverture: 09h00<br/>
            Heure de fermerture: 02h<br/><br/>
            Etat Actuel: Ouvert<br/>
        </div>
    </React.Fragment>
);

class Form extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
       return(
           <React.Fragment>
               <form>
                   <p>
                       <div className="mb-3">
                           <label htmlFor="name" className="form-label">Nom</label>
                           <input type="text" className="form-control" id="name"/>
                       </div>
                       <div className="mb-3">
                           <label htmlFor="mail" className="form-label">Adresse Email</label>
                           <input type="email" className="form-control" id="mail" placeholder="nom@exemple.com"/>
                       </div>
                       <div className="mb-3">
                           <label htmlFor="num" className="form-label">Numéro téléphoique</label>
                           <input type="tel" className="form-control" id="num"/>
                       </div>
                       <div className="pb-3">
                           <label htmlFor="msg" className="form-label">Laissez votre message...</label>
                           <textarea className="form-control" id="msg" rows="5"/>
                       </div>
                   </p>
               </form>

           </React.Fragment>
       );
    }
}

const Contact = () =>(
    <React.Fragment>
        <div id="contact" className="container pt-4">
            <h2 style={{color:"yellow"}}>Nous Contacter ?</h2>
            <p className="lead">
                Laissez vos messages, vos suggestions et toutes vos remarques directement dans
                notre messagerie, nous les recevront avec plaisir.<br/>
                Egalement pour toutes vos commandes et réservation nous les recevront ici et
                une réponse vous sera directement envoyement dans votre boite email et
                sur le numéro que vous auriez indiqué.<br/>
            </p>
            <Form/>
        </div>
    </React.Fragment>
);

const Shop = () =>(
    <React.Fragment>
        <div id="shop" className="container">

        </div>
    </React.Fragment>
);

const Footer = () => (
    <React.Fragment>
        <footer className="container">
            <p>
                Site Web réalisé avec Bootstrap et React JS.
            </p>
        </footer>
    </React.Fragment>
);




//===================================//
function App(){
  return (
      <React.Fragment>
          <Acceuil/>
          <div className="body">
              <Menu/>
              <About/>
              <Contact/>
              <Shop/>
              <Footer/>
          </div>
      </React.Fragment>
  );
}

export default App;
