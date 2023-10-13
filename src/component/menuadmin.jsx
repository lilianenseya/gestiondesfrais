import React from "react";
import { NavLink } from "react-router-dom";

function Menuadmin() {
  return (
    <div className="menu">
       <h1>Paiement des frais scolaire</h1>

       <NavLink to="/dashboardadmin">
        <div className="menu-item">
          <img className="icon" src="file-list.png" alt="" /> 
          DashboardAdmin
        </div>
      </NavLink>

       <NavLink to="/creationcompte">
        <div className="menu-item">
           <img className="icon" src="dashboard.png" alt="" /> 
         Creationcompte
        </div>
      </NavLink>
       <NavLink to="/usertable">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
        Usertable
        </div>
      </NavLink>   

       {/* <NavLink to="/supprimereleve">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
       SupprimerEleve
        </div>
      </NavLink>  */}

      {/* <NavLink to="/modifier">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
       Modifier
        </div>
      </NavLink>    */}

        

        {/* <NavLink to="/formulairepaiement">
        <div className="menu-item">
          <img className="icon" src="cptabilite.png" alt="" />
          Formulairepaiement
        </div> 
      </NavLink>   */}

      {/* <NavLink to="/Repertoirepaiement">
        <div className="menu-item">
           <img className="icon" src="portefeuille.png" alt="" /> 
          Repertoirepaiement
        </div>
      </NavLink> */}

      <NavLink to="/Profil">
        <div className="menu-item-bottom">
          <img className="icon" src="asset/photo.png" alt="" />
          Profil
        </div>
      </NavLink>
    </div>
  );
}
export default Menuadmin;
