import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
       <h1>Paiement des frais scolaire</h1>

      <NavLink to="/dashboard">
        <div className="menu-item">
           <img className="icon" src="dashboard.png" alt="" /> 
          Dashboardecole
        </div>
      </NavLink>

      <NavLink to="/dashboardparent">
        <div className="menu-item">
          <img className="icon" src="file-list.png" alt="" /> 
          Dashboardparent
        </div>
      </NavLink>
      <NavLink to="/dashboardadmin">
        <div className="menu-item">
          <img className="icon" src="file-list.png" alt="" /> 
          Dashboardadmin
        </div>
      </NavLink>
      {/* <NavLink to="/notification">
        <div className="menu-item">
          <img className="icon" src="cptabilite.png" alt="" />
       Notification
        </div> 
      </NavLink>   */}
      <NavLink to="/creerclasse">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
        CreerClasse
        </div>
      </NavLink>   

       <NavLink to="/creationeleve">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
        Creationeleve
        </div>
      </NavLink> 
      {/* <NavLink to="/tarificationfrais">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
       Tarificationfrais
        </div>
      </NavLink>  */}

        <NavLink to="/enregistrementFrais">
        <div className="menu-item">
          <img className="icon" src="cptabilite.png" alt="" />
        EnregistrementFrais
        </div> 
      </NavLink>  

      <NavLink to="/Repertoirepaiement">
        <div className="menu-item">
           <img className="icon" src="portefeuille.png" alt="" /> 
          Repertoirepaiement
        </div>
      </NavLink>

      <NavLink to="/Profil">
        <div className="menu-item-bottom">
          <img className="icon" src="asset/photo.png" alt="" />
          Profil
        </div>
      </NavLink>
    </div>
  );
}
export default Menu;
