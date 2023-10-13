import React from "react";
import { NavLink } from "react-router-dom";

function Connexion() {
  return (
    <div className="border">
      <div className="Formulaire_connexion">
        <div className="titre_formulaire">
          <h1>Collège sainte Andre</h1>
          <h4>
            Avez-vous déja un compte?<b className="connect"></b> Se connecter
          </h4>
        </div>
        <div className="titre_niveau2">
          <h2>Créer votre compte</h2>
          <h3>
            Creer votre compte en tant qu'utilisateur de la plateforme'
          </h3>
        </div>

        <div class="form action=" method="post">
          <label className="label" for="Votre nom *">
            Votre nom *
          </label>
          <br></br>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="   Nom d'utilisateur"
            required/><br></br>
          <label className="label" for="Qui est-vous ? *">
            Qui est-vous ? *
          </label>
          <br></br>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="   parent de l'eleve"
            required/><br></br>

          <label className="label" for=" Email  *">
            Email *
          </label>
          <br></br>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="   Enter your mail"
            required/><br></br>

          <label className="label" for=" Mot de passe *">
            {" "}
            Mot de passe *
          </label>
          <br></br>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="   Enter your pss word"
            required/><br></br>

          <label className="label" for="  Confirmer le mot de passe *">
            {" "}
            Confirmer le mot de passe *
          </label>
          <br></br>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="  Enter your pass word"
            required/><br></br>

          <div className="bouton_formulaire">
            <button className="btnform">
              {" "}
              <NavLink to="/">S'enregistrer</NavLink>
            </button>
          </div>
        </div>
        <h4>
          Avez-vous déja un compte? <NavLink to="/">Se connecter</NavLink>
        </h4>
      </div>
    </div>
  );
}
export default Connexion;
