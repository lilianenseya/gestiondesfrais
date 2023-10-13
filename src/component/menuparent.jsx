import React from "react";
import { NavLink } from "react-router-dom";

function Menuparent() {
  return (
    <div className="menu">
       <h1>Paiement des frais scolaire</h1>

      {/* <NavLink to="/dashboard">
        <div className="menu-item">
           <img className="icon" src="dashboard.png" alt="" /> 
          Dashboard
        </div>
      </NavLink> */}

       <NavLink to="/dashboardparent">
        <div className="menu-item">
          <img className="icon" src="file-list.png" alt="" /> 
          Dashboardparent
        </div>
      </NavLink> 
      {/* <NavLink to="/dashboardadmin">
        <div className="menu-item">
          <img className="icon" src="file-list.png" alt="" /> 
          DashboardAdmin
        </div>
      </NavLink> */}

       <NavLink to="/notification">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
         Notification
        </div>
      </NavLink>   

        <NavLink to="/transaction">
        <div className="menu-item">
          <img className="icon" src="Production.png" alt="" />
          Transaction
        </div>
      </NavLink>  

        <NavLink to="/card">
        <div className="menu-item">
          <img className="icon" src="cptabilite.png" alt="" />
         Card
        </div> 
      </NavLink>  

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
export default Menuparent;
