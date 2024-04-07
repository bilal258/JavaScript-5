var originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir'];

document.getElementById('text-area').innerHTML = originalText ;

// Show Notification Bar
const showNotification=( msg , type)=>{
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default:
            break;
    }

 
// toastify
Toastify({
    text: msg ,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgColor,
    },
    onClick: function(){} // Callback after click
  }).showToast(); 
}

// input
function Clearbtn() {
    document.getElementById('inputText').value = "";
}
// output / result
function ClearOutput() {
    document.getElementById('Output').innerHTML = "";
}
// Convert to Lowercase
function ConvertLowercase(){
    let lowerCase = originalText.toLowerCase()
   document.getElementById('Output').innerHTML = lowerCase;
}
// Convert to Uppercase
function ConvertUppercase() {
    let upperCase = originalText.toUpperCase()
    document.getElementById('Output').innerHTML = upperCase;
}
// Convert to Capitalize
function ConvertCapitalize() {
    let Capitalize = `<span class='text-capitalize'> ${originalText} </span>`
    document.getElementById('Output').innerHTML = Capitalize;
} 
// Better Formatting
function BetterFormatting() {
    let word =  document.getElementById('inputText').value;
    if (!word){
        showNotification('Please enter a line for Formatting', 'error')
       return;
    } 
    if ( word.length < 3 ){
        showNotification('Please enter a line for Formatting', 'error')
       return;
    }
    let wordFirstLetter = word.charAt(0).toUpperCase();
    let wordAllLetters = word.slice(1).toLowerCase();
    let betterFormatting = wordFirstLetter + wordAllLetters 
    document.getElementById('Output').innerHTML = betterFormatting
}
// Print All Cities
function PrintCities() {
    document.getElementById('Output').innerHTML = ""
    for (let i = 0; i < cities.length; i++) {  
        let num = i +1;
        document.getElementById("Output").innerHTML += num + ")" + cities [i] + "<br>"
    }
}
// Add Your City In List
function addcitylist() {
    let inputValue = document.getElementById('inputText').value;
    if(!inputValue) {
        showNotification('Please enter your city name in list', 'error')
        return;
    }
    let wordFirstLetter = inputValue.charAt(0).toUpperCase();
    let wordAllLetters = inputValue.slice(1).toLowerCase();
    let addCity = wordFirstLetter + wordAllLetters 
    cities.push(addCity)
    document.getElementById("Output").innerHTML ='<span class="text-success fw-bold">' + addCity + '</span> has been clicked successfully added into list.'

}
// Check Your City In List
function CheckYourCityInList() {
    let checkCity = document.getElementById('inputText').value;
    if(!checkCity) {
        showNotification('Please enter your city name', 'error')
        return;
    }
    let wordFirstLetter = checkCity.charAt(0).toUpperCase();
    let wordAllLetters = checkCity.slice(1).toLowerCase();
    let checkCityInCapitalize = wordFirstLetter + wordAllLetters 
    let isCheckCityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (checkCityInCapitalize === cities[i]) {
            isCheckCityFound = true;
            document.getElementById("Output").innerHTML = '<span class="text-success fw-bold">' + checkCityInCapitalize + '</span> is already in cities list.'
        }
    } if (isCheckCityFound === false) {
        document.getElementById("Output").innerHTML = "Sorry we couldn't found your city <span class='text-success fw-bold'>" + checkCityInCapitalize + "</span>  in the list."
    }
}
// Find This Word
function FindThisWord() {
   
    let findWord = document.getElementById('inputText').value;
    if(!findWord) {
        showNotification('Please enter word correctly', 'error' )
        return;
    }
    findWord = findWord.toLowerCase();
        let newOriginalString = originalText.toLowerCase()
        let Word = newOriginalString.indexOf(findWord)
        if ( Word !== -1) {
            document.getElementById("Output").innerHTML = 'the word you entered is found at index: ' + Word
        } else {
            document.getElementById("Output").innerHTML ='<span class="text-success fw-bold">' + findWord + '</span> word you entered is not found'
        }
    }
// Replace This Word
function ReplaceThisWord() {
    let correctWord = document.getElementById('inputText').value;
    if(!correctWord) {
        showNotification('Please enter word in input field', 'error')
        return;
    }
    let newWord = prompt("please enter a new word")
    if(!newWord) {
        showNotification('Please enter a new word correctly in promt box', 'error')
        return;
    }
   
    correctWord = correctWord.toLowerCase();
    newWord = newWord.toLowerCase();
    let newOriginalString = originalText.toLowerCase()
    correctWord = new RegExp(correctWord, "g")
    let replaceWord = newOriginalString.replace(correctWord, newWord)
    document.getElementById("Output").innerHTML = replaceWord ;
}
