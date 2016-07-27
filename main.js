
document.addEventListener("DOMContentLoaded", () => {
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
        if (result === parseInt(answer)) {
          alert("Correct answer!")
          scoreTag.innerHTML = "Score: " + ++score;
        }
        else if (operation[randOperation] === '/' &&  result == parseFloat(answer)) {
          alert("Correct answer!")
          scoreTag.innerHTML = "Score: " + ++score;
        }
        else {
          alert("Incorrect answer!")
          main.innerHTML = entrance + result
          scoreTag.innerHTML = "Score: " + --score;
        }
        
        reset();
      }

      else if (target === "Skip") {
        main.innerHTML = entrance + result
        reset();
      }
    });
  }

  /*document.addEventListener('keydown', function(event) {
    console.log("key ", String.fromCharCode(event.keyCode))
    if ((event.keyCode >= 48 && event.keyCode <= 57)
      || event.keyCode == 189 || event.keyCode === 190)  {
      alert("key pressed " + event.keyCode)
    }
  });*/
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
        }, 2500)
  }
});

