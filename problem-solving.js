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

const findTowNumber = (arr , target) => {

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




