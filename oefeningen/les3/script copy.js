let colors = ['color1', 'color2','color3','color4','color5','color6','color7','color8'];
let sides = ['side1','side2','side3','side4','side5','side6']

function build_die(die_color, die_side) {
    return '<div class="dobbelsteen '+die_color+' '+die_side+'"></div>'
}

function shuffle(array) {
    array.sort((a, b) => 0.5 - Math.random());
}

let dice = [];

for (let index = 0; index < colors.length; index++) {
    const color = colors[index];

    for (let index = 0; index < sides.length; index++) {
        const side = sides[index];
        
        const die = build_die(color, side);
    
        dice.push(die);
    }
}

shuffle(dice)

for (let index = 0; index < dice.length; index++) {
    const die = dice[index];

    dicebag.innerHTML += die;
}