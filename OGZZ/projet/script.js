const Network = {
  Vendor: "VMWARE",
  Project: "Name_Project",
  "EMS TYPE": "Dedicated",
  "EMS Location": "EMEA",
  "Provising state": "Active",
  "Operational status": "Up",
  "Build Package": "Prenium",
  "Run Package": "Prenium",
  "Default License Edition": "Entreprise",
  "Vendor Support Level": "Production",
  "Version EMS": "5.2",
  Description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi dolorem quos qui eos! Dicta eligendi minus voluptate, et laboriosam fugit natus veniam officia inventore id autem harum animi in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit quisquam possimus non rerum ducimus, totam praesentium quas obcaecati, esse ratione atque impedit animi, consectetur architecto saepe quod beatae mollitia.",
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
    if (info == "Provising state") {
      group.setAttribute("id", "state");
      let div = document.createElement("div");
      div.appendChild(titre);
      div.appendChild(texte);
      group.appendChild(div);
    } else if (info == "Operational status") {
      group.setAttribute("id", "status");

      let status = document.createElement("div");
      status.setAttribute("class", "flex-row");

      let svg = document.createElement("img");
      svg.setAttribute("class", "state_svg");
      if (value == "Up") {
        svg.src = "../../TMAX/projet/svg/ico_success.svg";
      } else if (value == "Degraded") {
        svg.src = "../../TMAX/projet/svg/ico_warning.svg";
      } else if (value == "Down") {
        svg.src = "../../TMAX/projet/svg/ico_danger.svg";
      }

      status.appendChild(svg);
      status.appendChild(texte);
      let div = document.createElement("div");
      div.appendChild(titre);
      div.appendChild(status);
      group.appendChild(div);
    } else {
      group.appendChild(titre);
      group.appendChild(texte);
    }
    /*-----------------------------------------------------------------------*/

    if (info == "Description") {
      Network_description.appendChild(titre);
      Network_description.appendChild(texte);
    } else Network_info.appendChild(group);
  }
}

/* Affichage des tables selons les onglets cliqués */
function displayTable(idTable) {
  let tables = document.querySelectorAll("table");
  let title = document.getElementById("title-section");
  let pagination = document.getElementById("pagination");

  tables.forEach((element) => {
    element.id != idTable
      ? (element.style = "display: None;")
      : (element.style = "display: table;");
  });
  title.innerText = idTable + " inventory";
  pagination.id.value = String("pagination" + idTable);


  paginationFunction(idTable, pagination.id);
}

/*affiche n colonne et n boutons, on accède aux autre colonne en cliquant sur les boutons*/
function paginationFunction(idTable, buttonBoxId){
  console.log(idTable);
  let rows = document.getElementById(idTable).getElementsByTagName("tbody")[0].children;
  let buttonBox = document.getElementById(buttonBoxId);
  buttonBox.innerHTML = '';
  var currentIndex = 0;

  /*creer n boutons en fonction du nombre de colonnes et du nombre de colonnes que l'on veut afficher*/
  let nbButtons = Math.ceil(rows.length/4) //pour ne pas avoir 7.5 mais 8 boutons
  let previous = document.createElement("span");
  previous.innerText = "<";
  buttonBox.appendChild(previous);

  for (let index = currentIndex; index < nbButtons; index++) {
    let button = document.createElement("button");
    button.innerText = index + 1;
    button.onclick = function name() {
      console.log(button) //remplacer par la fonction qu'on veut
      currentIndex = 4*Number(button.innerText) - 4;
      displayRows(rows, currentIndex);
    } 
    buttonBox.appendChild(button);
  }
  let next = document.createElement("span");
  next.innerText = ">";
  buttonBox.appendChild(next);
  /*--------------------------------------------------------------------------------------------------*/

  displayRows(rows, currentIndex) 
  buttonBox.getElementsByTagName("button")[0].focus();
  //réali qu'une fois 
  //nécéssaire sinon ca affiche toutes les colones, et avoir le boutons 1 en focus
}

//affiche que les n colonnes en fonction du bouton appuyé
function displayRows(rows, currentIndex){
  for (let index = 0; index < rows.length; index++) {
    if( index < currentIndex  || index > currentIndex + 4 -1 ){
      rows[index].style.display = "none";
    }
    else{
      rows[index].style.display = "";
    }
    
  }
}





/*                                                                       *
                                     TRI                
  Il faudra voir pour trier les status d'une autre manière que A-Z & Z-A
*                                                                        */
var sortOrder = {};

function sortTable(columnIndex, idTable) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    direction,
    switchCount = 0;
  table = document.getElementById(idTable);
  switching = true;
  direction = sortOrder[columnIndex] === "asc" ? "desc" : "asc";

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[columnIndex];
      y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (direction == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount == 0 && direction == "asc") {
        direction = "desc";
        switching = true;
      }
    }
  }
  sortOrder[columnIndex] = direction;
}


window.onload = display_NetworkInfo();
