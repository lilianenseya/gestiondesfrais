  import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import "./App.css";
  import Dashboard from "./pages/Dashboard";
  import Dashboardparent from "./pages/dashboardparent";
  import Menuparent from "./component/menuparent";
  import Navbarparent from "./component/navbarparent";
  import Dashboardadmin from "./pages/dashboardadmin";
  import Notification from "./pages/notification";
  import Transaction from "./pages/transaction";
  import Repertoirepaiement from "./pages/repertoirePaiement";
  import Card from "./component/Card";
  import Connexion from "./component/Connexion";
  import Compte from "./pages/Compte";
  import Menuadmin from "./component/menuadmin";
  import Navbaradmin from "./component/navbaradmin";
  import CreationEleve from "./pages/creationeleve";
  import Creationcompte from "./pages/creationcompte";
  import EnregistrementFrais from "./pages/enregistrementFrais";
  import CreerClasse from "./pages/creerclasse";
  //  import Chart2 from "./component/chart2";
  import Tarificationfrais from "./pages/tarificationfrais";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/chart2" element={<Chart2 />}></Route> */}
        <Route path="/dashboardparent" element={<Dashboardparent />} ></Route>
        <Route path="/menuparent" element={<Menuparent />} ></Route>
        <Route path="/navbarparent" element={<Navbarparent />} ></Route>
        <Route path="/notification" element ={<Notification />}></Route>
        <Route path="/transaction" element ={<Transaction />}></Route>
        <Route path="/repertoirePaiement" element ={<Repertoirepaiement />}></Route>
        <Route path="/card" element ={<Card />}></Route>
         <Route path="/Dashboardadmin" element={<Dashboardadmin />}></Route>
         <Route path="/menuadmin" element={<Menuadmin />}></Route>
         <Route path="/navbaradmin" element={<Navbaradmin />}></Route>
         <Route path="/creationcompte" element={<Creationcompte />}></Route>
         <Route path="/tarificationfrais" element={<Tarificationfrais />}></Route>
         <Route path="/creationeleve" element={<CreationEleve/>}></Route>
         <Route path="/enregistrementFrais" element={<EnregistrementFrais />}></Route>
         <Route path="/creerClasse" element={<CreerClasse />}></Route>
        <Route path="/Connexion" element={<Connexion />}></Route>
        <Route path="/" element={<Compte />}></Route>
         
         
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
