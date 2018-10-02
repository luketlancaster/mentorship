const latinDict = {
    "merry": "epulari",
    "christmas": "Nativitatis",
    "and": "et",
    "happy": "felix",
    "new": "novus",
    "year": "annos singulos"
}

const irishDict = {
    "merry": "meidhreach",
    "christmas": "Nollag",
    "and": "agus",
    "happy": "sásta",
    "new": "nua",
    "year": "bliain"
}

const piglatinDict = {
    "merry": "erry - may",
    "christmas": "istmas - chray",
    "and": "and - yay",
    "happy": "appy - hay",
    "new": "ew - nay",
    "year": "ear - yay"
}


const userInput = () => {
    const input = document.getElementById('input');
    return input.value;
};

const latinTranslate = (event) => {

    let str = userInput()
        .split(' ')
        .map(word => {
            return latinDict[word];
        })
        .join(' ');

    document.getElementById('translated').innerHTML = str;
};



const latinButton = document.getElementById('latin');
latinButton.addEventListener('click', latinTranslate);
