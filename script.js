let question = +prompt("Введите число")
let sign = prompt("Введите знак")
let question_2 = +prompt("Введите число")

switch (sign) {
  case "+":
    result = question + question_2;
    break;
  case "-":
    result = question - question_2;

  case "*":
    result = question * question_2;

  case "/":
    result = question / question_2




  default:
    alert("Это че за цифры такие бархатнные!")
    break;
}
alert(`Результат ${result} `)


