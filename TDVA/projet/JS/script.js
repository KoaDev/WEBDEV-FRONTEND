const svgIcons = document.querySelectorAll('.svg-icon');
const goldenBar = document.getElementById('golden-bar');
const grayArea = document.getElementById('gray-area');
const grayArea2 = document.getElementById('gray-area-2');


svgIcons.forEach(svgIcon => {
  if (svgIcon.id === 'overview-id') { // Check if it's the overview icon

    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      goldenBar.style.left = `${svgIcon.offsetLeft}px`;
      goldenBar.style.top = `${svgIcon.offsetTop + svgIcon.offsetHeight}px`;

      // Display the gray area
      grayArea.style.display = "block";
      // Hide the gray area 2
      grayArea2.style.display = "none";
      grayArea.style.pointerEvents = 'auto';
      grayArea2.style.pointerEvents = 'none';

    });
  } else if (svgIcon.id === 'monitor-id') {
    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      goldenBar.style.left = `${svgIcon.offsetLeft}px`;
      goldenBar.style.top = `${svgIcon.offsetTop + svgIcon.offsetHeight}px`;

      grayArea2.style.display = "block";
      grayArea.style.display = "none";
      grayArea.style.pointerEvents = 'none';
      grayArea2.style.pointerEvents = 'auto';

    });
  } else {
    svgIcon.addEventListener('click', function () {
      goldenBar.style.display = 'block';

      goldenBar.style.left = `${svgIcon.offsetLeft}px`;
      goldenBar.style.top = `${svgIcon.offsetTop + svgIcon.offsetHeight}px`;

      grayArea.style.display = "none";
      grayArea2.style.display = "none";

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

function hideSection() {

  var section = document.getElementById("gray-area");
  var section2 = document.getElementById("containerOverview");
  var section3 = document.getElementById("golden-bar");
  var section4 = document.getElementById("cockpit-title-id");



  if (section) {
    section.style.display = 'none';

    section2.style.display = 'none';
    section3.style.display = 'none';
    section4.style.display = 'none';
    grayArea.style.pointerEvents = 'none';
    grayArea2.style.pointerEvents = 'none';
  }
}

window.addEventListener('load', selectOverview);
