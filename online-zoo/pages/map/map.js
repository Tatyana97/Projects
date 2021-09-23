

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');


minus.addEventListener('click', () =>{
    mapImage.style.width = `$(mapImage.width*2)px`
})

function zoomin() {
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;
    if (currWidth == 2500) return false;
    else {
      myImg.style.width = (currWidth + 100) + "px";
    }
  }
  
  function zoomout() {
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;
    if (currWidth == 100) return false;
    else {
      myImg.style.width = (currWidth - 100) + "px";
    }
  }