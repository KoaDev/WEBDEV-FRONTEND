const boutonsPopup = document.querySelectorAll('.afficheDetails');
const popup = document.getElementById('popupid');

// Ajout d'un gestionnaire d'événements à chaque bouton
boutonsPopup.forEach(function(bouton) {
    bouton.addEventListener('click', function(event) {
        // Récupération de la position de la souris
        if(popup.style.display==='none'){
            const buttonRect = bouton.getBoundingClientRect();
        const buttonTop = buttonRect.top + window.scrollY;
        const buttonLeft = buttonRect.left + window.scrollX;

        // Positionnement de la pop-up en dessous du bouton
        const popupTop = buttonTop + bouton.offsetHeight;
        const popupLeft = buttonLeft - 100;

        // Affichage de la pop-up à la position calculée
        popup.style.top = popupTop + 'px';
        popup.style.left = popupLeft + 'px';
        popup.style.display = 'block';
        }
        else{
            popup.style.display='none';
        }
        
    });
});

document.getElementById('afficheFiltre').addEventListener('click', function() {
    var contenu = document.getElementById('contenu');
    var filtrelabel=document.getElementById('afficheFiltre');
    var img=document.getElementById('image');
    var search=document.getElementById('searchIcon');
    if (contenu.style.display === 'none') {
        contenu.style.display = 'block';
        filtrelabel.style.color="#F16E00";
        popup.style.display='none';
        img.src="../../TMAX/projet/svg/ico_config_hover.svg";
        search.style.display='block';
    } else {
        contenu.style.display = 'none';
        filtrelabel.style.color="black";
        popup.style.display='none';
        img.src = "../../TMAX/projet/svg/ico_config.svg";
        search.style.display='none';
    }
});

document.getElementById('exit').addEventListener('click',function(){
    var contenu=document.getElementById('contenu');
    var filtrelabel=document.getElementById('afficheFiltre');
    var img=document.getElementById('image');
    var search=document.getElementById('searchIcon');
    contenu.style.display='none';
    filtrelabel.style.color="black";
    img.src = "../../TMAX/projet/svg/ico_config.svg";
    search.style.display='none';
});


function mettreAJourCompteurSection1() {
    const checkboxes = document.querySelectorAll('.checkbox-section1');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    document.getElementById('compteur-section1').textContent = checkedCount;
}
document.querySelectorAll('.checkbox-section1').forEach(checkbox => {
    checkbox.addEventListener('change', mettreAJourCompteurSection1);
});
document.addEventListener('DOMContentLoaded', mettreAJourCompteurSection1);


function mettreAJourCompteurSection2() {
    const checkboxes = document.querySelectorAll('.checkbox-section2');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    document.getElementById('compteur-section2').textContent = checkedCount;
}
document.querySelectorAll('.checkbox-section2').forEach(checkbox => {
    checkbox.addEventListener('change', mettreAJourCompteurSection2);
});
document.addEventListener('DOMContentLoaded', mettreAJourCompteurSection2);

function mettreAJourCompteurSection3() {
    const checkboxes = document.querySelectorAll('.checkbox-section3');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    document.getElementById('compteur-section3').textContent = checkedCount;
}
document.querySelectorAll('.checkbox-section3').forEach(checkbox => {
    checkbox.addEventListener('change', mettreAJourCompteurSection3);
});
document.addEventListener('DOMContentLoaded', mettreAJourCompteurSection3);

function mettreAJourCompteurTotal() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    document.getElementById('compteur').textContent = checkedCount;
}

function reinitialiserCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    mettreAJourCompteurSection1();
    mettreAJourCompteurSection2();
    mettreAJourCompteurSection3();
    mettreAJourCompteurTotal()
}

document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', mettreAJourCompteurTotal);
});

document.getElementById('effacerBtn').addEventListener('click', reinitialiserCheckboxes);

document.addEventListener('DOMContentLoaded', mettreAJourCompteurTotal);
