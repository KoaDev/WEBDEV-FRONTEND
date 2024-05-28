const form = document.querySelector('form');

const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const lastname = document.querySelector('#name');
const lastnameError = document.querySelector('#name-error');

const name = document.querySelector('#firstname');
const nameError = document.querySelector('#firstname-error');

const globalError = document.querySelector('#comments-error');
const globalErrorText = document.querySelector('.error-text');

const titleRadios = document.querySelectorAll('input[name="title"]');
const titleDisplay = document.querySelector('#AModifier2');
const nameDisplay = document.querySelector('#AModifier3');

// Mapping des valeurs des boutons radio à leur version complète
const titleMapping = {
    mr: 'Monsieur',
    mme: 'Madame',
    me: 'Maître'
};

titleRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        titleDisplay.textContent = titleMapping[this.id];
    });
});

function validateLastname(lastname) {
    return lastname.length < 2;
}

function validateName(name) {
    return name.length < 2;
}

function validateEmail(email) {
    return email === '';
}

function validateFields() {
    const errors = [];

    const lastnameValue = lastname.value;
    const nameValue = name.value;
    const emailValue = email.value;

    if (validateLastname(lastnameValue)) {
        lastnameError.style.display = 'block';
        lastnameError.textContent = 'Le champ nom est obligatoire';
        errors.push('Le champ nom est obligatoire');
    } else {
        lastnameError.style.display = 'none';
    }

    if (validateName(nameValue)) {
        nameError.style.display = 'block';
        nameError.textContent = 'Le champ prénom est obligatoire';
        errors.push('Le champ prénom est obligatoire');
    } else {
        nameError.style.display = 'none';
    }

    if (validateEmail(emailValue)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Le champ email est obligatoire';
        errors.push('Le champ email est obligatoire');
    } else {
        emailError.style.display = 'none';
    }

    // Générer le contenu HTML avec les erreurs
    let errorMessageHTML = '<ul style="list-style-type: none;">';
    errors.forEach(error => {
        errorMessageHTML += `<li>${error}</li>`;
    });
    errorMessageHTML += '</ul>';

    // Gestion des erreurs globales
    if (errors.length > 0) {
        globalError.style.display = 'flex';
        globalErrorText.innerHTML = errorMessageHTML; // Affichage des erreurs uniquement
        return false;
    } else {
        globalError.style.display = 'none';
        return true;
    }
}

window.addEventListener('DOMContentLoaded', function () {
    globalError.style.display = 'none';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateFields()) {
        form.submit();  // Soumettre le formulaire si les validations passent
    }
});

lastname.addEventListener('input', function () {
    validateFields();
});

name.addEventListener('input', function () {
    validateFields();
});

email.addEventListener('input', function () {
    validateFields();
});

lastname.addEventListener('input', function () {
    validateFields();
    nameDisplay.textContent = lastname.value || '[NOM]';
});