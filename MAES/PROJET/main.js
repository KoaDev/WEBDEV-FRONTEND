const svgIcon = document.querySelector('.svg-icon');

document.addEventListener('DOMContentLoaded', function () {
    const cockpitButton = document.getElementById('cockpit-button');
    const containerOverview = document.getElementById('containerOverview');
    const cockpit = document.getElementById('cockpit');
    const location = document.getElementById('location');
    const closeButtons = document.querySelectorAll('.close-section');

    closeButtons.forEach(closeButton => {
        closeButton.style.display = "none";
    });

    cockpitButton.addEventListener('click', function () {
        containerOverview.classList.add('active');
        location.classList.add('active');
        cockpit.classList.add('active');
        cockpitButton.style.display = "none";
        closeButtons.forEach(closeButton => {
            closeButton.style.display = "flex";
        });

        goldenBar.style.left = `${svgIcon.offsetLeft}px`;
        goldenBar.style.top = `${svgIcon.offsetTop + svgIcon.offsetHeight}px`;
    });

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', function () {
            containerOverview.classList.remove('active');
            location.classList.remove('active');
            cockpit.classList.remove('active');
            cockpitButton.style.display = "block";
            closeButton.style.display = "none";

            goldenBar.style.left = `${svgIcon.offsetLeft}px`;
            goldenBar.style.top = `${svgIcon.offsetTop + svgIcon.offsetHeight}px`;
        })
    });
});

function toggleDetails(event, id) {
    event.preventDefault();
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        if(id === 'delivery-details'){
            document.getElementById('arrowDelivery').setAttribute('src', '../../TMAX/projet/svg/ico_arrow_up_hover.svg');
        }
        else{
            document.getElementById('arrowAdmin').setAttribute('src', '../../TMAX/projet/svg/ico_arrow_up_hover.svg');
        }
        goldenBar.style.left = `${svgIcon.offsetLeft}px`;
        goldenBar.style.top = `${svgIcon.offsetTop + svgIcon.offsetHeight}px`;
    } else {
        details.style.display = "none";
        if(id === 'delivery-details'){
            document.getElementById('arrowDelivery').setAttribute('src', '../../TMAX/projet/svg/ico_arrow_down_hover.svg');
        }
        else{
            document.getElementById('arrowAdmin').setAttribute('src', '../../TMAX/projet/svg/ico_arrow_down_hover.svg');
        }
        goldenBar.style.left = `${svgIcon.offsetLeft}px`;
        goldenBar.style.top = `${svgIcon.offsetTop + svgIcon.offsetHeight}px`;
    }
}
