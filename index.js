

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1; //Random number between 0 and 1 then times by 6 but only gave a random number between 1 and 5 so therefore added one on
        values.push(value); //Adding value into values array
        images.push(`<img src="dice_images/${value}.png" alt = "Dice ${value}">`)

    }

    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
}