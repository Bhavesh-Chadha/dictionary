wordSearch = document.querySelector("#txt-area")
inputDiv1 = document.querySelector("#input-div1")
inputDiv2 = document.querySelector("#input-div2")
inputDiv3 = document.querySelector("#input-div3")
inputDiv4 = document.querySelector("#input-div4")
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
        inputDiv1.innerText = "Meaning:\n" + meaning // + "\n\nExample:\n" + example + "Synonyms:\n" + synonyms
        inputDiv2.innerText = "Example:\n" + example
        inputDiv3.innerText = "Synonyms:\n" + synonyms
    })

}
searchButton.addEventListener("click", search)