const countries = require("../countries.js")

// console.log(process.argv)
// Understanding how process.argv works


//ran "node ./src/searchCountryByName.js brasil"  ( = npm run search-country-by-name brasil)

// '/usr/local/bin/node',
// '/Users/kellyknoblauch/Desktop/Back-end/node-package-template/src/searchCountryByName.js',
// 'brasil'

// console.log(process.argv[2]) came back only 'brasil'


const countryName = process.argv[2];

const searchResults = countries.filter(
    (country) => { return country.name.includes(countryName) }
);

console.table(searchResults) 
// npm run search-country-by-name Brasil



