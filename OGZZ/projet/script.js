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
  tables = document.querySelectorAll("table");
  title = document.getElementById("title-section");

  tables.forEach((element) => {
    element.id != idTable
      ? (element.style = "display: None;")
      : (element.style = "display: table;");
  });
  title.innerText = idTable + " inventory";
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
