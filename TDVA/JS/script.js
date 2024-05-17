const svgIcons = document.querySelectorAll('.svg-icon');
const goldenBar = document.getElementById('golden-bar');
const grayArea = document.getElementById('gray-area');

// Select the first SVG icon
const firstIcon = svgIcons[0];

// Set the first icon as active by default (optional)
firstIcon.classList.add('active');

svgIcons.forEach(svgIcon => {
    svgIcon.addEventListener('click', function () {
        goldenBar.style.display = 'block';

        // Calculate the offset left position of the clicked SVG icon
        const offsetLeft = svgIcon.offsetLeft;

        // Set the left position of the golden bar to match the clicked SVG icon
        goldenBar.style.left = `${offsetLeft}px`;

        // Add active class to the corresponding section
        const sectionId = this.id.replace('id', ''); // Get section ID
        const sectionElement = document.getElementById(sectionId + '-section');
        /*if (sectionElement) {
          sectionElement.classList.add('active');
          grayArea.classList.add('active'); // Activate gray area
        }*/

    });
});