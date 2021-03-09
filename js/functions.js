function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


function isOdd(numero) {
  if (numero % 2) {
    return true;
  }else {
    return false;
  }
}


function createBombs(array, max) {
  while(array.length < 16) {
    var numero = randomNumberInRange(1, max)

    if(!array.includes(numero)){
      array.push(numero);
    }
  }

  return array;

}
