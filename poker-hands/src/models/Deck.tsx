import Card from './card';

class Deck {
  deck: Array<Card>;
  CardOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  SuitOptions = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
  index = 0;
  constructor(){
    this.deck = [];
    this.createDeck();
    this.shuffle();
  }

  createDeck(){
    for (let i = 0; i < this.CardOptions.length; i++) {
      for (let j = 0; j < this.SuitOptions.length; j++) {
        this.deck.push({card: this.CardOptions[i], suit: this.SuitOptions[j]});
      }
    }
  }

  drawHand(){
    let hand = new Array<Card>();
    for (let i = 0; i < 5; i++) {
      if(this.deck.length > 0){
        if(this.index >= this.deck.length){
          this.shuffle();
          this.index = 0;
        }
        let card = this.deck[this.index];
        if(card)
          hand.push(card);
        this.index++;
      }
    }
    return hand;
  }

  shuffle(){
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
  reset(){
    this.deck = [];
    this.createDeck();
    this.shuffle();
  }
  
}

export default Deck;
