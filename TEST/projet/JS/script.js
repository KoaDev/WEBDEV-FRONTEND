const Network = {
    "Vendor": "VMWARE",
    "Project": "Name_Project",
    "Network": "Network Name",
    "Service Management": "Premium",
    "Provisioning state": "Active",
    "Operational status": "Up",
    "Location Gateway": "London/Amsterdam",
    "Gateway Version": "5.0",
    "Orchestrator": "Go to VM-WARE Orchestrator",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, ante a malesuada eleifend, ligula urna vestibulum purus, nec mattis nunc est eget lacus. Donec congue arcu velit, ac fermentum eros finibus facilisis. Curabitur nec est eleifend, laoreet mi sit amet, hendrerit enim. Quisque consequat aliquet aliquet. Nullam pretium suscipit risus, id porttitor mi dictum quis. Quisque id porttitor leo. Praesent sit amet lacus eu tellus vulputate feugiat. Etiam at pharetra massa. Ut augue lectus, molestie vitae ante in, mollis feugiat ligula. Fusce hendrerit dolor id pretium feugiat.",
  };
  
  //bon la fonction est longue mais j'ai pas trouvé mieux, au moins ça fait en fonction de l'objet juste au dessus
  //vous pouvez changer toutes les valeurs, l'html se met à jour
  var Network_info = document.getElementById("card-grid");
  var Network_description = document.getElementById("description");
  function display_NetworkInfo() {
    //un peu comme en python enfaite
    for (let [info, value] of Object.entries(Network)) {
      /*un hgroup est composé d'un titre et d'un texte, ils ont des classes respectivent*/
      let group = document.createElement("hgroup");
  
      let titre = document.createElement("p");
      titre.setAttribute("class", "group-title");
      titre.innerText = info;
  
      let texte = document.createElement("p");
      if (info != "Description") texte.setAttribute("class", "group-text");
      texte.innerText = value;
      /*----------------------------------------------*/
  
      /*----------------------------POUR LES CAS PARTICULIERS--------------------*/
      if (info === "Provisioning state") {
        group.id = "state";
        let div = document.createElement("div");
        div.appendChild(titre);
        div.appendChild(texte);
        group.appendChild(div);
    } else if (info === "Operational status") {
        group.id = "status";
        let status = document.createElement("div");
        status.className = "flex-row";
        let svg = document.createElement("img");
        svg.className = "state_svg";
        svg.src = "../../../TMAX/projet/svg/ico_success.svg";
        status.appendChild(svg);
        status.appendChild(texte);
        let div = document.createElement("div");
        div.appendChild(titre);
        div.appendChild(status);
        group.appendChild(div);
    } else if (info === "Orchestrator") {
        group.id = "orchastrator";
        let orch = document.createElement("div");
        orch.className = "flex-row";
        let svg2 = document.createElement("img");
        svg2.className = "orch";
        svg2.src = "../../../TMAX/projet/svg/ico_href.svg";
        orch.appendChild(svg2);
        orch.appendChild(texte);
        let div = document.createElement("div");
        div.appendChild(titre);
        div.appendChild(orch);
        group.appendChild(div);
    } else {
        group.appendChild(titre);
        group.appendChild(texte);
    }
    
    /*-----------------------------------------------------------------------*/
    
    if (info === "Description") {
        Network_description.appendChild(titre);
        Network_description.appendChild(texte);
    } else {
        Network_info.appendChild(group);
    }
  }
  }
  
  window.onload = display_NetworkInfo();
  
  /*------------------------------- Pop-UP ----------------------------------------*/
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
    if (contenu.style.display === 'none') {
        contenu.style.display = 'block';
        filtrelabel.style.color="#000000";
    } else {
        contenu.style.display = 'none';
        filtrelabel.style.color="black";
    }
});

document.getElementById('exit').addEventListener('click',function(){
    var contenu=document.getElementById('contenu');
    contenu.style.display='none';
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

