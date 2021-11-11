// defining tthe action creators
//action creator argument is always the payload

export const updateQuote = (quote) => ({
    type: "UPDATE_QUOTE",
    payload: quote,
});