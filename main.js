
document.addEventListener("DOMContentLoaded", () => {
  let anim = document.createElement('div');
  let win = new Audio('win.mp3')
  let loser = new Audio("loser.wav")
  anim.className= "results"
  let score = 0;
  let scoreTag = document.getElementById("score")
  scoreTag.innerHTML = scoreTag.innerHTML + score
  let operation = ["+", "-", "*", "/"]
  let randOperation = Math.floor(Math.random() * (3- 0 + 1)) + 0;
  let firstNum =  Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  let secondNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  
  
  let result = 0;
  let str = "";

  if (operation[randOperation] === '+') {
    result = firstNum + secondNum
    str = firstNum + " + " + secondNum + " = " 
  }
  else if (operation[randOperation] === '-') {
    result = firstNum - secondNum
    str = firstNum + " - " + secondNum + " = " 
  }

  else if (operation[randOperation] === '*') {
    result = firstNum * secondNum
    str = firstNum + " * " + secondNum + " = " 
  }

  else if (operation[randOperation] === '/') {
    while (secondNum === 0) {
      secondNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    }
    result = parseFloat(firstNum / secondNum).toFixed(2)
    str = firstNum + " / " + secondNum + " = " 
  }
  let entrance = str
  let main = document.getElementById("main")
  let answer = ""
  main.innerHTML = str;
  
  let btns = document.getElementsByClassName("button")
  

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {


      let target = event.target.textContent
      if (target !== "Clear" && target !== "Submit"
        && target !== "Skip") {
        str += target
        answer += target
        main.innerHTML = str;
      }
      
      else if (target === "Clear") {
        main.innerHTML = entrance;
        str = entrance;
        answer = ""
      }

      else if (target === "Submit") {
        submit();
        reset();
        
      }

      else if (target === "Skip") {
        main.innerHTML = entrance + result
        reset();
      }
    });
  }

  document.addEventListener('keypress', function(event) {
    console.log(event.keyCode)
    if ((event.keyCode >= 48 && event.keyCode <= 57)
      || event.keyCode === 45 || event.keyCode === 46)  {
        str += String.fromCharCode(event.keyCode)
        answer += String.fromCharCode(event.keyCode)
        main.innerHTML = str;
    }

    if (event.keyCode === 13) {
      submit();
      reset();
    }

    if (event.keyCode === 67 || event.keyCode === 99) {
      main.innerHTML = entrance;
      str = entrance;
      answer = ""
    }

    if (event.keyCode === 32) {
      main.innerHTML = entrance + result
      reset();
    }
  });

  function submit() {
    if (result === parseInt(answer)) {
          //alert("Correct answer!")
          scoreTag.innerHTML = "Score: " + ++score;
          insertAfter(anim , main);
          anim.innerHTML = "The answer is correct!"
          win.play()
        }
        else if (operation[randOperation] === '/' &&  result == parseFloat(answer)) {
          //alert("Correct answer!")
          scoreTag.innerHTML = "Score: " + ++score;
          insertAfter(anim , main);
          anim.innerHTML = "The answer is correct!"
          win.play()
        }
        else {
          
          main.innerHTML = entrance + result
          scoreTag.innerHTML = "Score: " + --score;
          insertAfter(anim , main);
          anim.innerHTML = "The answer is incorrect!"
          loser.play();
          
        }
        setTimeout(function() {
            anim.style.width = "450px";
            anim.style.height = "50px";
            anim.style.fontSize  = "36px"
        }, 1500);
  }
  function reset() {

        setTimeout(function() {
          
          randOperation = Math.floor(Math.random() * (3- 0 + 1)) + 0;
          firstNum =  Math.floor(Math.random() * (100 - 0 + 1)) + 0;
          secondNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            if (operation[randOperation] === '+') {
              result = firstNum + secondNum
              str = firstNum + " + " + secondNum + " = " 
            }
            else if (operation[randOperation] === '-') {
              result = firstNum - secondNum
              str = firstNum + " - " + secondNum + " = " 
            }

            else if (operation[randOperation] === '*') {
              result = firstNum * secondNum
              str = firstNum + " * " + secondNum + " = " 
            }

            else if (operation[randOperation] === '/') {
              result = parseFloat(firstNum / secondNum).toFixed(2)
              str = firstNum + " / " + secondNum + " = " 
            }
          entrance = str
          answer = ""
          main.innerHTML = str;

          if (anim.parentNode)
            anim.parentNode.removeChild(anim);
          anim.style.width = "200px";
          anim.style.height = "25px";
          anim.style.fontSize  = "16px"
        }, 3500);

  }
});


function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
