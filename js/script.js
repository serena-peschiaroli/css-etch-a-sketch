document.getElementById("btn").addEventListener("click", gridMaker);

const row = document.querySelector(".row");

const dimensionSelect = document.getElementById('dimension');

function gridMaker() {
    let dimension = dimensionSelect.value;

    let gridDimension;
    let squareClass;

    switch(dimension) {
        case "1":
            gridDimension = 64;
            squareClass = "square-sm";
            break;
        case "2":
            gridDimension = 100;
            squareClass = "square-md";
            break;
        case "3":
            gridDimension = 256;
            squareClass = "square-l";
            break;
        default:
            gridDimension = 64;
            squareClass = "square-sm";
            break;
    }

    row.innerHTML = "";

    for(let i = 1; i <= gridDimension; i++) {
        let square = document.createElement("div");
        square.className = `square ${squareClass}`;
        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = colorSquare();
        });
        row.appendChild(square);
    }
}


function colorSquare(){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  return RGBColor;
    
}
