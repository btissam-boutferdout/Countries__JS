let infos = document.querySelector("section");
//declarer variables
let capitaldev = document.createElement("div");
let contientldev = document.createElement("div");
let countrydev = document.createElement("div");
let flagdev = document.createElement("div");
//
capitaldev.className = "div-div";
contientldev.className = "div-div";
countrydev.className = "div-div";
flagdev.className = "div-div";

//
function search() {
  let textcountry = document.querySelector("#text").value;
  countrydev.innerHTML = `<span>Country</span><br><p>${textcountry}</p>`;
  //
  let url = "https://restcountries.com/v3.1/name/" + textcountry;
  //
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      const country = data[0];
      const capital = country.capital;
      const contient = country.continents;
      const flag = country.flags.svg;
      //
      capitaldev.innerHTML = `<span>Capital</span><br><p>${capital}</p>`;
      contientldev.innerHTML = `<span>Continen</span><br><p>${contient}</p>`;
      flagdev.innerHTML = `<span>Flag</span><br><img src = "${flag}">`;
      //
      infos.append(countrydev, contientldev, capitaldev, flagdev);
    });
}
