/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let clickedTimes = 0;

document.querySelector("#btn__element").addEventListener("click", function () {
  clickedTimes++;
  document.querySelector("#btn__state").innerHTML = clickedTimes;
});
