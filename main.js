const floors = [765, 635, 505, 375, 245, 115]
  //перемещение лифта по кнопке этажа
function moveAt(floor) {
  const interval = setInterval(() => {
    const cabin = document.getElementById("cabin")
    const ragdoll = document.getElementById("ragdoll")
    if (parseInt(window.getComputedStyle(cabin).top) === floors[floor - 1]) {
      clearInterval(interval)
    } else {
	  const changeBy = (floors[floor - 1] > parseInt(window.getComputedStyle(cabin).top)) ? 1 : -1
      cabin.style.top = `${parseInt(window.getComputedStyle(cabin).top) + changeBy}px`
    }
  }, 5)
}
//вызов лифта
function myCall(floor) {
  const interval = setInterval(() => {
    const cabin = document.getElementById("cabin")
  
    if (parseInt(window.getComputedStyle(cabin).top) === floors[floor-1]) {
      clearInterval(interval)
    }else {
      const changeBy = (floors[floor - 1] > parseInt(window.getComputedStyle(cabin).top)) ? 1 : -1
      cabin.style.top = `${parseInt(window.getComputedStyle(cabin).top) + changeBy}px`
    }
  }, 5)

}
//аниммация перемещения
function myWalk() {
  let elem = document.getElementById("ragdoll");   
  let pos = 450;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos -"px"; 
      elem.style.left = pos + "px"; 
    }
  } 
}
//анимация входа в лифт 


//анимация выхода с лифта
function myRagdollExit() {
  let elem = document.getElementById("ragdoll");   
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 495) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos -"px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

//функция рандомайзера
let getRandomNumber = function (start, range) {
  let getRandom  = Math.floor((Math.random() * range) + start);
  return getRandom;
}
getRandomNumber(1, 6);

