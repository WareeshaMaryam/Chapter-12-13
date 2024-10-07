// Q.1 Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.

// let character = prompt("Enter a character:");
// let result;
// if (character == Number.parseInt(character)) {
//     result = `Character is a Number`;
// } else if (character == character.toUpperCase()) {
//     result = `Character is a Uppercase word`
// } else if (character == character.toLowerCase()) {
//     result = `Character is a Lowercase word`
// } else {
//     result = `invalid Number. Please enter the character`;
// }
// document.write(` ${result}`)






// Q.2 . Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
// let input = +prompt("Enter 1st Number")
// let data = +prompt("Enter 2nd Number")

// if (input === data) {
//     document.write(`both numbers are equal`);
// } else if (input > data) {
//     document.write(`1st Number is greater than 2nd Number`);
// } else if (input < data) {
//     document.write(`2nd Number is greater than 1st Number`);
// } else{
//     document.write(`Enter the number again`) ;
// }




// Q.3 . Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
// let input = +prompt(`Enter a Number`);
// if(input===0){
//     document.write(`Number is equal to 0`);
// }else if (input < 0){
//     document.write(`Number is Negative`);
// }else if (input > 0){
//     document.write(`Number is Positive`);
// }else{
//     document.write(`Invalid Number`);
// }




// Q.4 . Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
// let user = prompt(`Enter a character to check is it vowel or not`);
// let vowel = ["a", "e","i","o", "u"];

// if (user == vowel[0]||
// user == vowel[1]||
// user == vowel[2]||
// user == vowel[3]||
// user == vowel[4]){
// document.write(` True: it's a vowel `)
// } else{
//     document.write(` False: it's not a vowel `)  
// }





// Q.6 . // Question# 5:
// 5. Write a program that
// a. Store correct password in a JS variable.
// b.  Asks user to enter his/her password
// c.  Validate the two passwords:
// i.Chec
// k if user has entered password. If not, then  give message “ Please enter your password” ii.  Check if both passwords are same. If they are  same, show message “Correct! The password you  entered matches the original password”. Show  “Incorrect password” otherwise.

// var password = "Sindh";
// var user_password = prompt(` Enter the password to guess (hint: Pakistan , Karachi , Sindh)`);

// if (user_password == "") {
//     alert(`Please Enter the Password`);
// } else if (password == user_password) {
//     document.write(`Corrert!`);
// } else {
//     document.write(`InCorrert!`);
// }





///Q.6 This if/else statement does not work. Try to fix it:

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// document.write(`${greeting}`)
// }else {
// greeting = "Good evening"; 
// document.write(`${greeting}`)
// } 




//Q.7 Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 

// let userTime = +prompt(`Enter time in 24 hours clock format`)

// if( userTime == ""){
//     alert(`Enter the time again`)
// }else if (userTime >= 0 && userTime < 1200) {
//     document.write(`Good Morning`)
// } else if (userTime >= 1200 && userTime < 1700) {
//     document.write(`Good Afternoon`)
// } else if (userTime >= 1700 && userTime < 2100) {
//     document.write(`Good Evening`)
// } else if (userTime >= 2100 && userTime < 2359) {
//     document.write(`Good Night`)
// } else{
//     document.write(`Invalid Time`)
// }