// Create an array that contains the words in the sentence
var sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];

// The addExcitement function should accept the array as the sole argument
function addExcitement(theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
    let greeting = '';
    for (let index = 1; index < theWordArray.length + 1; index++) {
        const element = theWordArray[index - 1];
        if (index % 3 === 0) {
            greeting += `${element}! `;
        } else {
            greeting += `${element} `;
        }
        console.log(greeting);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);
