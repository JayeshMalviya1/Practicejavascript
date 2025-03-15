let Randomnumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prev =[]
let playGame = true
let numGuess = 1;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
         const guesse = parseInt(userInput.value)
         validateGuess(guesse)
    })
    
}

function validateGuess(guesse){
    if(isNaN(guesse)){
        alert('please enter a valid number')
        }else if(guesse<1){
             alert('please enter a number more than 1')
            }else if(guesse>100){
              alert('please enter a number less than 100')
                 }else{
                  prev.push(guesse)
                    }if( numGuess === 11){
                         displayguess(guesse)
                           displaymessage('Game Over. Random number was '+ Randomnumber)
                            endGame()
                            }else{
        displayguess(guesse)
        checkguess(guesse)
    }
}

function checkguess(guesse){
    if(guesse === Randomnumber){
        displaymessage('you guessed it right')
             }else if(guesse<Randomnumber){
                 displaymessage('number is too low')
             }else if(guesse>Randomnumber){
        displaymessage('number is too high')
          }
}

function displayguess(guesse){
         userInput.value=''
             guessSlot.innerHTML += `${guesse},`
             numGuess++
        remaining.innerHTML = `${10-numGuess}`
}

function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value =''
        userInput.setAttribute('disabled','')
            p.classList.add('button')
            p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
        startOver.appendChild(p)
    playGame=false
    newGame()

}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
         newGameButton.addEventListener('click',function(e){
            Randomnumber = parseInt(Math.random()*100+1)
                     prev =[]
                     numGuess = 1;
                guessSlot.innerHTML = '';
             remaining.innerHTML = `${10- numGuess} `;
            userInput.removeAttribute('disabled','')
          startOver.removeChild(p)
         playGame = true
    })

    
}
