document.getElementById('myForm').addEventListener("submit", function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get form values
      var fcode = document.getElementById('code').value;
      var fnom = document.getElementById('nom').value;
      var fprenom = document.getElementById('prenom').value;
      var fnote = document.getElementById('note').value;
    
  
      // Simple validation
      if (fcode.trim() === '') {
          alert('Veuillez entrer votre code.');
          return;
      }
  
      if (fnom.trim() === '') {
          alert('Veuillez entrer votre nom.');
          return;
      }
  
      if (fprenom.trim() === '') {
          alert('Veuillez entrer votre prenom.');
          return;
      }
      if (fnote.trim() === '') {
        alert('Veuillez entrer votre note.');
        return;
    }
  
      if (isNaN(fnote) || fnote < 0 || fnote > 20) {
          alert('Veuillez entrer une note valide entre 0 et 20.');
          return;
      }else {
        var mention = getMention(fnote);
        showMessage("Vous avez valider avec une mention : " + mention);
        // Ici, vous pouvez envoyer le formulaire ou effectuer toute autre action requise
    }
  
      
      alert('Formulaire soumis avec succès !');
      document.getElementById('myForm').reset();
  });



// Fonction pour calculer la mention
function getMention(note) {
  if (note < 10) {
    alert('Vous avez valider avec une mention  : Insuffisant ');
    return;
      
  } else if (note < 12) {
    alert('Vous avez valider avec une mention  : Passable ');
    return;
  } else if (note < 14) {
    alert('Vous avez valider avec une mention : Assez Bien ');
    return;
  } else if (note < 16) {
    alert('Vous avez valider avec une mention :  Bien ');
    return;
  } else {
    alert('Vous avez valider avec une mention :  Tres Bien ');
    return;
  }
}