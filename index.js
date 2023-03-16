let selectButton = document.querySelector('.select-grid');
selectButton.addEventListener('click', grid);


// declaring a global variable 
let askForGrid;
const container = document.querySelector('.container');
const gridCreated = document.querySelector('.grid-created')


// function to create grid 
function grid(){
    askForGrid = prompt('Enter a gird size: "Note your Grid Size must not be 100"'); 
    // function to create div
    const number = askForGrid;
    gridCreated.textContent = `${number}*${number}`;
    function createGrid(){
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        for (let i = 0; i <= number*number; i++){
            const sqaureDivs = document.createElement('div');
            sqaureDivs.classList.add('squares');
            container.appendChild(sqaureDivs);
        }
    }
    createGrid();
}     



// creating a hover function 
function hoverSquare(event){
    event.target.style.backgroundColor  = "black";
}

let sqaureDivsList = document.querySelectorAll('.squares');
sqaureDivsList.forEach(square => console.log(square))
// sqaureDivsList.forEach(square => {square.addEventListener('mouseover', hoverSquare)});



