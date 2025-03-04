document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check-btn");
  let letters = document.querySelectorAll("h1 span");
  const colors = ["#00915c", "#01adbd", "#0070de", "#2542e2", "#5526e3"];

  const textInput = document.getElementById("text-input");
  const result = document.getElementById("result");

  for (let i = 0; i < letters.length; i += 2) {
    let colorIndex = Math.floor(i / 2) % colors.length;
    letters[i].style.color = colors[colorIndex];
    if (i + 1 < letters.length) {
      letters[i + 1].style.color = colors[colorIndex];
    }
  }

  function palindromeChecker() {
    if (textInput.value) {
      let cleanInput = textInput.value.replace(/[^a-z0-9]/gi, "").toLowerCase();
      let reversedInput = cleanInput.split("").reverse().join("");

      console.log(cleanInput, reversedInput);
      if (cleanInput === reversedInput) {
        resultDisplay("is a palindrome");
      } else {
        resultDisplay("is not a palindrome");
      }
    } else {
      alert("Please input a value");
    }
  }

  checkButton.addEventListener("click", () => palindromeChecker());

  textInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      palindromeChecker();
    }
  });

  function resultDisplay(resultText) {
    document.getElementById("intro").classList.add("hide");
    document.getElementById("result").classList.remove("hide");
    document.getElementById(
      "result"
    ).innerHTML = `<strong>${textInput.value}</strong> ${resultText}`;
  }
});
