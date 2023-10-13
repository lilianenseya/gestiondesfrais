 
import React, { useState } from 'react';
import Menuadmin from "../component/menuadmin";
import  Navbaradmin from "../component/navbaradmin"


function Creationcompte(){
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données au serveur ici (par exemple, via une requête HTTP)
    console.log('Données soumises :', formData);
  };

  return (
    <div className="menu">
          <Menuadmin />
    
           <div className="content"> 
            <Navbaradmin />

        <form  className="card" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nom d'utilisateur : </label><br></br>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
                  /><br></br>
            </div>
      <div>
          <label htmlFor="email">Email   utilisateur  : </label><br></br>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br></br>
        </div>
      <div>
          <label htmlFor="password">Mot de passe user   : </label><br></br>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          /><br></br>
        </div>
      <button  className="bouton"type="submit">Créer un compte</button>
      </form>
      </div>
      </div>
  );
};

export default Creationcompte;