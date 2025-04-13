footerDate(document.querySelector("footer date#copy"));
function footerDate(obj) {
  if(obj) obj.innerHTML = new Date().getFullYear();
}

const throttle = (fn,delay) => {
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
  let index = 0;
  let slow = () => {
    if (index == objList.length) {
      removeEventListener("scroll",slow);
      setTimeout(() => {
        for (let i = 0; i < objList.length; i++){
          objList[i].style = '';
        }
      }, index*4*1000);
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

}

const slider = document.querySelector('section.slider');
function hanSlider(){
  slider.scrollBy(x,0);
}



function checkInput(obj) {
  let prob = true;
  let reqObj = {};
  for (let i = 0; i < obj.children.length; i++){
      let inputField = obj.children[i], msgObj= obj.children[i + 1];
      let reqList = ['email', 'text', 'password'];
      if (inputField.getAttribute('name') && inputField.getAttribute('type')) {
          reqObj[inputField.name] = inputField.value
      }
      if (reqList.includes(inputField.type)) {
          let value = inputField.value;
          if (!value.trim()) {
              if (inputField.getAttribute('name').toLowerCase() == 'firstName') {
                  msgObj = obj.children[i + 2]
              }
              
              if (!msgObj.classList.contains('active')) {
                  msgObj.classList.toggle('active');
              }
              prob = false;
          }
          else {
              if (inputField.getAttribute('name').toLowerCase() == 'firstName') {
                  msgObj = obj.children[i + 2]
              }
              if (msgObj.classList.contains('active')) {
                  msgObj.classList.toggle('active');
              }
          }
      }
  }
  return [prob,reqObj];
}









// slowLoading();


const alertEle = document.querySelector('div.msg');
let alertHan; 

function customAlert(msg,{act,buttons}) {
    //act by default is a flash message
  clearTimeout(alertHan);
    let alertChild = alertEle.querySelector('p.main');
    alertChild.innerHTML = '';
    if (!alertEle.classList.contains('open')){
        alertEle.classList.toggle('open');
    };
  alertChild.innerHTML = msg;
  if (buttons) {
    
  }
    if (act) {
        alertHan = setTimeout('alertEle.classList.toggle("open")', 3000);
    }
}


class CustomAlert{
  constructor(alertEle,buttons) {
    this.alertEle = alertEle ? alertEle : document.querySelector('div.msg');
    this.buttons = buttons ? buttons : [...this.alertEle.querySelectorAll('button')];
    this.regHandlers();
    this.alertHan = null;
    this.choice=null
  }

  regHandlers() {
    let obj = this;
    for (let i = 0; i < this.buttons.length; i++){
      this.buttons[i].addEventListener('click', (e)=>{obj.buttClick(e)});
    }
  }

  buttClick(e) {
    let butt = this.buttons.indexOf(e.target);
    if (!butt) {
      
    }
    this.choice = butt;
  }

  alert(msg, { act, buttons }) {
    //act by default is a flash message
    clearTimeout(this.alertHan);
    let alertChild = this.alertEle.querySelector('p.main');
    alertChild.innerHTML = '';
    if (!alertEle.classList.contains('open')){
        alertEle.classList.toggle('open');
    };
    alertChild.innerHTML = msg;
    
    // if (act) {
    //     this.alertHan = setTimeout('alertEle.classList.toggle("open")', 3000);
    // }
    if (act) {
      buttons[1].style.display='none';
      buttons[0].textContent = 'Ok'
  }
  }
}


function headScroll() {
  let obj = document.querySelector('header .header');
  if (!obj) return;
  if (window.scrollY > 90) {
    
    if (!obj.classList.contains('scrolled')) {
      obj.classList.toggle('scrolled');
    }
  } 
  else {
    if (obj.classList.contains('scrolled')) {
      obj.classList.toggle('scrolled');
    }
  }
}

window.addEventListener('scroll', throttle(headScroll,10));


const alertSystem = new CustomAlert();