/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
//const converter = function (kg) {};

const inputText = document.querySelector("#search");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const lb = (inputText.value * 2.2046).toFixed(2);
  const g = inputText.value / 0.001;
  const oz = (inputText.value * 35.274).toFixed(2);

  document.querySelector(
    "#output"
  ).textContent = `${inputText.value}kg = ${lb}lbs | ${g}g | ${oz}oz`;
  inputText.value = null;
});
