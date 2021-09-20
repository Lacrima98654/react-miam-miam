import Banner from './Banner';

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

export default Acceuil;