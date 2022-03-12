// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
let panacek, panacekSirka, panacekVyska, currentTop, currentLeft;
let mince, minceLeft, minceTop, minceY, minceX, minceSirka, minceVyska;
let step, score;


//náhodné umístění mince
mince = document.getElementById("mince");
function umisteniMince() {
  minceTop = Math.random() * window.innerHeight - 35;
  minceLeft = Math.random() * window.innerWidth - 35;
  mince.style.left = minceLeft + "px";
  mince.style.top = minceTop + "px";
  mince.src = "obrazky/mince-" + Math.ceil(Math.random() * 3) + ".png";
}
umisteniMince();


panacek = document.getElementById("panacek");
function umisteniPanacka() {
  panacek.style.top = (Math.ceil(Math.random() * window.innerHeight)) + "px";
  panacek.style.left = (Math.ceil(Math.random() * window.innerWidth)) + "px";
}
umisteniPanacka();

//spuštění hudby
function spustHudbu() {
  let audio = document.getElementById("hudba");
  audio.play();
}

//pohyb panáčka


score = 0;


alert("Vítej ve hře! Pomoz panáčkovi posbírat pět mincí! Ovládat jej můžeš šipkami na klávesnici.")


function stiskKlavesy(event) {
  //spustHudbu();
  currentTop = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
  currentLeft = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
  step = 10;
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
  minceY = parseInt(window.getComputedStyle(mince).getPropertyValue("top"));
  minceX = parseInt(window.getComputedStyle(mince).getPropertyValue("left"));
  panacekSirka = panacek.width;
  panacekVyska = panacek.height;
  minceSirka = mince.width;
  minceVyska = mince.height;
  
  if (!(currentLeft + panacekSirka < minceX || minceX + minceSirka < currentLeft || currentTop + panacekVyska < minceY || minceY + minceVyska < currentTop)) {
      let zvukmince = document.getElementById("zvukmince");
      zvukmince.play();
      score++;
      document.getElementById("score").innerHTML = score;
      console.log(score);
      if (score === 5) {
        let zvukfanfara = document.getElementById("zvukfanfara");
        zvukfanfara.play();
        alert("Sebral jsi pět mincí. Vyhrál jsi! Můžeš ale sbírat dál...");
      }
      umisteniMince();
  }
}

