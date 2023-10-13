import React from "react";
import Menuparent from "./menuparent";
import Navbarparent from "./navbarparent";
import { NavLink } from "react-router-dom";
 


function Card(){

return(
    <div>

    <div className="menu">
      <Menuparent />

       <div className="content"> 
        <Navbarparent />

        <div className="blocsecondaire">
        <h2> Formulaire de paiement des Frais Scolaires</h2> 
             <div  className="blocsecondaire__card">
             <label for ="nom">Nom:</label>
             <input type="text"/>
            <label for="nom">Postnom :</label>
            <input type="text" id="nom" name="nom" required />
            <label for="montant">Montantpayé (USD) :</label>
           <input
             type="number"
             id="montant"
            name="montant"
             step="0.01"
             required
           />

          <label for="carte">Numéro de carte sim :</label>
           <input type="text" id="carte" name="carte" required />
            <label for="designationfrais">Designation frais:</label>
              <select  className="select">
              <option value="inscription">Inscription :50$</option>
              <option value="reinscription">Reinscription </option>
              <option value="minerval">Mensuel :100$</option>
              <option value="materiel">Frais matériel: 30$</option>
              
              </select>
        <label for="classe">Classe:</label>
         <select className="select">
        <option  value="premiere">1ère</option>
        <option  value="deuxième">2ème</option>
        <option  value="troisième">3ème</option>
        <option  value="quatrième">4ème</option>
        <option  value="cinquième">5ème</option>
        <option  value="sisième">  6ème</option>
        </select>
        <div className="btn3_ajouter">
            <button className="btn3"><NavLink to="/">payer</NavLink></button>
            </div>
            {/* <label  for="sexe">Sexe:</label>
              <select  className="select">
              <option value="masculin">M</option>
              <option value="feminin">F</option>
              </select> */}
         
           {/* <label for ="codedesecuritereseau">Code de securité reseau</label><br></br>
           <input type="text" id="reseau" name="reseau" required /><br></br> */}
          </div>
            
          <div className="blocsecondaire__reçu">
           {/* <div id="recu" style="display: none;">  */}
             <h3>Reçu de Paiement</h3><br></br>
             <p>
               Nom: <span id="reçu-nom"></span>
             </p><br></br>
             <p>
               Postnom: <span id="reçu-nom"></span>
             </p><br></br>
             <p>
               Montant payé : <span id="reçu-montant"></span> USD</p><br></br>
             <p>
              Numéro de carte sim : <span id="reçu-carte"></span></p><br></br>
              </div>
          </div>
     </div>         
    </div>
    </div> 
    


)

}
export default Card;