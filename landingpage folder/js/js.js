/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')


function toggleMenu() {
    window.location.href = "error404.html";
}
  

window.addEventListener('load', function() {
  var riomaggioreVideo = document.getElementById('riomaggioreVideo');
  riomaggioreVideo.style.display = 'block'; // Display the video element
  riomaggioreVideo.play(); // Start playing the video
});

window.addEventListener('load', function() {
    var manarolaVideo = document.getElementById('manarolaVideo');
    manarolaVideo.style.display = 'block'; 
    manarolaVideo.play(); 
  });

  window.addEventListener('load', function() {
    var cornigliaVideo = document.getElementById('cornigliaVideo');
    cornigliaVideo.style.display = 'block'; 
    cornigliaVideo.play(); 
  });

  window.addEventListener('load', function() {
    var vernazzaVideo = document.getElementById('vernazzaVideo');
    vernazzaVideo.style.display = 'block'; 
    vernazzaVideo.play(); 
  });

  window.addEventListener('load', function() {
    var monterossoVideo = document.getElementById('monterossoVideo');
    monterossoVideo.style.display = 'block'; 
    monterossoVideo.play(); 
  });

  document.addEventListener('DOMContentLoaded', function() {
    const videoBoxes = document.querySelectorAll('.video-box');
  
videoBoxes.forEach(box => {
      box.addEventListener('click', function() {
        const destination = this.getAttribute('data-destination');
        window.location.href = destination;
      });
    });
  });
  