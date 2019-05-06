function checkNumber(card) {
  card = card.replace(/\D/g, '').split('').map(Number);
  if (card.length === 0 || card.length < 12 || card.length > 19 || card.every(num => num === card[0])) return false;
  return card;
}
function calculation(card) {
  return card
    .map((number, index) => index % 2 === 0 ? number * 2 : number)
    .map((number) => number > 9 ? number - 9 : number)
    .reduce((elem, result) => (result + elem));
}
function cardValidator(card) {
  const validNumber = checkNumber(card);
  if (validNumber) {
    return calculation(validNumber) % 10 === 0;
  } else {
    return false;
  }
}
module.exports.cardValidator = cardValidator;
