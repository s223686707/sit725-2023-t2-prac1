function colorCircle(whiteColor) {
    var changeColor = getRandomColor(whiteColor)
    console.log(changeColor); 
    const element = document.getElementById("ID");
    element.style = `background-color:${changeColor}`;
}

function getRandomColor(whiteColor){
    var maxVal = whiteColor;
    var randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber); // conversion from hex to int
    randomNumber = randomNumber.toString(16); 
    let randColor = randomNumber.padStart(6, 0); // Padding   
    return `#${randColor.toUpperCase()}`
}
