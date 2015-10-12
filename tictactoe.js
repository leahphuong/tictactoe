  var buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
  var gameover = false;
  function checkCombination(b1,b2,b3){
    if(b1.innerHTML != '' && b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML){
      gameover = true;
      b1.style.backgroundColor = '#FFCCFF';
      b2.style.backgroundColor = '#FFCCFF';
      b3.style.backgroundColor = '#FFCCFF';
    }
  }
  function checkWin(){
    checkCombination(button1,button2,button3);
    checkCombination(button4,button5,button6);
    checkCombination(button7,button8,button9);
    checkCombination(button1,button4,button7);
    checkCombination(button2,button5,button8);
    checkCombination(button3,button6,button9);
    checkCombination(button1,button5,button9);
    checkCombination(button3,button5,button7);

  }
  function pickSquare(){
    if(gameover || this.innerHTML !== '') return;
    this.innerHTML = selectTurn.value;
    if(this.innerHTML == 'X'){
      selectTurn.value = 'O';
    } else {
      selectTurn.value = 'X'
    }
    checkWin();
  }
  button1.onclick = pickSquare;
  button2.onclick = pickSquare;
  button3.onclick = pickSquare;
  button4.onclick = pickSquare;
  button5.onclick = pickSquare;
  button6.onclick = pickSquare;
  button7.onclick = pickSquare;
  button8.onclick = pickSquare;
  button9.onclick = pickSquare;

  function resetGame(){
    for(var i = 0; i < buttons.length; i++){
      buttons[i].innerHTML = '';
    }

    for(var i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = '';
    }
    gameover = false;
  }
  playButton.onclick = resetGame;


