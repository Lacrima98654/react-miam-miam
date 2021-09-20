
import React  from 'react';

const Card = (props) =>(
    <div className="card mb-3 mb-lg-0" style={{width: "18rem",height:"18rem"}}>
    <img src={require(`${props.src}`).default} className="card-img-top" alt={props.alt}/>
    <div className="card-body">
        <p className="card-text">{props.children}</p>
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
            <div className="pb-4 d-flex justify-content-center">
            <Card src="./h.jpg" alt="Salade Charismatique">
                Menu du jour:
            </Card>
            </div>   
            <h4>Menu statique</h4>
                <div className="d-flex justify-content-md-between justify-content-center flex-wrap pb-4">
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                </div>
            <h4>Nos vins, boissons, cocktails et jus</h4>
            <div className="d-flex justify-content-md-between justify-content-center flex-wrap pb-4">
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                </div>         
            <h4>Menu des desserts</h4>
            <div className="d-flex justify-content-md-between justify-content-center flex-wrap pb-4">
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                    <Card src="./h.jpg" alt="Salade Charismatique">
                        Menu du jour:
                    </Card>
                </div>
        </div>
    </React.Fragment>
);

export default Menu;