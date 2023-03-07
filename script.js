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
    });


// pencil
const pencilButton = document.querySelector('.pencil');
pencilButton.addEventListener('click',() => {
        draw('black');
    });


// To Clear the Screen
const clearButton = document.querySelector('.clearScreen')
clearButton.addEventListener('click',()=>{
        getDivs();
    });

    


let NoOfGrids = 20; // default number
getDivs(); //default genrated divs
getNumber();