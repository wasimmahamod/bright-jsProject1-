const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");
const img = document.getElementById("img");

onBtn.addEventListener("click", function () {
  img.src = "images/pic_bulbon.gif";
});

offBtn.addEventListener("click", function () {
  img.src = "images/pic_bulboff.gif";
});
