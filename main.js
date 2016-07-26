
document.addEventListener("DOMContentLoaded", () => {
  let firstNum =  Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  let secondNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  let result = firstNum + secondNum
  let str = firstNum + " + " + secondNum + " = " 
  let entrance = str
  let main = document.getElementById("main")
  let answer = ""
  
  main.innerHTML = str;
  
  let btns = document.getElementsByClassName("button")
  

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
      let target = event.target.textContent
      if (target !== "Clear" && target !== "Submit") {
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
        }
        else {
          alert("Incorrect answer!")
          main.innerHTML = entrance + result
        }
        
        setTimeout(function() {
          firstNum =  Math.floor(Math.random() * (100 - 0 + 1)) + 0;
          secondNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
          result = firstNum + secondNum
          str = firstNum + " + " + secondNum + " = " 
          entrance = str
          answer = ""
          main.innerHTML = str;
        }, 2500)
      }
    });
  }
});