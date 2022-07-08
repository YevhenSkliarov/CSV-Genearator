const fs = require('fs')
const { convertArrayToCSV } = require('convert-array-to-csv');
const header = ['id', 'full_name', 'country', 'ssn', 'date_of_birth', 'zipcode'];
const generateData =require('./DataGenerator/dataGenerator')

const dataArrays = [];
generateData(dataArrays,600000);
const val = convertArrayToCSV(dataArrays, {
    header,
    separator: ','
});
console.log(val)

fs.writeFile('./Data/userData.csv', val, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});    