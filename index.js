var i = 0;
var txt = 'Open your eyes to'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

$(".top-container").mouseenter(function(){
  $(".top-container-content").fadeOut("slow","swing").fadeIn("slow","swing");
});

