// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


function stiskKlavesy(event) {
  let sipka = event.key;
  let panacek = document.getElementById("panacek");
  let currentTop = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
  let currentLeft = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
  let step = 10;
  if (sipka === "ArrowDown") {
    panacek.style.top = (currentTop + step) + "px";
    panacek.src = "obrazky/panacek.png";
  } else if (sipka === "ArrowRight") {
    panacek.style.left = (currentLeft + step) + "px";
    panacek.src = "obrazky/panacek-vpravo.png";
  } else if (sipka === "ArrowLeft") {
    panacek.style.left = (currentLeft - step) + "px";
    panacek.src = "obrazky/panacek-vlevo.png";
  } else if (sipka === "ArrowUp") {
    panacek.style.top = (currentTop - step) + "px";
    panacek.src = "obrazky/panacek-nahoru.png";

  }
}