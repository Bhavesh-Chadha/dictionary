wordSearch = document.querySelector("#txt-area")
outputDiv = document.querySelector("#output-div")
searchButton = document.querySelector("#searchButton")
var word = wordSearch.value
a = "word"
url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
// url1 = url + word //wordSearch.value

function getTranslationURL(input) {
    return url + input
}

function search() {
    
    console.log("reached" , word, url + a, url + word)//getTranslationURL(word)) // url1 + word)
    fetch(getTranslationURL(word)).then(response => response.json()).then(json => console.log(json))
    // .then(json=>outputDiv.innerText =json.0.meanings.0.definitions.0)
    // .0.meanings.0.definitions.0))
    // outputBox.innerText =
}
searchButton.addEventListener("click", search)