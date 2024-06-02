function toggleDetails(event, id) {
    event.preventDefault();
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        event.target.innerHTML = 'Close <i class="fas fa-chevron-up"></i>';
    } else {
        details.style.display = "none";
        event.target.innerHTML = 'View more <i class="fas fa-chevron-down"></i>';
    }
}