const container = document.getElementById('container');
const button = document.getElementById('button');
const groovy = document.getElementById('groovy');
const clear = document.getElementById('clear');

// load page with 75*75 grid
let defaultInput = 75;
function defaultView(defaultInput) {
    container.style.gridTemplateColumns = "repeat(" + defaultInput +", auto)";

    let numberOfDivs = defaultInput*defaultInput;

    function addDivs(numberOfDivs) {
        for (let i = 0; i < numberOfDivs; i++) {
            let div = document.createElement('div');
            div.classList.add('boxes');
            container.appendChild(div);
        }
    }

    addDivs(numberOfDivs);

    // box color darkens by 33% with each pass through
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach((box) => { 
        box.count = 0;
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.count += 1;
            e.target.style.opacity = 0.33 * e.target.count;                                     
        });
    });
}

defaultView(defaultInput);

// clear button
clear.addEventListener('click', clearScreen);
function clearScreen() {
    window.location.reload();
}

// get groovy setting
groovy.addEventListener('click', groovyFunction);

function groovyFunction() {
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            // Random RGB color for each pass through grid
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            let bgColor = "rgb(" + x + "," + y + "," + z + ")";
            box.style.background = bgColor;
            box.style.opacity = 1;                                 
        });
    });
}

// let user set grid size
button.addEventListener('click', gridPrompt);

function gridPrompt() { 
    container.innerHTML = "";

    const userInput = prompt("Set the grid size (1-100)", 16);
    
    if (userInput < 1 || userInput > 100) {
        alert("Please enter a valid number (1-100)");
        return;
    }

    container.style.gridTemplateColumns = "repeat(" + userInput +", auto)";

    let newDivs = userInput*userInput;

    function addNewDivs(newDivs) {
        for (let i = 0; i < newDivs; i++) {
            let div = document.createElement('div');
            div.classList.add('boxes');
            container.appendChild(div);
        }
    }

    addNewDivs(newDivs);

    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach((box) => { 
        box.count = 0;
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.count += 1;
            e.target.style.opacity = 0.3 * e.target.count;                                     
        });
    });
}
