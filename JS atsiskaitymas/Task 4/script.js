/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch("./cars.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el, i) => {
      const h3HTML = `<h3>${i + 1}. ${el.brand}</h3>`;
      document.querySelector("h3").insertAdjacentHTML("beforeend", h3HTML);
      el.models.forEach((el) => {
        const h3HTML2 = `${el}
        `;
        document.querySelector("h3").insertAdjacentHTML("beforeend", h3HTML2);
      });
    });
  });
