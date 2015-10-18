'use strict'
// $(document).ready(function(){
//   $("#login").slideUp(400);
// }
// });
// });

// GAME LOGIC

var xWins = null;
var oWins = null;
var token = '';
var gameId = 0;
var gameCells = [];

var button = [];
for(var i=0; i<9;i++){
  button[i] = $('#button'+(i));
}
console.log(button);

  function displayBoard(x){
    return $('#boardMsg').text(x);}

var gameover = false;

function checkCombination(b1,b2,b3){
  // if winning combination is met, gameover = true
  // if first winning square value = X, display X won message.
  // if first winning square value = O, display X won message.
    if(b1.html() != '' && b1.html() == b2.html() && b1.html() == b3.html()){
      gameover = true;
      if(b1.html() == 'X'){
        displayBoard("Player X won!!!");
        ++xWins;
        $('#playerX').text(xWins);
      }else{
        displayBoard("Player O won!!!");
          ++oWins;
        $('#playerO').text(oWins);
      }
      // assign new background color to winning squares
        b1.css('background-color', '#FFFF66');
        b2.css('background-color', '#FFFF66');
        b3.css('background-color', '#FFFF66');
    }

    }

  function checkWin(){
    // check for 3 matching squares
    checkCombination(button[0],button[1],button[2]);
    checkCombination(button[3],button[4],button[5]);
    checkCombination(button[6],button[7],button[8]);
    checkCombination(button[0],button[3],button[6]);
    checkCombination(button[1],button[4],button[7]);
    checkCombination(button[2],button[5],button[8]);
    checkCombination(button[0],button[4],button[8]);
    checkCombination(button[2],button[4],button[6]);
  }

  function isBoardFull() {
    // loop through board
    var counter = 0;
    for (i = 0; i < 9; i++) {
      if ($('#button'+i).html() !== '') {
        counter++;
      // if square value is not blank, add to counter
      }
    }

    if (counter === 9) {
      // if counter = 9, board is full
      return true;
    }

    return false;
  }

  function checkDraw() {
    return isBoardFull();
    // BoardFull returns true or false will be checkDraw result.
  };

  function pickSquare(event){
    //check square, if gameover and square is not blank,
    //assign value X or O to the next blank square
    var $target = $(event.target);
    var $targetID = $target.data('id');
    // var $this = $(this);
    debugger;

    if(gameover || $target.html() !== '') return;
    $target.html(selectTurn.value);
    if($target.html() == 'X'){
    // if square value is X, then the next square value
    // would be 0 and vice versa.
      selectTurn.value = 'O';
      // button[$targetID] = $target;

    } else {
      selectTurn.value = 'X'
      // button[$targetID] = $target;
    }
    var cellData = {
      game: {
        cell: {
          index: $target.data('id'),
          value: $target.html()
        }
      }
    };
    debugger;
    tttapi.markCell(gameId, cellData, token, callback);
    checkWin();
    // check winning combination
    if (checkDraw()) {
    // if no winning combination met, and board is full, return Draw.
      displayBoard('DRAW');
    };

  }
  // on click every square, invoke function pickSquare to determine
  // the new square value.
  $('#gameBoard').on('click', pickSquare);

  // $('#button0').on('click', pickSquare);
  // $('#button1').on('click', pickSquare);
  // $('#button2').on('click', pickSquare);
  // $('#button3').on('click', pickSquare);
  // $('#button4').on('click', pickSquare);
  // $('#button5').on('click', pickSquare);
  // $('#button6').on('click', pickSquare);
  // $('#button7').on('click', pickSquare);
  // $('#button8').on('click', pickSquare);

  function resetGame(){
    for(var i=0; i<9;i++){
      button[i] =  $('#button'+(i));
    }
    // reset all squares value to blank and
    // background-color to none.
      $('.button').css('background-color','');
      $('.button').html('');
      tttapi.createGame(token, function callback(error, data) {
    if (error) {
      console.error(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
      gameId = data.game.id;
  });

      gameover = false;
  }


  $('#playButton').on('click', resetGame);




