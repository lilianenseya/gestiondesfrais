//  import React, { useState } from 'react';
import React from 'react';
 import Menu from '../component/Menu';
 import Navbar from '../component/Navbar';


 function  Listedecontrole() {
//   // ... (Code précédent)

//   const [studentsInOrder, setStudentsInOrder] = useState([]);
//   const [debtors, setDebtors] = useState([]);

//   const handleSubmission = () => {
//     // Calculer le solde total dû par l'élève
//     const totalDûParÉlève = totalFees.montantTotalDû;
    
//     // Déterminer si l'élève est en ordre ou un créancier
//     const estEnOrdre = totalDûParÉlève === 0;
    
//     // Créer un objet d'élève avec ses informations et son statut
//     const élève = { ...studentInfo, estEnOrdre };
    
//     // Ajouter l'élève à la liste appropriée
//     if (estEnOrdre) {
//       setStudentsInOrder([...studentsInOrder, élève]);
//     } else {
//       setDebtors([...debtors, élève]);
//     }
    
//     // Réinitialiser les champs du formulaire
//     setStudentInfo({
//       nom: '',
//       numeroEtudiant: '',
//       classe: '',
//       dateSoumission: '',
//     });
//     setFees({
//       fraisScolarite: {
//         montantTotal: 0,
//         paiementRecu: 0,
//         soldeDu: 0,
//       },
//       fraisTransports: {
//         montantTotal: 0,
//         paiementRecu: 0,
//         soldeDu: 0,
//       },
//       fraisCantine: {
//         montantTotal: 0,
//         paiementRecu: 0,
//         soldeDu: 0,
//       },
//       fraisManuelsScolaires: {
//         montantTotal: 0,
//         paiementRecu: 0,
//         soldeDu: 0,
//       },
//     });
//     setAdditionalFees({
//       activitesExtrascolaires: {
//         montantTotal: 0,
//         paiementRecu: 0,
//         soldeDu: 0,
//       },
//       uniformesScolaires: {
//         montantTotal: 0,
//         paiementRecu: 0,
//         soldeDu: 0,
//       },
//     });
//     setTotalFees({
//       montantTotalDû: 0,
//       montantTotalRecu: 0,
//       soldeTotalDu: 0,
//     });
//   };

   return (
    <div className="menu">
           <Menu />
    
             <div className="content"> 
             <Navbar />
    {/* <div> */}
       {/* ... (Code précédent) */}
      
       {/* <button type="button" onClick={handleSubmission}>
         Soumettre
       </button>

       <h3>Élèves en Ordre</h3>
       <ul>
        {studentsInOrder.map((élève, index) => (
           <li key={index}>{élève.nom} - En ordre</li>
         ))}
       </ul>  */}

        {/* <h3>Créanciers</h3>
      <ul>
         {debtors.map((élève, index) => (
           <li key={index}>{élève.nom} - Créancier</li>
         ))}
       </ul>
    </div> */}
     </div>
    </div> 
   );
 }

 export default Listedecontrole;