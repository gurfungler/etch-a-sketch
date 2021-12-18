/*
make a 16*16 grid of div's
when hover change color to black
button to clear
*/


const grid = document.querySelector('#grid');
const clear = document.querySelector('#clear');
const rainbow = document.querySelector('#rainbow');
const black = document.querySelector('#black');
let colorSelected = "black";

for (let i = 0; i < 256; ++i)
{
    let newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    grid.appendChild(newPixel);
}

let pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {pixel.addEventListener('mouseover', changeColor, {once:true});});
clear.addEventListener('click', reset);
rainbow.addEventListener('click', togleColor);
black.addEventListener('click', togleColor);

function reset()
{
    let size = prompt("enter the size of a new board");
    pixels.forEach((pixel) => {pixel.remove()});
    for (let i = 0; i < size*size; ++i)
    {
        let newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newPixel.style.width = `${100/size}%`;
        newPixel.style.height = `${100/size}%`;
        grid.appendChild(newPixel);
    }
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {pixel.addEventListener('mouseover', changeColor, {once:true});});
}

function togleColor()
{
    if(colorSelected == 'black')
    {
    colorSelected = 'rainbow';
    return;
    }
    colorSelected = 'black';
    return;
}

function changeColor()
{   
    if(colorSelected == 'black')
    {
        this.style.backgroundColor = colorSelected;
    }
    else if(colorSelected == 'rainbow')
    {
        this.style.backgroundColor = '#' + randomColor();
    }
    

}

function randomColor()
{
    return Math.floor(Math.random()*16777215).toString(16);

}