
fecthQuotes = () => {
    let randomQuotesindex = Math.floor(Math.random() * 15);
    console.log(randomQuotesindex);

    fetch("https://type.fit/api/quotes").then((data) => {
        return data.json()
    }).then((data) => {
        document.getElementById('Quote').innerText = data[randomQuotesindex].text;
        document.getElementById('author').innerText = data[randomQuotesindex].author;

    })
}
fecthQuotes()



