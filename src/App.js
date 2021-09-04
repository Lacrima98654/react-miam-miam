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
            <h3>Nos horaires:</h3>
            Lundi au vendredi<br/>
            Heure d'ouverture: 09h00<br/>
            Heure de fermerture: 22h<br/><br/>
            Samedi - Dimanche<br/>
            Heure d'ouverture: 09h00<br/>
            Heure de fermerture: 02h<br/><br/>
            Etat Actuel: Ouvert<br/>
            <br/>
            <h3>A propos du restaurant</h3>
            <p className="lead">
                Le restaurant Miam-miam créé par Santos Gari est ce que l'on
                peut appeler une nouvelle ère des mets Africains et européens, les différents
                menus fait de main de maître n'ont qu'un seul but: <strong>SATISFAIRES VOS
                PAPILLES GUSTATIVES</strong>, qui que vous soyez et d'où vos venez
                vous trouverez satistafation dans notre restaurant.
                Notre équipe toujours prêt et 100% actif saura prendre soin du roi/ de la reine
                que vous êtes, n'hésitez pas une seconde, votre délicieux repas est prêt
                et n'attends que vous.
            </p>
            <h3>Réservation et autres</h3>
            <p className="lead">
                En autre le service de restauration, notre restaurant prend également en 
                charge l'organisation de grands événements comme la réception d'un mariage,
                un baptème et tout autre événement festif.<br/>
                Le restaurant prend entièrement en charge la restauration😊.
                En cas de besoin d'un restautant pour l'organisation de votre
                fête, il n'y a qu'un simple formulaire à remplir, cliquez <a href="#shop">ici</a>. 
            </p>
        </div>
    </React.Fragment>
);

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name :"",
            email : "",
            tel : "",
            msg: ""
        }
    }
    handleChange(e){
        this.setState(
            {[e.target.name]:e.target.value}
        )
    }
    handleSubmit(){

    }
    render(){
       return(
           <React.Fragment>
               <form onSubmit={this.handleSubmit.bind(this)}>
                   <p>
                       <div className="mb-3">
                           <label htmlFor="name" className="form-label">Nom</label>
                           <input type="text" name="name" className="form-control" id="name"
                            value={this.state.name} onChange={this.handleChange.bind(this)}
                           />
                       </div>
                       <div className="mb-3">
                           <label htmlFor="mail" className="form-label">Adresse Email</label>
                           <input type="email" name="email" className="form-control" id="mail" placeholder="nom@exemple.com"
                           value={this.state.email} onChange={this.handleChange.bind(this)}
                           />
                       </div>
                       <div className="mb-3">
                           <label htmlFor="num" className="form-label">Numéro téléphoique</label>
                           <input type="tel" name="tel" className="form-control" id="num"
                           value={this.state.tel} onChange={this.handleChange.bind(this)}
                           />
                       </div>
                       <div className="pb-3">
                           <label htmlFor="msg" className="form-label">Laissez votre message...</label>
                           <textarea name="msg" className="form-control" id="msg" rows="5"
                           value={this.state.msg} onChange={this.handleChange.bind(this)}
                           />
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
            <h3>Commandes et Réservation</h3>
            <p className="lead">
                Pour toutes vos commandes et réservation vous êtes au bon endroits.
                Une fois le formulaire ci dessous rempli, notre équipe de 
                communication vous donnera une aussitôt dans les 15minutes qui suivront.
            </p>
        </div>
    </React.Fragment>
);

const Footer = () => (
    <React.Fragment>
        <footer className="container">
            <p>
                Site Web réalisé avec Bootstrap et React JS par <a href="tel:+22991985934">Roméo KAKPO</a>.
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
