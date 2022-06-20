let price = prompt('Enter Price: ');
let rate = prompt('Enter your Rate: ');
let term = prompt('Enter Time(in years): ');
const interest = ( price - (price * rate * term) /100);
console.log(
  ` Your interst is R${interest}`
);