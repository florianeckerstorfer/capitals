const axios = require("axios");
const JSDOM = require("jsdom").JSDOM;
const fs = require("fs");

const sourceUrl =
  "https://en.wikipedia.org/wiki/List_of_countries_by_national_capital,_largest_and_second-largest_cities";

const niceValue = string => string.trim().replace(/'/g, "\\'");

axios
  .get(sourceUrl)
  .then(response => {
    const dom = new JSDOM(response.data);
    return dom.window.document;
  })
  .then(document => document.querySelectorAll(".wikitable")[0])
  .then(table => table.querySelectorAll("tr"))
  .then(rows => {
    const countries = [];
    rows.forEach(row => {
      const nameEl = row.querySelector("td:first-child a");
      const capitalEl = row.querySelector("td:nth-child(2)");
      const capitalIsLargest =
        capitalEl && capitalEl.getAttribute("colspan") === "2";
      let largestCity = "";
      if (capitalIsLargest) {
        largestCity = capitalEl.textContent;
      } else {
        const largestCityEl = row.querySelector("td:nth-child(3)");
        largestCity = largestCityEl ? largestCityEl.textContent : "";
      }
      const secondLargestCityEl = row.querySelector(
        `td:nth-child(${capitalIsLargest ? 3 : 4})`
      );
      if (nameEl && capitalEl) {
        countries.push({
          name: nameEl.textContent,
          capital: capitalEl.textContent,
          largestCity: largestCity,
          secondLargestCity: secondLargestCityEl
            ? secondLargestCityEl.textContent
            : ""
        });
      }
    });
    return countries;
  })
  .then(countries => {
    const content = `export default [\n${countries
      .map(
        country =>
          `  { name: '${niceValue(country.name)}', capital: '${niceValue(
            country.capital
          )}', largestCity: '${niceValue(
            country.largestCity
          )}', secondLargestCity: '${niceValue(country.secondLargestCity)}' }`
      )
      .join(",\n")}\n]`;
    fs.writeFileSync(`${__dirname}/../data/countries.js`, content);
    return countries;
  })
  .then(countries => {
    console.log(`Imported ${countries.length} countries`);
  })
  .catch(error => {
    console.error(error);
  });
