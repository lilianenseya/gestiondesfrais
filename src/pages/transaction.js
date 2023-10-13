import React from "react";
import Menuparent from "../component/menuparent";
import Navbarparent from "../component/navbarparent";



function Transaction(){

return(
    <div>

    <div className="menu">
      <Menuparent />

       <div className="content"> 
        <Navbarparent />
        <div className="card">
        <h2> Formulaire de transaction</h2> 
         <from>
          <label for="transaction">Transaction:</label><br></br>
           <input
             type="number"
             id="transaction"
            name="number"
             step="0.01"
             required
           /><br></br>

          <label for="date">Date:</label><br></br>
           <input type="date" id="date" name="date" required /><br></br>
           <button className="bouton" type="button" id="valider">
             Valider
          </button><br></br>
           </from>
           </div>
    </div>
    </div>
    </div>


)




}
export default Transaction;