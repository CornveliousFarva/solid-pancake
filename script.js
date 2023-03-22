const generateQuote = function(){
    const quotes = [
        {quote: "Hey, hey motherfuckers!"},
        {quote: "I’m thankful I was not born a Siamese twin."},
        {quote: "Guess who didn’t kill anyone but maybe only lost a couple of thumbs?"},
        {quote: "This is what it looks like when you resolve all your issues."}
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
