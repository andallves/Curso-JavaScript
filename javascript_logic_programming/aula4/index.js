// IF, ELSE IF, ELSE


// // 'If' can to be used alone
// Always that I use the word 'else', It's necessary to use a 'if' before
// I can to have a lot of 'else ifs' like verify
// I can to have only one 'else' in the last verify
// We can to use the conditional without 'else if', using only 'if and else';
const hour = 20;

if (hour >= 0 && hour <= 11) {
  console.log('Good morning!');
} else if (hour >= 12 && hour <= 17) {
  console.log('Good Afternoon!');
} else if (hour >= 18 && hour <= 23) {
  console.log('Good Evening');
} else {
  console.log('Hello')
}
