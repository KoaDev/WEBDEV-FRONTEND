document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscription-form');
    const submitBtn = document.getElementById('enregistrer-btn');

    const inputs = form.querySelectorAll('input, textarea');

    const errorSubmit = document.getElementById('warning-submit');

    function validateForm() {
        let isValid = true;

        inputs.forEach(function(input) {
            if (input.id === 'prenom') {
                if (input.value.trim() === '') {
                    document.getElementById('prenom-warning').style.display = 'block';
                    document.getElementById('prenom-warning-submit').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('prenom-warning').style.display = 'none';
                    document.getElementById('prenom-warning-submit').style.display = 'none';
                }
            }
            if (input.id === 'nom') {
                if (input.value.trim() === '') {
                    document.getElementById('nom-warning').style.display = 'block';
                    document.getElementById('nom-warning-submit').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('nom-warning').style.display = 'none';
                    document.getElementById('nom-warning-submit').style.display = 'none';
                }
            }
            if (input.id === 'email') {
                if (input.value.trim() === '') {
                    document.getElementById('email-warning').style.display = 'block';
                    document.getElementById('email-warning-submit').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('email-warning').style.display = 'none';
                    document.getElementById('email-warning-submit').style.display = 'none';
                }
            }
        });

        return isValid;
    }

    submitBtn.addEventListener('click', function() {
        const isValidForm = validateForm();

        if (!isValidForm) {
            errorSubmit.style.display = 'flex';
        } else {
            errorSubmit.style.display = 'none';
            form.submit();
        }
    });
});