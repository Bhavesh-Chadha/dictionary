wordSearch = document.querySelector("#txt-area")
outputDiv = document.querySelector("#output-div")
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
    outputDiv.style.display = "flex";
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    url = url + wordSearch.value

    console.log("reached", wordSearch.value, url)

    fetch(url).then(response => response.json()).then(json => {
        console.log(json)
        meaning = json[0].meanings[0].definitions[0].definition;
        example = json[0].meanings[0].definitions[0].example
        synonyms = json[0].meanings[0].definitions[0].synonyms[0]
        audio=  document.createElement("AUDIO")
        audio.setAttribute("src",json[0].phonetics[0].audio)
        audio.setAttribute("controls","controls")
        audio.setAttribute("autoplay","autoplay")
        
        // inputDiv2.appendChild(audio);
        console.log(meaning)
        inputDiv1.innerText = "Meaning:\n" + meaning // + "\n\nExample:\n" + example + "Synonyms:\n" + synonyms
        inputDiv2.innerText = "Pronounciation:\n"
        inputDiv2.appendChild(audio);        
        inputDiv3.innerText = "Example:\n" + example
        inputDiv4.innerText = "Synonyms:\n" + synonyms
    })

}
searchButton.addEventListener("click", search)