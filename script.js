const sketchPad = document.querySelector('.container');

function getDivs(){ //getting the divs

    while(sketchPad.firstChild){
        sketchPad.removeChild(sketchPad.firstChild)
    }

    for (let i = 0;i < (NoOfGrids*NoOfGrids);i++){ //noOfGrids * noOfGrids one for row and one for column
        const div = document.createElement('div');
        div.classList.add('grid','border');
        sketchPad.appendChild(div);
    }
    sketchPad.setAttribute('style',`grid-template-columns:repeat(${NoOfGrids},1fr); grid-template-rows:repeat(${NoOfGrids},1fr);`);

}

function getNumber(){  //getting the number of squares from the user

    const NoOfGridsPara = document.querySelector('p');
    const rangeBar = document.querySelector('.range');
    rangeBar.addEventListener('change',() => {
        NoOfGrids = rangeBar.value; 
       
    });
    rangeBar.addEventListener('input',() => {
        NoOfGridsPara.textContent = rangeBar.value + ' x ' + rangeBar.value;
    });
}

function draw(){  //pencil
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach(box => {
        box.addEventListener('mouseover',() =>{
            box.style.backgroundColor = 'black';
        });
    });
}

function drawRainbow(){
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach(box => {
        box.addEventListener('mouseover',() =>{
            box.style.backgroundColor = getRandomRGB();
        });
    });
}

function clearScreen(){  // clear button
    const clearButton = document.querySelector('.clearScreen')
    clearButton.addEventListener('click',()=>{
        getDivs();
    });
}

function getRandomRGB(){
    const values = [];
    for(let i = 0; i<3;i++){
        values.push(Math.floor(Math.random()*255))
    }

    return `rgb(${values[0]},${values[1]},${values[2]})`;
}

function rgbPencil(){
    const randomRGBbutton = document.querySelector('.randomRGB');
    randomRGBbutton.addEventListener('click',()=>{
        drawRainbow();
    });
}

function pencil(){
    const pencilButton = document.querySelector('.pencil');
    pencilButton.addEventListener('click',() => {
        draw();
    });
}
let NoOfGrids = 20; // default number
getNumber();
getDivs();
pencil();
rgbPencil();
clearScreen();