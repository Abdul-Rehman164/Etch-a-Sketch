const sketchPad = document.querySelector('.container');

function getDivs(){

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

function getNumber(){
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

function draw(){
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach(box => {
        box.addEventListener('mouseover',() =>{
            box.classList.add('draw');
        });
    })
}

let NoOfGrids = 20;
getNumber();