import React from "react";
 

function Navbarparent() {
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
                <img className="img__img" src="cloche.png" alt="" />
                <img className= "img" src="boule.png" alt="" />
                <img src="Ellipse 3.png" alt="" />
                <h3 className="card_h3">Parent</h3>
            </div>
    </div>
  );
}
export default Navbarparent;
