import Card from '../models/card';
import Deck from '../models/Deck';
import Poker from '../util/Poker';
import maxSubArraySum from '../util/maxSubArraySum';
import "./PokerHands.scss";
const PokerHands = () => {
  const deck = new Deck();
  const nHands = 100;
  let pokerHands : Array <Array<Card>> = [];
  for (let i = 0; i < nHands; i++) {
    pokerHands.push(deck.drawHand());   
  }
  const cardMap = (card: Card, index: number) => (
    <li key={index}><img src={card ? 'images/' + card.card + card.suit + '.png' : 'Empty'}/></li>
  );
  const handMap = (hand: Card[], index: number) => (
        <div key={index}>
          <p><b>{Poker.ValueHand(hand).name}</b></p>
          <ul>
            {hand.map(cardMap)}
          </ul>
        </div>
      )
  return (
    <div className="hands">
      <div className="d-flex">
        {pokerHands.map(handMap)}
      </div>
      <h3>Melhor sequência de mãos</h3>
      <div className="d-flex justify-content-center">
        {maxSubArraySum(pokerHands).hands.map(handMap)}
      </div>
    </div>
  );
}


export default PokerHands;
