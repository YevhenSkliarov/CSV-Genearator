const { faker } = require('@faker-js/faker');

const arg = process.argv.slice(2);
const generateData = (arr) => {
    for (let i = 0; i < arg; i++) {
        arr.push([faker.random.numeric(6),
        faker.name.firstName() + ' ' + faker.name.middleName().charAt(0) + '.' + ' ' + faker.name.lastName(),
        faker.address.country(),
        faker.random.numeric(3) + '-' + faker.random.numeric(2) + '-' + faker.random.numeric(3),
        faker.date.birthdate().getMonth() + '/' + faker.date.birthdate().getDate() + '/' + faker.date.birthdate().getFullYear(),
        faker.random.numeric(5)
        ])
    }
}

module.exports = generateData;