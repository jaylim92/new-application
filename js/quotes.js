const quotes = [{
        quote: "If you have nothing in life but a good friend, you're rich.",
        author: "Michelle Kwan",
    },
    {
        quote: "Love is like the wind, you can't see it but you can feel it.",
        author: "Nicholas Sparks",
    },
    {
        quote: "The worst part of success is trying to find someone who is happy for you.",
        author: "Bette Midler",
    },
    {
        quote: "The boos is never your friend, even if you're sleeping with him.",
        author: "Jacob M.Appel",
    },
    {
        quote: "If you don't know where you're going, any road'll take you there.",
        author: "George Harrison",
    },
    {
        quote: "I would die for you. But I won't live for you.",
        author: "Stephen Chbosky",
    },
    {
        quote: "If my life is going to mean anything, I have to live it myself.",
        author: "Rick Riordan",
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King",
    },
    {
        quote: "True friendship doesn't inculde jealousy.",
        author: "Eraldo Banovac",
    },
    {
        quote: "Hard work beat talent when talent fails to work hard.",
        author: "Kevin Durant",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
