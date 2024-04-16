const os = require('os');
const fs = require('fs');


console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('Login: ', os.userInfo());

const genders = [
    'Male',
    'Female'
]
const maleNames = [
    'Joe',
    'John',
    'Michael',
];
const femaleNames = [
    'Victoria',
    'Jessica',
    'Sarah',
];
const lastNames = [
    'Smith',
    'Johnson',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
];



const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// console.log(randChoice(genders));

const people = [];

for (let i = 0; i < 20; i++) {

    const gender = randChoice(genders);

    const person ={
        gender: gender,
        firstName: gender === 'Male'? randChoice(maleNames) : randChoice(femaleNames),
        lastName: randChoice(lastNames),
        age: Math.floor(Math.random() * 90) + 20,
    };
    people.push(person);
}
const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });