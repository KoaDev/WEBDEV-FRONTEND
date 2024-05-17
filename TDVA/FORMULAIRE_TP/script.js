document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('input[type="submit"]');
    const civilityRadios = document.querySelectorAll('input[type="radio"][name="civilite"]');
    const civilityDisplay = document.getElementById('civilityDisplay');
    // Ajoute un écouteur d'événement à chaque bouton radio de civilité
    civilityRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            // Met à jour le contenu de l'élément d'affichage avec la civilité sélectionnée
            civilityDisplay.textContent = 'Civilité sélectionnée : ' + this.value;
        });
    });


    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupère les valeurs des champs
        const nomValue = document.getElementById('nom').value.trim();
        const prenomValue = document.getElementById('prenom').value.trim();
        const emailValue = document.getElementById('email').value.trim();

        

        // Initialise une variable pour stocker les champs manquants
        let champsManquants = [];

        // Vérifie quels champs sont vides et les stocke dans la variable champsManquants
        if (nomValue === '') {
            champsManquants.push('Nom');
        }
        if (prenomValue === '') {
            champsManquants.push('Prénom');
        }
        if (emailValue === '') {
            champsManquants.push('Email');
        }
        


        // Vérifie s'il y a des champs manquants
        if (champsManquants.length > 0) {
            // Crée le message d'erreur avec les champs manquants
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Veuillez remplir les champs suivants : ' + champsManquants.join(', ');
            errorMessage.style.color = 'red';
            errorMessage.id = 'errorMessage';

            // Supprime le message d'erreur précédent s'il existe
            const oldErrorMessage = document.getElementById('errorMessage');
            if (oldErrorMessage) {
                oldErrorMessage.remove();
            }

            // Insère le message d'erreur au-dessus du bouton Envoyer
            form.insertBefore(errorMessage, submitButton);
        } else {
            // Supprime le message d'erreur s'il existe
            const errorMessage = document.getElementById('errorMessage');
            if (errorMessage) {
                errorMessage.remove();
            }

            // Envoyer le formulaire si tous les champs sont remplis
            form.submit();
        }
    });
});
