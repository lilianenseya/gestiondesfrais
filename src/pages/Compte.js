import React from "react";
import { NavLink } from "react-router-dom";
 

function Compte(){
    return(
         
<div className="border">
<div className="Formulaire_connexion">
    <div className="titre_formulaire">
     <h1>Authentification</h1> 
    {/* <h4>Vous n'avez encore un compte ?<b className="connect"></b> Créer un compte</h4> */}
    </div>
    <div className="titre_niveau2">
    <h2>Se connecter</h2>
    <h3>Creer votre compte en tant  qu' 
        utilisateur de la plate forme
        </h3>
        </div>
    <div class="form">
                <label className="label" for="Email  *">Email  *</label><br></br>
                <input className="input"type="text" name="username" id="username" placeholder="   Enter your mail" required /><br></br>

                <label className="label" for=" Mot de passe *"> Mot de passe  *</label><br></br>
                <input className="input" type="text" name="username" id="username" placeholder="   Enter your password" required /><br></br>
                <div className="bouton_formulaire">
          
                 <button className="btnform"> <NavLink to="/dashboard"> Se connecter</NavLink></button>
                </div>
                </div>
                 <div>
                <NavLink to="/Connexion">
                <h4>Vous n'avez pas encore un compte ?  Créer un compte</h4>
                </NavLink>
                </div> 
                
    </div>
    </div>
      
);

}
export default Compte;











