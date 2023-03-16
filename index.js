let selectButton = document.querySelector('.select-grid');
selectButton.addEventListener('click', grid);    // calls the grid function 
const gridCreated = document.querySelector('.grid-created')

// function to create grid 
let askForGrid;
function grid(){
    askForGrid = prompt('Enter a gird size: "Note your Grid Size must not be 100"'); 

    // condition for div greater than or equal to 100 
    if (askForGrid >= 100){
        gridCreated.textContent = 'Grid cannot be created';
    }  else if (askForGrid == null || askForGrid == ''){
        gridCreated.textContent = 'Enter a valid number';
    }else {

        // function to create div
        const container = document.querySelector('.container');
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

        createGrid()     // calling the function

        // creating an hover function 
        function hoverSquare(e){
            e.target.style.backgroundColor = 'black';
        }
        let squareDivsList = document.querySelectorAll('.squares')
        squareDivsList.forEach(square => {square.addEventListener('mouseover', hoverSquare)})
    }
}     

