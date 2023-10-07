const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country-design");
    countryDiv.innerHTML = `
            <h3>Country Name : ${country.name.common}</h3>
            <p>Capital : ${
              country.capital ? country.capital[0] : "No Capital"
            }</p>
            <button onClick="loadCountryDetail('${
              country.cca3
            }')">Details</button>
      `;
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetail = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}
    `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  console.log(country);
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
            <h2>Details ${country.name.common}</h2>
            <img src="${country.flags.png}" alt="">
    `;
  console.log(country);
};

loadCountries();
