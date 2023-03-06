const sketchPad = document.querySelector('.container');

function getDivs(){
    const NoOfGrids = Number(prompt('Enter a number less than 100'));
    if (isNaN(NoOfGrids)) getDivs();
    for (let i = 0;i < (NoOfGrids*NoOfGrids);i++){ //noOfGrids * noOfGrids one for row and one for column
        const div = document.createElement('div');
        div.classList.add('grid');
        sketchPad.appendChild(div);
    }
    sketchPad.setAttribute('style',`grid-template-columns:repeat(${NoOfGrids},1fr); grid-template-rows:repeat(${NoOfGrids},1fr);`);

}


getDivs();