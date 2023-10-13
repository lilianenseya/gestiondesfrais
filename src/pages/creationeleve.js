import React, { useState } from 'react';
import Menu from '../component/Menu';
import Navbar from '../component/Navbar';

function CreationEleve() {
  // États pour stocker les informations de l'élève
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  // Fonction pour gérer la soumission du formulaire
  function handleSubmit(event) {
    event.preventDefault();

    // Ici, vous pouvez envoyer les données à votre backend pour les enregistrer dans la base de données
    // Assurez-vous d'ajouter les validations côté serveur également.

    // Réinitialiser les champs après la soumission
    setPrenom('');
    setNom('');
    setDateNaissance('');
    setAdresse('');
    setEmail('');
    setTelephone('');
  }

  return (
    <div className="menu">
    <Menu />

     <div className="content"> 
      <Navbar />

    <form  className="card"  onSubmit={handleSubmit}>
      <h2>Créer l'elève</h2>
      <di>
      <label for="matricule">Matricule:</label><br></br>
      <input type="number" id="number" name="matricule" required pattern /><br></br> 
      </di>
      <div>
        <label>
          Prénom:
          </label><br></br>
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required pattern/><br></br>
      </div>
      <div>
        <label>
          Nom:
          </label><br></br>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required pattern /><br></br>
      
        <label>
          Date de naissance:
          </label><br></br>
          <input type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} required pattern/><br></br>
      </div>
      <div>
        <label>
         Sexe :
          </label><br></br>
          <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required pattern />
      </div>
      <div>
        <label>
          Email:
          </label><br></br>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required pattern /><br></br>
      </div>
      <div>
        <label>
          Téléphone:
          </label><br></br>
          <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      </div>
      <div>
      <button className="bouton" type="submit">Enregistrer</button>
      <button className="bouton" type="submit">Supprimer</button>
      <button className="bouton" type="submit">Modifier</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default CreationEleve;