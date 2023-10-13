import React, { useState } from 'react';
import Menu from '../component/Menu';
import Navbar from '../component/Navbar';


function EnregistrementFrais(){
  // États pour stocker les données
  const [nomEleve, setNomEleve] = useState('');
  const [typeFrais, setTypeFrais] = useState('');
  const [montantFrais, setMontantFrais] = useState('');

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ici, vous pouvez envoyer les données au backend ou effectuer toute autre opération nécessaire
    console.log('Données soumises :', { nomEleve, typeFrais, montantFrais });
  };

  return (
    <div className="menu">
          <Menu />
    
           <div className="content"> 
            <Navbar />
    <div className='card'>
      <h2>Enregistrement des frais d'élève</h2>

      <form className='card' onSubmit={handleSubmit}>
        <div>
          <label>
            Nom de l'élève:
            </label><br></br>
            <input
              type="text"
              value={nomEleve}
              onChange={(e) => setNomEleve(e.target.value)}
            /><br></br>
        </div>
        <div>
          <label>
           Classe:
            </label><br></br>
            <input
              type="text"
              value={nomEleve}
              onChange={(e) => setNomEleve(e.target.value)}
            /><br></br>
        </div>
        <div>
          <label>
            Type de frais:
            </label><br></br>
            <input
              type="text"
              value={typeFrais}
              onChange={(e) => setTypeFrais(e.target.value)}
            /><br></br>
        </div>
        <div>
          <label>
            Montant payer:
            </label><br></br>
            <input
              type="number"
              value={montantFrais}
              onChange={(e) => setMontantFrais(e.target.value)}
            /><br></br>
        </div>
        <button className="bouton" type="submit">Enregistrer</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default EnregistrementFrais;