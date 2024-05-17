var name = "";
var firstName = "";
var email = "";

let needed = document.querySelectorAll('.needed');
let hiddenIfEmpty = document.querySelectorAll('.hiddenIfEmpty');



function checkInputs(){
    let check = 0;
    let warnings = [];
    let warningBox = document.getElementById("warningBox")
    warningBox.innerHTML = '';


    //check si tous les inputs sont remplis
    for(let i=0; i< needed.length; i++){
        if(needed[i].value == ""){
            check = 1;
            warnings[i] = "le champ '" + needed[i].name + "' est obligatoire"
        }
    }

    //si non, messages d'erreur, si oui pas de messages
    if(check == 1){
        hiddenIfEmpty.forEach(item => {
            item.style.display = 'flex';
        })
        warningBox.style.display = 'flex';

        warnings.forEach(string => {
            let warning = document.createElement("p");
            warning.innerText = string;
            warningBox.appendChild(warning);
        })
    }
    else if(check == 0){
        hiddenIfEmpty.forEach(item => {
            item.style.display = 'none';

        })
        warningBox.style.display = 'none';
    }


}