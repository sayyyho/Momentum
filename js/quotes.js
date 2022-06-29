const quotes = [
    {
        quote : "Don’t dwell on the past" 
    },
    {
        quote : "Believe in yourself"
    },
    {
        quote : "Follow your heart"
    },
    {
        quote : "you only live once"
    },
    {
        quote : "Don’t beat yourself up"
    },
    {
        quote : "Don’t dream, Be it"
    },
    {
        quote : "Be brave"
    },
    {
        quote : "Hang in there"
    },
    {
        quote : "This is how life is"
    },
    {
        quote : "If not now, then when?"
    },
]

const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;