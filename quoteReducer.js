let quote1 = "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - By: Maurice Switzer, Mrs. Goose, Her Book";
let quote2 = "The fool doth think he is wise, but the wise man knows himself to be a fool. - By: William Shakespeare, As You Like It";
let quote3 = "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect). - By: Mark Twain";
let quote4 = "When someone loves you, the way they talk about you is different. You feel safe and comfortable.- By: Jess C. Scott, The Intern";
let quote5 = "Knowing yourself is the beginning of all wisdom. - By: Aristotle";
let quoteArray = [];
quoteArray.push(quote1, quote2, quote3, quote4, quote5)

//console.log(quoteArray.length)

let randomDec = Math.random() * quoteArray.length;
let randomInt = Math.floor(randomDec);
//console.log(randomInt)
let randomQuote = quoteArray[randomInt];
// console.log(randomQuote)
const quoteWithAuthor = randomQuote;
const splitedRandomQuotes = quoteWithAuthor.split("-")
const splitedQuote = splitedRandomQuotes[0];
const splitedAuthor = splitedRandomQuotes[1]

// console.log("quote =" + splitedQuote)
// console.log("authore =" + splitedAuthor)

const previousState = {
    quote: splitedQuote,
    author: splitedAuthor
};

const quoteReducer = (state = previousState, action) => {
    switch (action.type) {
        case "UPDATE_QUOTE":
            return {
                quote: state.quote,
                author: state.author
            };
        default:
            return state;
    }
};
console.log(quoteReducer);

export default quoteReducer;