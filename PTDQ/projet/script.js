//listener pour le style des onglets sélectionnés (ceux souligné en jaune)
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() { //pour chaque tab, on ajoute un listener
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active'); //on ajoute la classe active au tab si il est selectionner
        });
    });
});

//listener pour le bouton qui affiche les filtres
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');
    const filterDropdown = document.querySelector('.filter-dropdown');

    filterButton.addEventListener('click', function() {
        filterDropdown.classList.toggle('show'); //ajoute ou enlève la classe show pour afficher ou cacher le menu des filtres
    });

    //enleve le menu des filtres quand on clique à coté
    document.addEventListener('click', function(event) {
        if (!filterButton.contains(event.target) && !filterDropdown.contains(event.target)) {
            filterDropdown.classList.remove('show');
        }
    });
});

//Listener pour afficher le tableau correspondant a chaque onglet
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tables = document.querySelectorAll('.table-container');

    function switchTab(index) {
        tables.forEach(table => { //de base, on cache tous les tableaux
            table.style.display = 'none';
        });

        tables[index].style.display = 'block'; //on affiche le tableau correspondant a l'onglet selectionner

        tabs.forEach(t => t.classList.remove('active')); //on met a jour la classe active pour l'onglet selectionner
        tabs[index].classList.add('active');
    }

    switchTab(0); //par défaut on affiche le tableau des locations (premier tableau dans la partie html)

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            switchTab(index); //quand on clique sur un onglet, on affiche le tableau correspondant
        });
    });
});

//Listener pour le filtre selon les statuts
document.addEventListener('DOMContentLoaded', function() {
    const statusInputs = document.querySelectorAll('input[name="statusFilter"]');
    const tables = document.querySelectorAll('.table-container');

    function filterRowsByStatus(status) {
        tables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr'); //on regarde les ligne de chaque tableau
            rows.forEach(row => { //pour chaque ligne, on regarde si le statut correspond au statut selectionner
                const rowStatus = row.querySelector('.status').textContent.trim();
                if (status === 'All' || rowStatus === status) {
                    row.style.display = 'table-row'; //si c'est le cas on affiche la ligne
                } else {
                    row.style.display = 'none'; //sinon non
                }
            });
        });
    }

    filterRowsByStatus('All'); //par défaut on affiche toutes les lignes (All)

    statusInputs.forEach(input => {
        input.addEventListener('change', function() { //on ecoute les changements dans les inputs de statut
            const selectedStatus = this.value;
            filterRowsByStatus(selectedStatus);
        });
    });
});