'use strict'

var button = [];
for(var i=0; i<9;i++){
  button[i] = $('#button'+(i+1));
}
  function displayBoard(x){
    return $('#boardMsg').text(x);}
var gameover = false;

function checkCombination(b1,b2,b3){
    if(b1.html() != '' && b1.html() == b2.html() && b1.html() == b3.html()){
      gameover = true;
      if(b1.html() == 'X'){
      displayBoard("X won!");
    }else{
      displayBoard("O won!");
    }
      b1.css('background-color', 'blue');
      b2.css('background-color', 'blue');
      b3.css('background-color', 'blue');
    }
  }
  function checkWin(){
    checkCombination(button[0],button[1],button[2]);
    checkCombination(button[3],button[4],button[5]);
    checkCombination(button[6],button[7],button[8]);
    checkCombination(button[0],button[3],button[6]);
    checkCombination(button[1],button[4],button[7]);
    checkCombination(button[2],button[5],button[8]);
    checkCombination(button[0],button[4],button[8]);
    checkCombination(button[2],button[4],button[6]);
  }

  function pickSquare(){
    var $this = $(this);
    if(gameover || $this.html() !== '') return;
    $this.html(selectTurn.value);
    if($this.html() == 'X'){
      selectTurn.value = 'O';
    } else {
      selectTurn.value = 'X'
    }
    checkWin();
  }

  $('#button1').on('click', pickSquare);
  $('#button2').on('click', pickSquare);
  $('#button3').on('click', pickSquare);
  $('#button4').on('click', pickSquare);
  $('#button5').on('click', pickSquare);
  $('#button6').on('click', pickSquare);
  $('#button7').on('click', pickSquare);
  $('#button8').on('click', pickSquare);
  $('#button9').on('click', pickSquare);

  function resetGame(){
    /*for(var i = 0; i < buttons.length; i++){*/
      $('.button').css('background-color','');
      $('.button').html('');
     /*for(var i = 0; i < buttons.length; i++){
      buttons[i].css('backgroundColor', '');
    }*/
      gameover = false;
  }


  $('#playButton').on('click', resetGame);


