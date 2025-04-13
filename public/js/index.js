let obj = document.querySelector('body > header');
let index = document.querySelector('main > .programme-sect')
let contactEle = document.querySelector('header li:first-child')

function headerScroll() {
    if (innerWidth > 600) {
        if (index.getBoundingClientRect().y < 0) {
            if (!contactEle.classList.contains('change')) contactEle.classList.add('change');
        }
        else {
            if (contactEle.classList.contains('change')) contactEle.classList.remove('change');
        }
        
        if (scrollY > 1) {
            if (!obj.classList.contains('scrolled')) {
                obj.classList.toggle('scrolled')
                obj.querySelector('h1').classList.toggle('scrolled')
            }
        }
        else {
            if (obj.classList.contains('scrolled')) {
                obj.classList.toggle('scrolled');
                obj.querySelector('h1').classList.toggle('scrolled')
            }
        }
    }
}





//window.addEventListener('scroll',throttle(headerScroll,10));