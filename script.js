fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })

    // here first of all we will fetch an api then converted the data in json
    // convert it in the form of json and then 
    // convert it in the form of text so that the joke are in the form of text format 