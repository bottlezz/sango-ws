
class Deck {
    cards=[]; 
}
class Seat {
    heros = []; // int [] ying xiong
    hand = new Deck() // shou pai
    equip = new Deck() // zhuang bei
    cast = new Deck() // pan ding
    clientId =0; //socket id
}
class Table {
    seats = [] //8 players
    clinets = new Map(); //<clientId, seatid>
    draw = new Deck()
    discard = new Deck()
    empty = new Deck(); 
    constructor(){
        for(let i=0;i<8;i++){
            this.seats.push(new Seat());
        }
    }
    
}

module.exports = { 
    Deck:Deck,
    Table:Table, 
    Seat:Seat
};
