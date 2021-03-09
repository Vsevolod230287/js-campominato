var bombsArray = [];
var div;
var campoDom = document.querySelector("#campo");
var maxNumber = 100;

bombsArray = createBombs(bombsArray, maxNumber);
console.log(bombsArray);


for (var i = 1; i <= 100; i++) {
  div = document.createElement("DIV")
  campoDom.appendChild(div);
  if (bombsArray.includes(i)) {
    div.addEventListener("click", clickBombs(div))
  } else {
    div.addEventListener("click", clickQuadrato(div));
    }

}


function clickQuadrato(element) {
  element.innerHtml = i;
}

function clickBombs(element) {
  element.innerHTML = "Booom";
}



function createBombs(array, max) {
  while (array.length < 16) {
    var numero = randomNumberInRange(1, max)

    if (!array.includes(numero)) {
      array.push(numero);
    }
  }

  return array;

}



function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
