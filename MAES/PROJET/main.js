function toggleVisibility(section) {
    const contentDiv = document.getElementById(`${section}Content`);
    const viewButton = document.querySelector(`#${section}Content`).previousElementSibling; // Sélectionne le bouton lié à cette section

    // Basculer la visibilité du contenu et le texte du bouton
    if (contentDiv.style.display === "none" || contentDiv.style.display === "") {
        contentDiv.style.display = "block";
        viewButton.textContent = "Close"; // Change le texte en "Close"
    } else {
        contentDiv.style.display = "none";
        viewButton.textContent = "View More"; // Change le texte en "View More"
    }
}

function loadContent(section) {
    const contentDiv = document.getElementById(`${section}Content`);
    const message = document.getElementById(`${section}Message`);
    const table = document.getElementById(`${section}Table`);
    const loadButton = contentDiv.querySelector('button'); // Sélectionne le bouton "Charger"

    if (table) {
        table.style.display = "block"; // Affiche le tableau
    }

    // Cache le message et le bouton Charger
    message.style.display = "none";
    loadButton.style.display = "none";
}
