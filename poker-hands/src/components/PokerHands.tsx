import Card from '../models/card';
import Deck from '../models/Deck';
import Poker from '../util/Poker';
import maxSubArraySum from '../util/maxSubArraySum';
const PokerHands = () => {
  const deck = new Deck();
  const nHands = 5;
  let pokerHands : Array <Array<Card>> = [];
  for (let i = 0; i < nHands; i++) {
    pokerHands.push(deck.drawHand());   
  }
  const cardMap = (card: Card, index: number) => (
    <li key={index}>{card ? card.card + card.suit : 'Empty'}</li>
  );
  const handMap = (hand: Card[], index: number) => (
        <div key={index}>
          <h3>Hand {index + 1} (value: {Poker.ValueHand(hand).value}) </h3>
          <ul>
            {hand.map(cardMap)}
          </ul>
        </div>
      )
  return (
    <div>
      {pokerHands.map(handMap)}
      <h3>Max Sub Array Sum</h3>
      <p>{maxSubArraySum(pokerHands).hands.map(handMap)}</p>
    </div>
  );
}


export default PokerHands;
