wordSearch = document.querySelector("#txt-area")
outputDiv = document.querySelector("#output-div")
searchButton = document.querySelector("#searchButton")
var word = wordSearch.value
a = "word"
url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
// url1 = url + word //wordSearch.value

// function getTranslationURL(input) {
//     return url + input
// }

function search() {
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    url = url + wordSearch.value

    console.log("reached", wordSearch.value, url) 
  
    fetch(url).then(response => response.json()).then(json => {
        console.log(json)
        meaning = json[0].meanings[0].definitions[0].definition;
        example = json[0].meanings[0].definitions[0].example
        synonyms = json[0].meanings[0].definitions[0].synonyms[0]
        console.log(meaning)
        outputDiv.innerText = "Meaning:\n" + meaning + "\n\nExample:\n" + example + "\n\nSynonyms:\n" + synonyms
    })
    
}
searchButton.addEventListener("click", search)