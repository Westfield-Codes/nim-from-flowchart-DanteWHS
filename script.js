/*Nim Trainer by Dante*/
/*Global varible*/
var trainer = false;
var count = 0;

/** 
 * lets user control game type and playing again * 
 * @param none *
 * @return none *
 */
function main() {
    trainer = confirm("Play trainer mode?");
    playNim();
    var again = confirm("Play again?");
    if (again==true) main();
}

/** 
 * playNim Runs Nim, with player first then computer, and says who wins  * 
 *@param none * 
 * @return none *
 */
function playNim() {
    count = 0
    while (count<21) {
        playerTurn();
        if (count>=21) alert("You lose");
        else if (count<21) {
            computerTurn();
            if (count>=21) alert("You win!");
        }
    }
}


/** 
* playerTurn gets a turn from the user and checks if it is cheating with recursion * 
*@param none * 
* @return none *
*/
function playerTurn() {
    turn = prompt("Count, 1-3");
    if (turn>3 || turn<1) {
        alert("Cheater!");
        playerTurn();
    }
    else {
        count = parseInt(count);
        turn = parseInt(turn);
        count += turn;
        alert("Count is now " + count);
    }
}

/** 
 * computerTurn gets the cpu turn without making it lose on purpose. Plays diffently if trainer is enabled * 
 * @param none *
 * @return none *
 */
function computerTurn() {
    switch (count) {
        case 17 :
            turn = 3;
            break;
        case 18 :
            turn = 2;
            break;
        case 19 || 20 :
            turn = 1;
            break;
    }
    if (trainer==true) {
        turn = 4-count%4;
    }
    else if (trainer==false) turn = Math.floor(Math.random()*3)+1;
    count+=turn;
    alert("I count " + turn + ". Count is now " + count);
}