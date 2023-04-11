// HANDLINGTH AND THROWING ERRORS

// const doNotExist = 'I exist'
// try { // In this block we can take anything that it can throw an error.
//   console.log(doNotExist);
// } catch (error) { // Here I'm taking the error and I can do something with it.
//   console.log(`doNotExist don't exist`)
// }

const sum = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números'); // Throwing the erro;
  }
  return x + y;
}

// If any error occurs in try block the catch block will be execute, but if don't error occurs the try block will be execute. 
try {
  console.log(sum(1, 2));
  console.log(sum('a', 5));
} catch (error) {
  // Here I can take the error and do something to it.
  // console.log(error); -> Don't showed system fail to user.
  console.log('Something more friendly to user');
}