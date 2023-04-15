// Recursive function -> It's a function that call itself 

function recursive(max) {
  if (max >= 10) return; // There is a limit that Its possible to call the function
  max++;
  console.log(max);
  recursive(max);
}

recursive(0);