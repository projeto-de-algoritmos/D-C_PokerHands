import Card from '../models/card';

class Poker {
  static STRAIGHT_FLUSH = {name: "Straight Flush", value: 8000000};
  static FOUR_OF_A_KIND = {name: "Quadra", value: 7000000};
  static FULL_HOUSE = {name: "Full House", value: 6000000};
  static FLUSH = {name: "Flush", value: 5000000};
  static STRAIGHT = {name: "Sequência", value: 4000000};
  static SET = {name: "Três Pares", value: 3000000};
  static TWO_PAIR = {name: "Dois Pares", value: 2000000};
  static ONE_PAIR = {name: "Par", value: 1000000};
  static HIGH_CARD = {name: "Carta mais alta", value: 0};
  static ValueHand(h: (Card)[]) {
    const values = h.map(card => card.card);
    const sortedValues = values.sort((a, b) => a - b);
    const isStraight = sortedValues.every((v, i) => i === 0 || v - 1 === sortedValues[i - 1]);
    const isFlush = this.isFlush(h);
    const isFourOfAKind = this.isFourOfAKind(h);
    const isFullHouse = this.isFullHouse(h);
    const isThreeOfAKind = this.isThreeOfAKind(h);
    const isTwoPairs = this.isTwoPairs(h);
    const isOnePair = this.isOnePair(h);
  if (isStraight && isFlush) {
      return this.STRAIGHT_FLUSH;
    } else if (isFourOfAKind) {
      return this.FOUR_OF_A_KIND;
    } else if (isFullHouse) {
      return this.FULL_HOUSE;
    } else if (isFlush) {
      return this.FLUSH;
    } else if (isStraight) {
      return this.STRAIGHT;
    } else if (isThreeOfAKind) {
      return this.SET;
    } else if (isTwoPairs) {
      return this.TWO_PAIR;
    } else if (isOnePair) {
      return this.ONE_PAIR;
    }
    return this.HIGH_CARD;
  }

  static sortByRank(h: Card[]): Card[] {
    h.sort((a, b) => a.card - b.card);
    return h;
  }

  static isFlush(cards: Card[]): boolean {
    const suits = cards.map(card => card.suit);
    return suits.every(suit => suit === suits[0]);
  }


  static isFourOfAKind(h: Card[]): boolean {
    let a1, a2: boolean;

    if ( h.length !== 5 )
         return(false);

    h = this.sortByRank(h);

    a1 = h[0].card === h[1].card &&
      h[1].card === h[2].card &&
      h[2].card === h[3].card ;

    a2 = h[1].card === h[2].card &&
      h[2].card === h[3].card &&
      h[3].card === h[4].card ;

      return( a1 || a2 );

  }

  static isFullHouse(h: Card[]): boolean {
    let a1, a2: boolean;

    if ( h.length !== 5 )
         return(false);

     h = this.sortByRank(h);

    a1 = h[0].card === h[1].card &&
      h[1].card === h[2].card &&
      h[3].card === h[4].card ;

    a2 = h[0].card === h[1].card &&
      h[2].card === h[3].card &&
      h[3].card === h[4].card ;

      return( a1 || a2 );

  }

  static isStraight(h: Card[]): boolean {
    let i, testRank: number;
    if(h.length !== 5)
      return false;

    h = this.sortByRank(h);

    if(h[0].card === 1) {
      const a = h[1].card === 2 && h[2].card === 3 &&
                     h[3].card === 4 && h[4].card === 5;
      const b = h[1].card === 9 && h[2].card === 10 &&
                     h[3].card === 11 && h[4].card === 13 ;
      return (a || b);
    } else {
      testRank = h[0].card + 1;
      for(i = 1; i < 5; i++) {
        if(h[i].card !== testRank)
          return false;
        testRank++;
      }
      return true;
    }
  }

  static isThreeOfAKind(h: Card[]): boolean {
    let a1, a2, a3: boolean;

    if(h.length !== 5)
      return false;
  
    h = this.sortByRank(h);

    a1 = h[0].card === h[1].card && h[0].card === h[2].card;
    a2 = h[1].card === h[2].card && h[1].card === h[3].card;
    a3 = h[2].card === h[3].card && h[2].card === h[4].card;
    
    return( a1 || a2 || a3 );
  }

  static isTwoPairs(h: Card[]): boolean {
    let a1, a2, a3: boolean;

    if(h.length !== 5)
      return false;

    h = this.sortByRank(h);

    a1 = h[0].card === h[1].card && h[2].card === h[3].card;
    a2 = h[1].card === h[2].card && h[3].card === h[4].card;
    a3 = h[0].card === h[1].card && h[3].card === h[4].card;

    return( a1 || a2 || a3 );
  }

  static isOnePair(h: Card[]): boolean {
    let a1, a2, a3, a4: boolean;

    if(h.length !== 5)
      return false;

    h = this.sortByRank(h);

    a1 = h[0].card === h[1].card;
    a2 = h[1].card === h[2].card;
    a3 = h[2].card === h[3].card;
    a4 = h[3].card === h[4].card;

    return( a1 || a2 || a3 || a4 );
  }


}


export default Poker;
