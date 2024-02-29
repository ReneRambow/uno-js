let colors = ['color1', 'color2','color3','color4'];
let numbers = ['nr0','nr1','nr1','nr2','nr2','nr3','nr3','nr4','nr4','nr5','nr5','nr6','nr6','nr7','nr7','nr8','nr8', 'nr9','nr9','skip', 'skip', 'reverse', 'reverse', 'plus2', 'plus2','joker', 'plus4']


function build_card(card_color, card_number) {
    return '<div class="card '+card_color+' '+card_number+'"></div>'
}

function shuffle(array) {
    array.sort((a, b) => 0.5 - Math.random());
}


let deck = [];

for (let index = 0; index < colors.length; index++) {
    const color = colors[index];



    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
            
        const card = build_card(color, number);
    
        deck.push(card);
    }
}

function grab_card(){
    if (deck.length > 0 ){
        shuffle(deck)
        const Deck = deck.pop()
        carddeck.innerHTML += Deck;
    }
    
    else{
        alert("De kaarten zijn op")
        this.remove()
    }

}

grab.addEventListener('click', grab_card);