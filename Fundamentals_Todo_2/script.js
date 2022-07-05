// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

// function countdown(num){
//   let numArr = []
//   for(let i = num; i >= 0; i--){
//     numArr.push(i)
//   }
//   console.log(numArr)
//   console.log(numArr.length)
// }

// countdown(4)

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

// function print(arr){
//   console.log(arr[0])
//   return arr[1]
// }

// print([1,2])

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

// function firstPlusLength(arr){
//   let sum = 0
//   for(let i = 0; i < arr.length;i++){
//     sum = arr[0] + arr.length
//   }

//   return sum
// }

// console.log(firstPlusLength([1,2,3,4,5]))


// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

// let arr = [1,3,5,7,9,11,13]

// for (let i = 0; i < arr.length; i++){
//   if(arr[i] > arr[1]){
//     console.log(arr[i])
//   }
// }


// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

// let newArr = []
// function greaterThanTwo(arr){
  
//   for(let i = 0; i <= arr.length; i++){
//     if(arr[i] > arr[1]){
//       console.log(arr[i])
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(greaterThanTwo([1,2,3,4,3,2,5]))
// console.log(newArr.length)

