import React, { useState } from 'react';
import Menu from '../component/Menu';
import Navbar from '../component/Navbar';

function CreerClasse() {
  const [nomClasse, setNomClasse] = useState('');
  const [description, setDescription] = useState('');
  const [niveau, setNiveau] = useState('');
  const [categorie, setCategorie] = useState('');

  const handleCreerClasse = () => {
    // Ajouter la logique pour créer la classe ici
    // Par exemple, faire une requête API pour enregistrer les détails de la classe
    // Une fois la classe créée, rediriger l'utilisateur vers la vue d'ensemble
  };

  return (
    <div className="menu">
    <Menu />

     <div className="content"> 
      <Navbar />
    <div className='card' >
      <h2>Créer une Classe</h2>
      <form className='card'>
        <div >
          <label>Nom de la Classe:</label><br></br>
          <input
            type="text"
            value={nomClasse}
            onChange={(e) => setNomClasse(e.target.value)}require/><br></br>
        </div>
       
        <div>
          <label>Niveau:</label><br></br>
          <input
            type="number"
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}require/><br></br>
        </div>
        <div>
          <label>Catégorie:</label><br></br>
          <input
            type="text"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}require /><br></br>
        </div>
        <div>
          <label>Description:</label><br></br>
          <textarea   
            value={description}
            onChange={(e) => setDescription(e.target.value)}require/><br></br>
        </div>
        <div>
        <button className="bouton"type="button" onClick={handleCreerClasse}>
          Créer Classe
        </button>
        <button className="bouton"type="button" onClick={handleCreerClasse}>
          Modifier
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}

export default CreerClasse;