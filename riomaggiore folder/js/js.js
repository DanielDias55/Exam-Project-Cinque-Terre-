/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

function closePage() {
    window.location.href = "landingpage.html";
}

const buttonIds = ['button', 'button2', 'button3', 'button4', 'button5', 'button6'];
const circleIds = ['circle', 'circle2', 'circle3', 'circle4', 'circle5', 'circle6'];


buttonIds.forEach(function(buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', function() {
    window.location.href = 'error404.html'; 
  });
});

circleIds.forEach(function(circleId) {
    const circle = document.getElementById(circleId);
    circle.addEventListener('click', function() {
      window.location.href = 'error404.html';
    });
  });