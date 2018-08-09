/*
Challenge #1: Highest Scoring Word
Given a string of 2 words, find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
All letters will be lowercase there will be no punctuation.
Display (id='challenge - 1') the word that is the highest scoring.
If two words score the same, display the word that appears earliest in the original string.

var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp
*/

/*
Challenge two:

write some code that takes in an array of ints
swap any 3's with 7's and any 7's with 3's
*/

// way 1
function sevenThreeSwapper(listOfInts) {
    return listOfInts.map(num => {
        if (num === 3) {
            return 7
        }
        
        if (num === 7) {
            return 3
        }

        return num;
    })
}

// in: [ 1, 2, 3, 4, 3, 5, 7, 6, 7, 3, 4, 7, 8, 9 ]
// out:[ 1, 2, 7, 4, 7, 5, 3, 6, 3, 7, 4, 3, 8, 9 ]

// Way 2
function threeSevenSwapper(listOfInts) {
    let newArr = [];
    for (let i = 0; i < listOfInts.length; i++) {
        const num = listOfInts[i];
        if (num === 3) {
            newArr.push(7);
        } else if (num === 7) {
            newArr.push(3)
        } else {
            newArr.push(num);
        }
    }
    return newArr;
}

// in: [ 1, 2, 3, 4, 3, 5, 7, 6, 7, 3, 4, 7, 8, 9 ]
// out:[ 1, 2, 7, 4, 7, 5, 3, 6, 3, 7, 4, 3, 8, 9 ]

// way 3

function swapDoesSevensAndThrees(listOfInts) {
    listOfInts.forEach((num, ind) => {
        if (num === 3) {
            listOfInts[ind] = 7;
        } else if (num === 7) {
            listOfInts[ind] = 3;
        }
    });
    return listOfInts;
}

// in:  [ 1, 2, 3, 4, 3, 5, 7, 6, 7, 3, 4, 7, 8, 9 ]
// out: [ 1, 2, 7, 4, 7, 5, 3, 6, 3, 7, 4, 3, 8, 9 ]

// FIND THE UNIQUE NUMBER

// function uniqueNumber(listOfInts) {
var listOfInts = [1, 1, 7, 1, 1, 1];
var uniqueNumber;
for (var index = 1; index < listOfInts.length; index++) {
    var cur = listOfInts[index]; //      === listOfInts[1]
    var prev = listOfInts[index - 1]; // === listOfInts[0]
    if (cur === prev) {
        // do nothing
    } else {
        uniqueNumber = prev;
    }
}
return uniqueNumber;
// }

