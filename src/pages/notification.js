import React from "react";
import Menuparent from "../component/menuparent";
import Navbarparent from "../component/navbarparent";

function Notification(){

return(
   <div>

    <div className="menu">
      <Menuparent />

       <div className="content"> 
        <Navbarparent />
    
         
      {/* /* alert(`Notification envoyée au numéro de téléphone : ${phoneNumber}`)   */}

     <div className="card">
       <h2>Formulaire de Notification aux Parents</h2>
          <div>
            <label htmlFor="libellénotification">Libellé notification</label><br></br>
            <input type="text"/><br></br>

            <label htmlFor="phoneNumber">Numéro de téléphone</label><br></br>
            <input
            type="phoneNumber"
              id="phoneNumber"
              //  value=""
              onChange="handlePhoneNumberChange"
              /><br></br>
        </div>
           <button className="bouton">Envoyer Notification</button><br></br>
        </div> 
        </div>  
        </div>
        </div>


)

}
export default Notification;