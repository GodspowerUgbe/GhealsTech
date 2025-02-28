function footerDate(obj) {
  if(obj) obj.innerHTML = new Date().getFullYear();
}

const throttle = (fn, delay) => {
  let time = Date.now();

  return () => {
    if (time + delay - Date.now() <= 0) {
      fn();
      time = Date.now();
    }
  };
};

// function getNearest(objList, i) {
//     let nearest;
//     for (let a = i; a < objList.length; a++){

//     }
// }


function slowLoading(objList) {
  objList = objList || document.querySelectorAll("main > section,footer");
  console.log(objList)
  let index = 0;
  let slow = () => {
    if (index == objList.length) {
      removeEventListener("scroll",slow);
      setTimeout(() => {
        for (let i = 0; i < objList.length; i++){
          objList[i].style = '';
        }
      }, index*4*1000);
      console.log(`Dev mode: Scroll Event removed
index: ${index}  `);
      return;
    }

    if (index + 1 < objList.length) {
      if (objList[index + 1].getBoundingClientRect().y > innerHeight) {
        objList[index + 1].style = "position:relative;top:100vh";
      }
    }

    if (objList[index].getBoundingClientRect().y < innerHeight) {
      index++;
    } else {
        objList[index].style='position:relative;top:0'
    }
  };
  addEventListener("scroll", slow);
  console.log("Dev mode: Scroll Event added");
}

const slider = document.querySelector('section.slider');
function hanSlider(){
  slider.scrollBy(x,0);
}




slowLoading();

footerDate(document.querySelector("footer date#copy"));
