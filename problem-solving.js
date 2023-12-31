// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

/* 
const reverseString =  (inputString) => {

    let reversString =  '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        const element = i;
      
        reversString = reversString + inputString.charAt(i)
        
    }

    return reversString;

}

const inputStr =  "hello world" ;

const result = reverseString(inputStr);

console.log(result);
 */


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


/* const sumPositiveNumber =  (num) => {

    let sum =  0;

    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element > 0) {
            sum =  sum + element
        }
        
    }

    return sum;
}

const inputNum =  [2, -5, 10, -3, 7];
const result =  sumPositiveNumber(inputNum);
console.log(result);
 */

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.


/* const findMostFrequentElement =  (arr) => {
    const frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement ;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequency[element] =  (frequency[element] || 0) + 1; 

        if (frequency[element] > maxFrequency) {
            maxFrequency =  frequency[element];
            mostFrequentElement =  element;
        }
    }

    return mostFrequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5, ];
const mostFrequentElement = findMostFrequentElement(inputArray);
console.log(mostFrequentElement); */



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

/* const findTowNumber = (arr , target) => {

    const n = arr.length;
    const indices = {};
  
    for (let i = 0; i < n; i++) {
      const complement = target - arr[i];
      if (indices.hasOwnProperty(complement)) {
        return [indices[complement], i];
      }
      indices[arr[i]] = i;
    }
  
  
    return [];
}


const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTowNumber(inputArray, targetValue);
console.log(result);
 */


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


/* const calculator =  (num1 , operator , num2) => {

    if (operator === '+') {
        return num1 + num2
    }
    else if(operator === '-'){
        return num1 - num2
    }
    else if(operator === '/'){
        return num1 / num2
    }
    else if(operator === '*'){
        return num1 * num2
    }
    else {
        return "Error: Invalid operator";
      }
}


const num1 = 10;
const operator = '*';
const num2 = 5;
const result = calculator(num1, operator, num2);
console.log(result); */



// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


/* const generatesRandomPass =  (length) => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/";

  const allCharact =  uppercaseLetters + lowercaseLetters + numbers +  specialCharacters;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex =  Math.floor(Math.random() * allCharact.length)
   
    
    password = password + allCharact[randomIndex]
    
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generatesRandomPass(passwordLength);
console.log(randomPassword);
 */




const romanToInt = (roman) =>  {
    const romanNumerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = romanNumerals[roman[i]];
      const nextNumeral = romanNumerals[roman[i + 1]];
  
      if (nextNumeral > currentNumeral) {
        result += nextNumeral - currentNumeral;
        i++; 
      } else {
        result += currentNumeral;
      }
    }
  
    return result;
  }
  

  const romanNumeral = "XXI";
  const integerValue = romanToInt(romanNumeral);
  console.log(integerValue);