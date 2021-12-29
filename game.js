export class Deck {
    cards=[]; 
}
export class Player {
    heros = []; // int [] ying xiong
    hand = new Deck() // shou pai
    equip = new Deck() // zhuang bei
    cast = new Deck() // pan ding
    clientId =0; //socket id
}
export class Table {
    players = [] //8 players
    draw = new Deck()
    discard = new Deck()
    empty = new Deck(); 
}