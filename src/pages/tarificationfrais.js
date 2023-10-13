     
import React from 'react';
import Menu from '../component/Menu';
import Navbar from '../component/Navbar';


function TarificationFrais(){
  const frais = [
    { type: 'Inscription', montant : 50 },
    { type: 'Mensuel',     montant : 100 },
    { type: 'Matériel',    montant : 30 },
    // Ajoutez d'autres types de frais si nécessaire
  ];

  return (
    <div className="menu">
    <Menu />

     <div className="content"> 
      <Navbar />
    <div className='card'>
      <h2>Tarification des Frais Scolaires</h2>
      <ul className='ul'>
        {frais.map((fraisItem, index) => (
          <li key={index}>
            {fraisItem.type} : {fraisItem.montant} $
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default TarificationFrais;