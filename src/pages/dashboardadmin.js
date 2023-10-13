import React from "react";
import Menuadmin from "../component/menuadmin";
import Navbaradmin from "../component/navbaradmin";
 
 
 
        
function Dashboardadmin() {
  return (
    <div className="menu">
      <Menuadmin />

       <div className="content"> 
        <Navbaradmin />

        <div className="conteneur_paragraphe3">
          <div className="contenair-build">
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>ont abandonné</span>
                    <b>20 Elèves</b>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>Sont exclus</span>
                    <b>2 Eleves</b>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span></span>
                    <b></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="histogramme">
            <h3>Statistique</h3>
            {/* <div className="Card"><Graphic/></div> */}
              {/* <Graphic /> */}
          {/* </div>  */}
        </div>
     </div>
     </div>

  );
}

export default Dashboardadmin;
