const sketchPad = document.querySelector('.container');
let border = true;

function getDivs(){ //getting the divs

    //remove the previous grid
    while(sketchPad.firstChild){
        sketchPad.removeChild(sketchPad.firstChild)
    }

    //create the grid
    for (let i = 0;i < (NoOfGrids*NoOfGrids);i++){ //noOfGrids * noOfGrids one for row and one for column

        const div = document.createElement('div');
        if(!border) div.classList.add('grid');
        else div.classList.add('grid','border');
        sketchPad.appendChild(div);
    }
    sketchPad.setAttribute('style',`grid-template-columns:repeat(${NoOfGrids},1fr); grid-template-rows:repeat(${NoOfGrids},1fr);`);


        // Clear the grid
    const toggleGridButton = document.querySelector('.toggleBorder');
    const divs = document.querySelectorAll('.grid');
    toggleGridButton.addEventListener('click',()=>{
        divs.forEach(div=>{
            if (div.classList.contains('border')){
                div.classList.remove('border')
                border = false;
            }else{
                div.classList.add('border')
                border = true;
            }
        });
    });
    if(randomRGBbutton.style.backgroundColor === 'rgb(62, 166, 255)') draw(getRandomRGB);
    if(eraserButton.style.backgroundColor === 'rgb(62, 166, 255)') draw('white');

}   

function getNumber(){  //getting the number of squares from the user

    const NoOfGridsPara = document.querySelector('p');
    const rangeBar = document.querySelector('.range');
    rangeBar.addEventListener('change',() => {
        NoOfGrids = rangeBar.value; 
        getDivs();
       
    });
    rangeBar.addEventListener('input',() => {
        NoOfGridsPara.textContent = rangeBar.value + ' x ' + rangeBar.value;
    });
}


function getRandomRGB(){
    const values = [];
    for(let i = 0; i<3;i++){
        values.push(Math.floor(Math.random()*255))
    }

    return `rgb(${values[0]},${values[1]},${values[2]})`;
}


function draw(color){
    const boxes = document.querySelectorAll('.grid');
    if(typeof color === 'function'){
        boxes.forEach(box => {
            box.addEventListener('mouseover',() =>{
                box.style.backgroundColor = color();
            });
        });
    }else{
        boxes.forEach(box => {
            box.addEventListener('mouseover',() =>{
                box.style.backgroundColor = color;
            });
        });
    }

}



//Rgb pencil
const randomRGBbutton = document.querySelector('.randomRGB');
randomRGBbutton.addEventListener('click',()=>{
    draw(getRandomRGB);
    randomRGBbutton.style.backgroundColor = 'rgb(62, 166, 255)';
    eraserButton.style.color = 'rgb(62, 166, 255)';
    randomRGBbutton.style.color = 'black';
    eraserButton.style.backgroundColor = '#272727';
});



// pencil
const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click',() => {
    draw('white');
    eraserButton.style.backgroundColor = 'rgb(62, 166, 255)';
    eraserButton.style.color = 'black';
    randomRGBbutton.style.color = 'rgb(62, 166, 255)';
    randomRGBbutton.style.backgroundColor = '#272727';
});


const colorPen = document.querySelector('.colorPen')
colorPen.addEventListener('change',()=>{
    draw(colorPen.value);
    randomRGBbutton.style.backgroundColor = '#272727';
    eraserButton.style.backgroundColor = '#272727';
    eraserButton.style.color = 'rgb(62, 166, 255)';
    randomRGBbutton.style.color = 'rgb(62, 166, 255)';
});


// To Clear the Screen
const clearButton = document.querySelector('.clearScreen')
clearButton.addEventListener('click',()=>{
        const boxes = document.querySelectorAll('.grid');
        boxes.forEach(box=>{
            box.style.backgroundColor = 'white';
        });
        
    });


let NoOfGrids = 20; 
getNumber();
getDivs(); 


