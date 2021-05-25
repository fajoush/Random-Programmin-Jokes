let setupDiv = document.getElementById("setup");
let punchlineDiv= document.getElementById('punchline');
let punchlineBtn = document.getElementById('punchlineBtn');
let newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

punchlineBtn.addEventListener('click', getPunchline);

newJokeBtn.addEventListener('click', getJoke);

function getPunchline(){
    punchlineDiv.textContent = punchline;
    punchlineDiv.classList.add('bubble');

    punchlineBtn.classList.toggle('hidden');
     newJokeBtn.classList.toggle('hidden');
}

async function getJoke(){
    let jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
 
    let joke = await jokePromise.json();

    setupDiv.textContent = joke[0].setup;

     punchline = joke[0].punchline;
    punchlineDiv.textContent = "";
     punchlineDiv.classList.remove('bubble');
    
     punchlineBtn.classList.toggle('hidden');
     newJokeBtn.classList.toggle('hidden');


    // console.log(punchline)
 
}
getJoke();

