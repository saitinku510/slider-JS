let tabTitleOne = document.getElementById('tab1');
let tabTitleTwo = document.getElementById('tab2');
let tabTitleThree = document.getElementById('tab3');
let tabContentOne = document.getElementById('tabContent1');
let tabContentTwo = document.getElementById('tabContent2');
let tabContentThree = document.getElementById('tabContent3');


setInterval(() => {
    tabTitleOne.classList.remove('active');
}, 10000);
setInterval(() => {
    tabTitleTwo.classList.add('active');
}, 10000);
setInterval(() => {
    tabTitleTwo.classList.remove('active');
}, 20000);
setInterval(() => {
    tabTitleThree.classList.add('active');
}, 20000);
setInterval(() => {
    tabTitleThree.classList.remove('active');
}, 30000);
setInterval(() => {
    tabTitleOne.classList.add('active');
}, 30000);

setInterval(() => {
    tabContentOne.classList.remove('active');
}, 10000);
setInterval(() => {
    tabContentTwo.classList.add('active');
}, 10000);
setInterval(() => {
    tabContentTwo.classList.remove('active');
}, 20000);
setInterval(() => {
    tabContentThree.classList.add('active');
}, 20000);
setInterval(() => {
    tabContentThree.classList.remove('active');
}, 30000);
setInterval(() => {
    tabContentOne.classList.add('active');
}, 30000);


tabTitleOne.addEventListener('click', (e) => {
    tabTitleOne.classList.add('active');
    tabTitleTwo.classList.remove('active');
    tabTitleThree.classList.remove('active');

    tabContentOne.classList.add('active');
    tabContentTwo.classList.remove('active');
    tabContentThree.classList.remove('active');
});
tabTitleTwo.addEventListener('click', (e) => {
    tabTitleTwo.classList.add('active');
    tabTitleOne.classList.remove('active');
    tabTitleThree.classList.remove('active');

    tabContentTwo.classList.add('active');
    tabContentOne.classList.remove('active');
    tabContentThree.classList.remove('active');
});
tabTitleThree.addEventListener('click', (e) => {
    tabTitleThree.classList.add('active');
    tabTitleOne.classList.remove('active');
    tabTitleTwo.classList.remove('active');

    tabContentThree.classList.add('active');
    tabContentOne.classList.remove('active');
    tabContentTwo.classList.remove('active');
});