/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  sum = (a, b) => {
    let answer1 = a + b;
    return answer1;
  };
  subtraction = (a, b) => {
    let answer2 = a - b;
    return answer2;
  };
  multiplication = (a, b) => {
    let answer3 = a * b;
    return answer3;
  };
  division = (a, b) => {
    let answer4 = a / b;
    return answer4;
  };
}

const CalculatorV2 = new Calculator();

console.log(CalculatorV2);
console.log("Sum: " + CalculatorV2.sum(5, 10));
console.log("Subtraction: " + CalculatorV2.subtraction(25, 15));
console.log("Multiplication: " + CalculatorV2.multiplication(3, 3));
console.log("Division: " + CalculatorV2.division(1111, 11));
