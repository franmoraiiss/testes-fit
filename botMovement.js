function isPossible(currentX, currentY, intendedX, intendedY) {  
  if(currentX === intendedX && currentY === intendedY) {
    return true
  }
  
  if(intendedX < currentX || intendedY < currentY) {
    return false
  }

  if(intendedX > intendedY) {
    return isPossible(currentX, currentY, intendedX - intendedY, intendedY)
  } else {
    return isPossible(currentX, currentY, intendedX, intendedY - intendedX)
  }
}

(() => {
  // Colocar as coordenadas desejadas
  let x = 1;
  let y = 1;
  let finalX = 5;
  let finalY = 2;

  if(isPossible(x, y, finalX, finalY)) {
    console.log("Movimento possível");
  } else {
    console.log("Movimento impossível");
  }
})();
