// FOR OF

// For classic - General with iterable (array ou Strings)
// For in - Return the index or key (Strings, array or Ojects)
// For of - Return the value em sim (iterable, arrays or Strings)

const name = 'Andre Alves Pereira';

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

for (let i in name) {
  console.log(name[i]);
}

for (let value of name) {
  console.log(value);
}

const names = ['Andre', 'Cleylton', 'Brena'];
for (let name of names) {
  console.log(name);
}

names.forEach((value, index, array) => {
  console.log(value, index, array);
});