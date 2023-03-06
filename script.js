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
    getDivs(); // for the default numbers
    draw();

    const NoOfGridsPara = document.querySelector('p');
    const rangeBar = document.querySelector('.range');
    rangeBar.addEventListener('change',() => {
        NoOfGrids = rangeBar.value; 
        getDivs();
        draw();
    });
    rangeBar.addEventListener('input',() => {
        NoOfGridsPara.textContent = rangeBar.value + ' x ' + rangeBar.value;
    });
}

function draw(){  //pencil
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach(box => {
        box.addEventListener('mouseover',() =>{
            box.classList.add('draw');
        });
    })
}

function clearScreen(){  // clear button
    const clearButton = document.querySelector('.clearBorder')
    clearButton.addEventListener('click',()=>{
        getDivs();
        draw();
    });
}


let NoOfGrids = 20; // default number
clearScreen()
getNumber();