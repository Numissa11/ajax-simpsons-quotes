function fetchSimpsonQuote() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios.get(url).then(function (response) {
    const quotes = response.data; // response.data instead of response.json() with fetch

    console.log("data decoded from JSON:", quotes);

    // Build a block of HTML

    quotes.forEach((quote) => {
      const quoteHtml = `
          <p><strong>${quote.character}</strong></p>
          <h2>${quote.quote}</h2>
          <img src="${quote.image}" />
          `;
      document.querySelector("#quotes").innerHTML = quoteHtml;
    });
  });
}

fetchSimpsonQuote();
