document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cards = [
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream', 
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog', 
            img: 'src/images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream', 
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog', 
            img: 'src/images/hotdog.png'
        }
    ]

    console.log(cards)
    cards.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenids = []
    let cardsWon = []

    function createBoard() {
        for (let i=0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        cardsChosenids.push(cardId)
        this.setAttribute('src', cards[cardId]['img'])
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    
    function checkForMatch() {
        const cardss = document.querySelectorAll('img')
        const optionOneId = cardsChosenids[0]
        const optionTwoId = cardsChosenids[1]
        if (cardsChosenids[0] == cardsChosenids[1]) {
            alert('You have clicked the same image!')
            cardss[optionOneId].setAttribute('src', 'src/images/blank.png')
            cardss[optionTwoId].setAttribute('src', 'src/images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You have found a match!')
            cardss[optionOneId].setAttribute('src', 'src/images/white.png')
            cardss[optionTwoId].setAttribute('src', 'src/images/white.png')
            cardss[optionOneId].removeEventListener('click', flipCard)
            cardss[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cardss[optionOneId].setAttribute('src', 'src/images/blank.png')
            cardss[optionTwoId].setAttribute('src', 'src/images/blank.png')
            alert('Sorry, try again!')
        }

        cardsChosen = []
        cardsChosenids = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === 6) {
            resultDisplay.textContent = 'Congratulations! You have won!'
        }
    }

    createBoard()

})