// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a str and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



describe("codedMessage", () => {
    it("takes in a str and returns a coded message.", () =>{
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})



// Create a function codedMessage that takes a str and returns a coded message
// Iterate through the length of the string using a for loop, " for (let i = 0; i < str.length; i++) "
// Using a conditional if with OR ( || )to check if the index of the given string contains a,e,i,o
// If this condition is met use .replace method on the string to replace the index with either 4,3,1,0
// .replace will replace all occurrences of a substring in a string and return the new version.
// using a regular expression \ \g global  to cover all cases (i= a,e,i,o ) and replacing all occurrences // with the 4,3,1,0
//  RED To Green: FAIL  ./code-challenges.test.js
//   ● Test suite failed to run
//   ReferenceError: codedMessage is not defined


// b) Create the function that makes the test pass.

const codedMessage = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i]== 'e' || str[i]== 'i' || str[i]== 'o'){
        return str.replace(/[aA]/g, [4]).replace(/[eE]/g, [3]).replace(/[iI]/g, [1]).replace(/[oO]/g, [0])
        }
    }
}

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessage(secretCodeWord3))
console.log(codedMessage("ThisOneTookLonG"))

// PASS  ./code-challenges.test.js
// codedMessage
// ✓ takes in a str and returns a coded message. (1 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.
// a) Create a test with expects statement using the variable provided.


const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]



describe("charIncluded", () => {
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () =>{
        expect(charIncluded(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(charIncluded(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
        
    })
})

// Create a function charIncluded that takes a array and char and returns all words that contain the char
//  Use .filter to return a subset of the array where the value at the current index includes the char input
// To optimize will utilize a .toLowerCase and then .includes
//   ● Test suite failed to run
//   ReferenceError: charIncluded is not defined


// b) Create the function that makes the test pass.

const charIncluded = (array,char) => {
    return array.filter(v => v.toLowerCase().includes(char))
}

console.log(charIncluded(arrayOfWords1,letterA))
console.log(charIncluded(arrayOfWords2,letterE))
console.log(charIncluded(['Owyn','David','Apple','Cake'],'a'))

// PASS  ./code-challenges.test.js
// charIncluded
// ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter.(1 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("winHand", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () =>{
        expect(winHand(hand1)).toEqual(true)
        expect(winHand(hand2)).toEqual(false)
        expect(winHand(hand3)).toEqual(false)
       
    })
})

// Create a function winHand that takes a array of 5 numbers and determines whether or not the array is a full house
//  Create a new array that is equal to the given array sorted from smallest to largest
// Using a conditional determine if there is 2 of a kind and 3 of kind which would be a full house
// return a true if the hand meets the criteria or false if not
//   ● Test suite failed to run
//   ReferenceError: winHand is not defined


// b) Create the function that makes the test pass.
const winHand = (array) => {
    sortArr = array.sort((a, b) => a - b )
    if(sortArr[0] === sortArr[1] && sortArr[2] === sortArr[3] && sortArr[3] === sortArr[4] ){
         return true
    }else{
        return false
    }
  }

  console.log(winHand(hand1))
  console.log(winHand(hand2))
  console.log(winHand(hand3))
  console.log(winHand([1,2,3,3,3]))
  console.log(winHand([3,3,1,1,3]))

  // PASS  ./code-challenges.test.js
// winHand
// ✓ takes in an array of 5 numbers and determines whether or not the array is a full house