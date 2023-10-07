const loadQuote = () => {
  const url = "https://api.kanye.rest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const quoteElement = document.getElementById("quote");
  console.log(quote);
  quoteElement.innerText = quote.quote;
};
