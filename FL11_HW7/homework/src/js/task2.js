let confirmation=confirm('Do you want to play a game?');
let randomMax=9;
let randomMax2=13;
let randomNumber;
let userNumber;
let userNumber2;
let userNumber3;
let continuing;
let prize1=100;
let prize2=50;
let prize3=25;
let prize12=200;
let prize22=100;
let prize32=50;
if (confirmation===true) {
while(confirmation===true) {
    randomNumber=Math.floor(Math.random()*randomMax);
    userNumber=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
    'Choose a roulette pocket number from 0 to 8.\n' + 
    'Attempts left: 3.\nTotal prize: 0$.\nPossible prize on current attempt: 100$.');
    userNumber2=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
    'Choose a roulette pocket number from 0 to 8.\n' + 
    'Attempts left: 2.\nTotal prize: 0$.\nPossible prize on current attempt: 50$.');
    userNumber3=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
    'Choose a roulette pocket number from 0 to 8.\n' + 
    'Attempts left: 1.\nTotal prize: 0$.\nPossible prize on current attempt: 25$.');
    if (userNumber===randomNumber || userNumber2===randomNumber || userNumber3===randomNumber) {
        if (userNumber===randomNumber) {
            alert('Congratulation, you won! Your prize is: ' + prize1 + '$');
            continuing=confirm('Do you want to continue?');
            while(continuing===true) {
            randomNumber=Math.floor(Math.random()*randomMax);
            userNumber=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 3.\nTotal prize: ' + prize1 + '$.\nPossible prize on current attempt: 200$.');
            userNumber2=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 2.\nTotal prize: ' + prize1 + '$.\nPossible prize on current attempt: 100$.');
            userNumber3=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 1.\nTotal prize: ' + prize1 + '$.\nPossible prize on current attempt: 50$.');
            if (userNumber===randomNumber || userNumber2===randomNumber || userNumber3===randomNumber) {
                if (userNumber===randomNumber) {
                    alert('Congratulation, you won! Your prize is: ' + `${prize1 + prize12}` + '$');
                } else if (userNumber2===randomNumber) {
                    alert('Congratulation, you won! Your prize is: ' + `${prize1 + prize22}` + '$');
                } else {
                    alert('Congratulation, you won! Your prize is: ' + `${prize1 + prize32}` + '$');
                }
                break;
            } else {
                alert('Thank you for your participation. Your prize is: 0$');
                break;
            }
        }
        confirmation=confirm('Do you want to play again?');
        } else if (userNumber2===randomNumber) {
            alert('Congratulation, you won! Your prize is: ' + prize2 + '$');
            continuing=confirm('Do you want to continue?');
            while(continuing===true) {
            randomNumber=Math.floor(Math.random()*randomMax);
            userNumber=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 3.\nTotal prize: ' + prize2 + '$.\nPossible prize on current attempt: 200$.');
            userNumber2=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 2.\nTotal prize: ' + prize2 + '$.\nPossible prize on current attempt: 100$.');
            userNumber3=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 1.\nTotal prize: ' + prize2 + '$.\nPossible prize on current attempt: 50$.');
            if (userNumber===randomNumber || userNumber2===randomNumber || userNumber3===randomNumber) {
                if (userNumber===randomNumber) {
                    alert('Congratulation, you won! Your prize is: ' + `${prize2 + prize12}` + '$');
                } else if (userNumber2===randomNumber) {
                    alert('Congratulation, you won! Your prize is: ' + `${prize2 + prize22}` + '$');
                } else {
                    alert('Congratulation, you won! Your prize is: ' + `${prize2 + prize32}` + '$');
                }
                break;
            } else {
                alert('Thank you for your participation. Your prize is: 0$');
                break;
            }
        }
        confirmation=confirm('Do you want to play again?');
        } else {
            alert('Congratulation, you won! Your prize is: ' + prize3 + '$');
            continuing=confirm('Do you want to continue?');
        while(continuing===true) {
            randomNumber=Math.floor(Math.random()*randomMax);
            userNumber=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 3.\nTotal prize: ' + prize3 + '$.\nPossible prize on current attempt: 200$.');
            userNumber2=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 2.\nTotal prize: ' + prize3 + '$.\nPossible prize on current attempt: 100$.');
            userNumber3=+prompt('Please, enter a number of pocket on which the ball could land.\n' + 
            'Choose a roulette pocket number from 0 to 12.\n' + 
            'Attempts left: 1.\nTotal prize: ' + prize3 + '$.\nPossible prize on current attempt: 50$.');
            if (userNumber===randomNumber || userNumber2===randomNumber || userNumber3===randomNumber) {
                if (userNumber===randomNumber) {
                    alert('Congratulation, you won! Your prize is: ' + `${prize3 + prize12}` + '$');
                } else if (userNumber2===randomNumber) {
                    alert('Congratulation, you won! Your prize is: ' + `${prize3 + prize22}` + '$');
                } else {
                    alert('Congratulation, you won! Your prize is: ' + `${prize3 + prize32}` + '$');
                }
                break;
            } else {
                alert('Thank you for your participation. Your prize is: 0$');
                break;
            }
        }
        confirmation=confirm('Do you want to play again?');
       }
    } else {
        alert('Thank you for your participation. Your prize is: 0$');
        confirmation=confirm('Do you want to play again?');
    }
}
} else {
alert('You did not become a billionaire, but can.');
}