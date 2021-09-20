import React from "react";

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

export default About;