var campoDom = document.querySelector("#campo");

for (var i = 0; i < 100; i++) {
  var div = document.createElement("DIV")
  div.addEventListener("click", clickQuadrato)
  campoDom.appendChild(div);
}
