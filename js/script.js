function playGame(){
    clearMessages();
    playerInput = (1, 2, 3);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if (argMoveId == 2){
            return 'papier';
        } else if (argMoveId == 3){
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let ComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + ComputerMove);

   // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let PlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + PlayerMove);

    function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Wygrałem :)');
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Wygrałem :)');
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Wygrałem :)');
        } else if ( argComputerMove == argPlayerMove ){
            printMessage('Mamy remis');
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
            printMessage('Wybierz liczbę od 1 do 3 mordeczko!');
        }
    }

    displayResult(ComputerMove, PlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});

