document.addEventListener('DOMContentLoaded', function() {
    var lastnameInput = document.getElementById('lastname');
    var civilityInputs = document.getElementsByName('civility');
    var userOutputDiv = document.getElementById('userOutput');

    function updateUserOutput() {
      var selectedCivility = [...civilityInputs].find(input => input.checked)?.value || '';
      var lastname = lastnameInput.value;
      userOutputDiv.textContent = selectedCivility + ' ' + lastname;
    }

    lastnameInput.addEventListener('input', updateUserOutput);

    civilityInputs.forEach(function(input) {
      input.addEventListener('change', updateUserOutput);
    });
});