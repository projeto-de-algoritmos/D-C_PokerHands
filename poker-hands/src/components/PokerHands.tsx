import Card from '../models/card';
import Deck from '../models/Deck';
import Poker from '../models/Poker';

const PokerHands = () => {
  const deck = new Deck();
  const nHands = 25;
  let pokerHands : Array <Array<Card>> = [];
  for (let i = 0; i < nHands; i++) {
    pokerHands.push(deck.drawHand());   
  }
  return (
    <div>
      {pokerHands.map((hand, index) => (
        <div key={index}>
          <h3>Hand {index + 1} ({Poker.ValueHand(hand).name})</h3>
          <ul>
            {hand.map((card, index) => (
              <li key={index}>{card ? card.card + card.suit : 'Empty'}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
}


export default PokerHands;
