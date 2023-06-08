{
    const playGame = function(playerInput){
        clearMessages();

        const getMoveName = function(argMoveId){
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

        const randomNumber = Math.floor(Math.random() * 3 +1),
            argComputerMove = getMoveName(randomNumber),
            argPlayerMove = getMoveName(playerInput);
        
        printMessage('Mój ruch to: ' + argComputerMove);
        printMessage('Twój ruch to: ' + argPlayerMove);

        console.log('Wylosowana liczba to: ' + randomNumber);
        console.log('Gracz wpisał: ' + playerInput);

        const displayResult = function(argComputerMove, argPlayerMove){
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

        displayResult(argComputerMove, argPlayerMove);

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
}