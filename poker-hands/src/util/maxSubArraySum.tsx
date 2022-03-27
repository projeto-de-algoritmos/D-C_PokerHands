import Poker from './Poker';
import Card from '../models/card';

export interface SumResult {
  value: number,
  hands: Array<Card[]>
}

function maxCrossingSum(array: Array<Card[]>, mid: number) : SumResult {
  let leftSum = 0, rightSum = 0;
  let leftHands: Array<Card[]> = [], rightHands: Array<Card[]> = [];
  mid = Math.floor(mid);
  array.slice(0, mid).reverse().every(hand => {
    const value = Poker.ValueHand(hand).value;
    if(value > 0) {
      leftSum += value;
      leftHands.push(hand);
    }
    return value; //if 0, exit loops
  });
  array.slice(mid).every(hand => {
    const value = Poker.ValueHand(hand).value;
    if(value > 0) {
      rightSum += value;
      rightHands.push(hand);
    }
    return value; //if 0, exit loops
  });

  return {value: leftSum + rightSum, hands: leftHands.concat(rightHands)};
}

function maxSubArraySum(array: Array<Card[]>): SumResult {
  if(array.length === 1) {
    return {value: Poker.ValueHand(array[0]).value, hands: [array[0]]};
  }
  const middle = array.length / 2;

  const leftSide: SumResult = maxSubArraySum(array.slice(0, middle));
  const rightSide: SumResult = maxSubArraySum(array.slice(middle));
  const crossSum = maxCrossingSum(array, middle);

  if(leftSide.value >= rightSide.value && leftSide.value >= crossSum.value) {
    return leftSide;
  } else if(rightSide.value >= leftSide.value && rightSide.value >= crossSum.value) {
    return rightSide;
  } else {
    return crossSum;
  }

}

export default maxSubArraySum;
