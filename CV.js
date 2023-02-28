function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "40px";
  x.style.width = "40px";
}

function mouseOver() {
  document.getElementById("zoom").style.scale = (1.15);
}

function mouseOut() {
  document.getElementById("zoom").style.scale = (1);
}