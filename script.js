const buttonOne = document.querySelector('.firstButton');
const buttonTwo = document.querySelector('.secondButton');
const buttonThree = document.querySelector('.thirdButton');
const buttonFour = document.querySelector('.fourthButton');
const buttonFive = document.querySelector('.fifthButton');
const buttonSix = document.querySelector('.sixthButton');
const buttonSeven = document.querySelector('.seventhButton');
const buttonEight = document.querySelector('.eighthButton');

let soundOne = document.getElementById('soundOne');
let soundTwo = document.getElementById('soundTwo');
let soundThree = document.getElementById('soundThree');
let soundFour = document.getElementById('soundFour');
let soundFive = document.getElementById('soundFive');
let soundSix = document.getElementById('soundSix');
let soundSeven = document.getElementById('soundSeven');
let soundEight = document.getElementById('soundEight');

// let animItems = document.querySelectorAll('._animItems');

function hideButtonOne() {
    buttonOne.style.display = 'none';
    soundOne.play();
    soundTwo.pause();
    soundThree.pause();
    soundFour.pause();
    soundFive.pause();
    soundSix.pause();
    soundSeven.pause();
    soundEight.pause();
}
function hideButtonTwo() {
    buttonTwo.style.display = 'none';
    soundTwo.play();
    soundThree.pause();
    soundFour.pause();
    soundFive.pause();
    soundSix.pause();
    soundSeven.pause();
    soundEight.pause();
    soundOne.pause();
}
function hideButtonThree() {
    buttonThree.style.display = 'none';
    soundThree.play();
    soundFour.pause();
    soundFive.pause();
    soundSix.pause();
    soundSeven.pause();
    soundEight.pause();
    soundTwo.pause();
    soundOne.pause();
}
function hideButtonFour() {
    buttonFour.style.display = 'none';
    soundFour.play();
    soundFive.pause();
    soundSix.pause();
    soundSeven.pause();
    soundEight.pause();
    soundOne.pause();
    soundThree.pause();
    soundTwo.pause();
}
function hideButtonFive() {
    buttonFive.style.display = 'none';
    soundFive.play();
    soundSix.pause();
    soundSeven.pause();
    soundEight.pause();
    soundOne.pause();
    soundThree.pause();
    soundTwo.pause();
    soundFour.pause();
}
function hideButtonSix() {
    buttonSix.style.display = 'none';
    soundSix.play();
    soundSeven.pause();
    soundEight.pause();
    soundTwo.pause();
    soundThree.pause();
    soundFour.pause();
    soundFive.pause();
    soundOne.pause();
}
function hideButtonSeven() {
    buttonSeven.style.display = 'none';
    soundSeven.play();
    soundEight.pause();
    soundTwo.pause();
    soundThree.pause();
    soundFour.pause();
    soundFive.pause();
    soundSix.pause();
    soundOne.pause();
}
function hideButtonEight() {
    buttonEight.style.display = 'none';
    soundEight.play();
    soundTwo.pause();
    soundThree.pause();
    soundFour.pause();
    soundFive.pause();
    soundSix.pause();
    soundSeven.pause();
    soundOne.pause();
}

// if(animItems.length > 0){
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll(){
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//             if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('_active');
//             } else {
//                 animItem.classList.remove('_active');
//             }
//         }
//     }
//     function offset(el){
//         const rect el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return{top: rect.top + scrollTop, left: rect.left + scrollLeft};
//     }
// }

document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animOne');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('_active');
    } else {
        targetBlock.classList.remove('_active');
    }
});

document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animTwo');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('_active');
    } else {
        targetBlock.classList.remove('_active');
    }
});

document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animThree');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('_active');
    } else {
        targetBlock.classList.remove('_active');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animFour');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('_active');
    } else {
        targetBlock.classList.remove('_active');
    }
});

document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animFive');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('_active');
    } else {
        targetBlock.classList.remove('_active');
    }
});

document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animSix');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('_active');
    } else {
        targetBlock.classList.remove('_active');
    }
});

document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animSeven');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('_active');
    } else {
        targetBlock.classList.remove('_active');
    }
});