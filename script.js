const sketchPad = document.querySelector('.container');

function getDivs(){

    while(sketchPad.firstChild){
        sketchPad.removeChild(sketchPad.firstChild)
    }

    for (let i = 0;i < (NoOfGrids*NoOfGrids);i++){ //noOfGrids * noOfGrids one for row and one for column
        const div = document.createElement('div');
        div.classList.add('grid');
        sketchPad.appendChild(div);
    }
    sketchPad.setAttribute('style',`grid-template-columns:repeat(${NoOfGrids},1fr); grid-template-rows:repeat(${NoOfGrids},1fr);`);

}

function getNumber(){
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


let NoOfGrids = 20;
getDivs() // for the default numbers
getNumber();