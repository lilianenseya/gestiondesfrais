import React from "react";
import Menu from "../component/Menu";
import Navbar from "../component/Navbar";
// import Chart2 from "../component/Chart2";

function Dashboard() {
  return (
    <div className="menu">
      <Menu />

      <div className="content">
        <Navbar />
        <div>
               {/* <Chart2 /> */}

        <div className="conteneur_paragraphe3">
          <div className="contenair-build">
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>Total garçon</span>
                    <b>300</b>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>Total fille</span>
                    <b>800</b>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" sectionprincipale3">
                <div className="building">
                  <img src="building-line.png" alt="" />
                  <div className="chiffre">
                    <span>Effectif total</span>
                    <b>1300</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="histogramme">
            <h3>Rapport de paiement</h3>
           
          </div>
        </div>
        </div> 
      </div>
    </div>
  );
}

export default Dashboard;
