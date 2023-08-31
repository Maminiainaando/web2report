import React, { useState } from 'react';
import { BrowserRouter as useHistory } from 'react-router-dom';
export default function EditProfilePage() {
  const history = useHistory();
  const handleCancel = () => {
    history.goBack();
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données mises à jour au serveur
    console.log('Données mises à jour:', { name, email, bio });
  };


  return (
    <div>
      <h1>Modifier le profil</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Biographie:</label>
          <textarea value={bio} onChange={handleBioChange} />
        </div>
        <button type="submit">Enregistrer</button>
        <button type="button" onClick={handleCancel}>Annuler</button> {/* Bouton Annuler */}
      </form>
    </div>
  );
}


