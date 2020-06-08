// Your code goes here
let imgContent = document.querySelector('img');
//1
imgContent.addEventListener('mouseenter', () =>
{
    imgContent.style.transform = "scale(1.5)";
    imgContent.style.transition = "transform 1s";
});
//2
imgContent.addEventListener('mouseleave', () =>
{
    imgContent.style.transform = "scale(1.0)";
    imgContent.style.transition = "transform 1s";
});
//3
let welcome = document.querySelector('.intro');
welcome.addEventListener('click', () =>
{
    welcome.style.color = "green";
});
//4
welcome.addEventListener('dblclick', () =>
{
    welcome.style.color = "purple";
});
//5
let page = document.querySelector('body');
page.addEventListener('wheel', () =>
{
    page.style.backgroundColor = "grey";
});
//6
let boatImg = document.querySelector('.img-fluid');
boatImg.addEventListener('drag', () =>
{
    boatImg.style.transform = "scale(1.2)";
    boatImg.style.transition = "transform 1s";
});
//7
welcome.addEventListener('contextmenu', () =>
{
    welcome.style.backgroundColor = 'orange';
});
//8
let destination = document.querySelector('.content-destination');
destination.addEventListener('copy', () =>
{
    destination.style.color = 'blue';
});
//9
page.addEventListener('keydown', () =>
{
    destination.style.backgroundColor = 'yellow';
});
//10
page.addEventListener('mousemove', () =>
{
    welcome.style.backgroundColor = 'lightblue'
})