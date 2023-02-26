let color1 = "#22c1c3";
let color2 = "#fdbb2d";
color1 = document.querySelector(".c1").value;
color2 = document.querySelector(".c2").value;
let query = "linear-gradient(" + color1 + "," + color2 + ")";
document.querySelector("p").textContent ="background: " +  query;
document.addEventListener("input", updateFirst);
function updateFirst(event) {
  const b = document.querySelector("body");
  if (b) {
    color1 = document.querySelector(".c1").value;
    color2 = document.querySelector(".c2").value;
    let query = "linear-gradient(" + color1 + "," + color2 + ")";
    b.style.background = query;
    document.querySelector(".code").textContent = "background: " + query;
  }
}
