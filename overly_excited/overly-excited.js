// Create an array that contains the words in the sentence
var sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];

// The addExcitement function should accept the array as the sole argument
function addExcitement(theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
    let greeting = '';
    for (let index = 0; index < theWordArray.length; index++) {
        const element = theWordArray[index];
        greeting += `${element} `;
        console.log(greeting);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);
