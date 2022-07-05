let tabTitleOne = document.getElementById('tab1');
let tabTitleTwo = document.getElementById('tab2');
let tabTitleThree = document.getElementById('tab3');
let tabContentOne = document.getElementById('tabContent1');
let tabContentTwo = document.getElementById('tabContent2');
let tabContentThree = document.getElementById('tabContent3');
let count = 3000;
let countIncrement = 0;

function activeFirstTab(){
    tabTitleOne.classList.add('active');
    tabContentOne.classList.add('active');


    tabTitleTwo.classList.remove('active');
    tabTitleThree.classList.remove('active');
    tabContentTwo.classList.remove('active');
    tabContentThree.classList.remove('active');
    tabContentThree.classList.add('prev');
    tabContentOne.classList.remove('prev');
    tabContentTwo.classList.remove('prev');
}
function activeSecondTab(){
    tabTitleTwo.classList.add('active');
    tabContentTwo.classList.add('active');
    tabTitleOne.classList.remove('active');
    tabTitleThree.classList.remove('active');
    tabContentOne.classList.remove('active');
    tabContentThree.classList.remove('active');
    tabContentOne.classList.add('prev');
    tabContentTwo.classList.remove('prev');
    tabContentThree.classList.remove('prev');
}
function activeThirdTab(){
    tabTitleThree.classList.add('active');
    tabContentThree.classList.add('active');
    tabTitleOne.classList.remove('active');
    tabTitleTwo.classList.remove('active');
    tabContentOne.classList.remove('active');
    tabContentTwo.classList.remove('active');
    tabContentTwo.classList.add('prev');
    tabContentOne.classList.remove('prev');
    tabContentThree.classList.remove('prev');
}

function interval(){
    setInterval(timer, count);
}

window.onload = interval();
window.onload = changeTabs(countIncrement);
function timer(){
    countIncrement = countIncrement+1;
    if(countIncrement == 3){
        countIncrement = 0;
    }
    changeTabs(countIncrement);
    console.log(countIncrement);
}
function changeTabs(c){
    if(c === 0){
        activeFirstTab();
    }
    if(c === 1){
        activeSecondTab();
    }
    if(c === 2){
        activeThirdTab();
    }
}

tabTitleOne.addEventListener('click', (e) => {
    e.preventDefault();
    countIncrement = 0;
    changeTabs(0);
    
});
tabTitleTwo.addEventListener('click', (e) => {
    e.preventDefault();
    countIncrement = 0;
    changeTabs(1);
});
tabTitleThree.addEventListener('click', (e) => {
    e.preventDefault();
    countIncrement = 1;
    changeTabs(2);
});