const svgIcons = document.querySelectorAll('.svg-icon');
const goldenBar = document.getElementById('golden-bar');
const grayArea = document.getElementById('gray-area');
const grayArea2 = document.getElementById('gray-area-2');

svgIcons.forEach(svgIcon => {
  if (svgIcon.id === 'overview-id') { // Check if it's the overview icon
    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      // Calculate the offset left position of the clicked SVG icon
      const offsetLeft = svgIcon.offsetLeft;

      // Set the left position of the golden bar to match the clicked SVG icon
      goldenBar.style.left = `${offsetLeft}px`;

      // Add active class to the corresponding section
      const sectionId = this.id.replace('id', ''); // Get section ID
      const sectionElement = document.getElementById(sectionId + '-section');

      // Display the gray area
      grayArea.style.opacity = 1;
      // Hide the gray area 2
      grayArea2.style.opacity = 0;

    });
  }else if (svgIcon.id === 'monitor-id') {
    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      const offsetLeft = svgIcon.offsetLeft;

      goldenBar.style.left = `${offsetLeft}px`;
      const sectionId = this.id.replace('id', ''); // Get section ID
      const sectionElement = document.getElementById(sectionId + '-section');
      grayArea2.style.opacity = 1;
      grayArea.style.opacity = 0;

    });
  } else {
    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      const offsetLeft = svgIcon.offsetLeft;

      goldenBar.style.left = `${offsetLeft}px`;

      const sectionId = this.id.replace('id', ''); // Get section ID
      const sectionElement = document.getElementById(sectionId + '-section');

      grayArea.style.opacity = 0;
      grayArea2.style.opacity = 0;

    });
  }
});

function selectOverview() {
  const overviewIcon = document.getElementById('overview-id');
  overviewIcon.dispatchEvent(new Event('click'));
}

window.addEventListener('load', selectOverview);
