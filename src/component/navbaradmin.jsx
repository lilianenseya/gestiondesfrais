import React from "react";
 

function Navbaradmin() {
  return (
    <div className="nav">
      <div className="forme">
        <img className="forme-ronde" src="Group 1.png" alt="" />
        <div className="inputRecherche">
          {/* <img src="search.png" alt="" /> */}
          <input className="search" type="search" placeholder="Rechercher..." />
        </div>
      </div>
      <div className="card_user-profil">
                <img src="Ellipse 3.png" alt="" />
                <h3 className="card_h3">Admin</h3>

            </div>
    </div>
  );
}
export default Navbaradmin;
