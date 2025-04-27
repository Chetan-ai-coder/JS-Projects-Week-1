// Creating a Header Section

const header = document.createElement("div");
header.className = "header";

// Adding HTML in the header

const h1 = document.createElement("h1")
h1.textContent = "This Is Random Joke App";

header.appendChild(h1);
document.body.appendChild(header);

// This is Body Section

const hero_section = document.createElement("div");
hero_section.className = "hero_section";

// This is Joke Button

const joke = document.createElement("button");
joke.className = "joke";
joke.textContent = "Get a Joke";

hero_section.appendChild(joke);
document.body.appendChild(hero_section);

joke.addEventListener("click", (fetchjoke) => {

    // This is joke section

    const joke_container = document.createElement("div");
    joke_container.className = "joke_container";

    const your_joke = document.createElement("p");
    your_joke.className = "your_joke";
    your_joke.innerText = '';

    joke_container.appendChild(your_joke);
    hero_section.appendChild(joke_container);

    // Here is the API which connects the joke

    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => response.json())
        .then(data => {

            const text = data.joke;

            // Here we add the typing effect

            let index = 0;

            function typetext() {
                if (index < text.length) {

                    if (text.charAt(index) === ' '){
                        your_joke.innerHTML += '&nbsp;';
                    } 
                    
                    else {
                        your_joke.innerHTML += text.charAt(index);
                    }

                    index++;
                    setTimeout(typetext, 100);
                }
            }

            typetext();
        })

        .catch(error => {
            your_joke.textContent = "Failed to load jokes";
            console.error(error);
        });


});