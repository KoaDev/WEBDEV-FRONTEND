const svgIcons = document.querySelectorAll('.svg-icon');
const goldenBar = document.getElementById('golden-bar');
const grayArea = document.getElementById('gray-area');
const grayArea2 = document.getElementById('gray-area-2');

svgIcons.forEach(svgIcon => {
  if (svgIcon.id === 'overview-id') { // Check if it's the overview icon
    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      const offsetLeft = svgIcon.offsetLeft;
      const offsetTop = svgIcon.offsetTop;
      const iconHeight = svgIcon.offsetHeight; // Obtenir la hauteur de l'icône

      goldenBar.style.left = `${offsetLeft}px`;
      goldenBar.style.top = `${offsetTop + iconHeight}px`;

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
      const offsetTop = svgIcon.offsetTop;
      const iconHeight = svgIcon.offsetHeight; // Obtenir la hauteur de l'icône

      goldenBar.style.left = `${offsetLeft}px`;
      goldenBar.style.top = `${offsetTop + iconHeight}px`;

      const sectionId = this.id.replace('id', ''); // Get section ID
      const sectionElement = document.getElementById(sectionId + '-section');

      grayArea2.style.opacity = 1;
      grayArea.style.opacity = 0;
     

    });
  } else {
    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      const offsetLeft = svgIcon.offsetLeft;
      const offsetTop = svgIcon.offsetTop;
      const iconHeight = svgIcon.offsetHeight; // Obtenir la hauteur de l'icône

      goldenBar.style.left = `${offsetLeft}px`;
      goldenBar.style.top = `${offsetTop + iconHeight}px`;

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

function hideSection2() {
  var section = document.getElementById("gray-area-2");
  var section2 = document.getElementById("containerOverview");
  var section3 = document.getElementById("golden-bar");
  var section4 = document.getElementById("cockpit-title-id");
 
  
  
  if (section) {
      section.style.display = 'none';
      section2.style.display = 'none';
      section3.style.display = 'none';
      section4.style.display = 'none';
  }
}





window.addEventListener('load', selectOverview);
