document.getElementById('afficheFiltre').addEventListener('click', function() {
    var contenu = document.getElementById('contenu');
    var filtrelabel=document.getElementById('afficheFiltre');
    var img=document.getElementById('image');
    if (contenu.style.display === 'none') {
        contenu.style.display = 'block';
        filtrelabel.style.color="#F16E00";
        img.src="../../TMAX/projet/svg/ico_config.svg";
    } else {
        contenu.style.display = 'none';
    }
});

document.getElementById('exit').addEventListener('click',function(){
    var contenu=document.getElementById('contenu');
    contenu.style.display='none';
})


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
