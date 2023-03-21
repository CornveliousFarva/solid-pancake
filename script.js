const generateQuote = function(){
    const quotes = [
        {quote: "A shit show at the fuck factory"},
        {quote: "He said to his son as the sexual assault allegations came rolling in"},
        {quote: "Well, fuck me to your fucking fuck"},
        // {quote: ""},
    ]

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;

}

window.onload = function(){
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}

// As I'm pulling from a single character rather than various sources, I'm having to add the quotes in manually.
