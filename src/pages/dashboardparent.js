import React from "react";
import Menuparent from "../component/menuparent";
import Navbarparent from "../component/navbarparent";
//  import Card from "../component/Card";
 

function Dashboardparent() {
  return (
    <div className="menu">
      <Menuparent />

       <div className="content"> 
        <Navbarparent />

        <div className="conteneur_paragraphe3">
          <div className="contenair-build">
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>La rentrée scolaire</span>
                    <b>04 septembre à 7h 30'</b>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>Frais scolaire fixé à</span>
                    <b>100$ le mois</b>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>A payer avant le 05 du mois</span>
                    <b></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="histogramme">
            <h3>Repertoire des notifications</h3>
            {/* <div className="Card"><Graphic/></div> */}
              {/* <Graphic /> */}
          </div>
        </div>
     </div>
     </div>

  );
}

export default Dashboardparent;
