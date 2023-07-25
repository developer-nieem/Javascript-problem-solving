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


const sumPositiveNumber =  (num) => {

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
