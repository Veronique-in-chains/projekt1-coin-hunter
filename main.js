// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//náhodné umístění mince
let mince = document.getElementById("mince");

function umisteniMince() {
  let width = window.innerHeight;
  let height = window.innerWidth;
  let minceTop = Math.random() * width - 30;
  let minceLeft = Math.random() * height - 30;
  mince.style.left = minceLeft + "px";
  mince.style.top = minceTop + "px";
}
umisteniMince();

//pohyb panáčka
let panacek = document.getElementById("panacek");

function stiskKlavesy(event) {
  let currentTop = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
  let currentLeft = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
  let step = 5;
  switch(event.key) {
    case "ArrowDown": 
      panacek.style.top = (currentTop + step) + "px";
      panacek.src = "obrazky/panacek.png";
      break;
    case "ArrowRight":
      panacek.style.left = (currentLeft + step) + "px";
      panacek.src = "obrazky/panacek-vpravo.png";
      break;
    case "ArrowLeft":
      panacek.style.left = (currentLeft - step) + "px";
      panacek.src = "obrazky/panacek-vlevo.png";
      break;
    case "ArrowUp":
      panacek.style.top = (currentTop - step) + "px";
      panacek.src = "obrazky/panacek-nahoru.png";
      break;
  }


// zastavení panáčka na konci okna
  if (currentTop < 0) {
    panacek.style.top = 0;
  }
  if (currentLeft < 0) {
    panacek.style.left = 0;
  }
  if (currentTop > window.innerHeight - 100) {
    panacek.style.top = (window.innerHeight - 100) + "px";
  }
  if (currentLeft > window.innerWidth - 100) {
    panacek.style.left = (window.innerWidth - 100) + "px";
  }


  // sebrání mince
  let minceY = parseInt(window.getComputedStyle(mince).getPropertyValue("top"));
  let minceX = parseInt(window.getComputedStyle(mince).getPropertyValue("left"));
  let panacekSirka = parseInt(window.getComputedStyle(panacek).getPropertyValue("width"));
  let panacekVyska = parseInt(window.getComputedStyle(panacek).getPropertyValue("height"));
  let minceSirka = parseInt(window.getComputedStyle(mince).getPropertyValue("width"));
  let minceVyska = parseInt(window.getComputedStyle(mince).getPropertyValue("height"));

  if (!(currentLeft + panacekSirka < minceX || minceX + minceSirka < currentLeft || currentTop + panacekVyska < minceY || minceY + minceVyska < currentTop)) {
      let score = 0;
      score++;
      document.getElementById("score").innerHTML = score;
      console.log(score);
      umisteniMince();
  }
}

//spuštění hudby
function spustHudbu() {
  let audio = document.getElementById("hudba");
  audio.play();
}
window.addEventListener(keydown, spustHudbu())