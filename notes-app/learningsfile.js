//intro to importing core modules
// const fs=require('fs');
// fs.writeFileSync('notes.txt','hii i am  here ');

//assignmment 1
// fs.appendFileSync('notes.txt','blank space there is DINESH');

//IMPORTING OBJECTS
// const setName=require('./util.js')
// console.log(setName.name);
// console.log(setName.sirName )

//IMPORTING FUNCTIONS
// const add=require('./util'); //no need to mention type of file name.
// console.log(add(4,5));

//ASSIGNMENT 2
// let getNotes=require('./notes.js'); 
 // let msg=getNotes();
// console.log(getNotes());

//VALIDATOR NPM PACKAGE
// const validator=require('validator');
// console.log(validator.isEmail('dinesh@2314.co'));
// console.log(validator.isURL('dinesh@2314.co'));

//INSTALLING CHALK
// const chalk=require('chalk');
// console.log(chalk.red('hii dinesh here '));// we can use bold, italic , inverse methods

//COMMOND LINE ARGUMENTS
//we can use node app.js dinesh -> this will pass array of string with last elemnt as "dinesh" 
// as in js we have document to select things here we have 'process', which will pass us lots of data , then we can select form that data 
// opration is given below 
// console.log(process.argv[2]);