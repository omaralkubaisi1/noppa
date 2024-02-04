function rollDice() {
    // Arvotaan satunnaisluku välillä 1-6
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    // Asetetaan uusi kuva img-elementille
    var diceImage = document.getElementById('diceImage');
    diceImage.src = './images/' + randomNumber + '.png';
}