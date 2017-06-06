
export function randomNumberInRange(range){
  var randomNum;
  randomNum = Math.random() * range;
  randomNum = Math.round(randomNum);
  return randomNum;
}
