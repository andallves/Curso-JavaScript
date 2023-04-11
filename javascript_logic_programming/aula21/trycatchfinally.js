// HANDLING and THROWING THE ERRORS -> Try, Catch and Finally

try {
  // This part of the code is execute when there isn't errors
  // console.log(a); -> This is an error
  console.log('I open a file');
  console.log('I manupulated the file and generated an error');
  console.log('I closed the file');

  try {
    // console.log(b); // This is an error
  } catch (e) {
    console.log('There was an error')
  } finally {
    console.log(`I'm FINALLY too`)
  } // We can nest a '  try' inside the other 'try'

} catch (e) {
  // This part of the code is execute when there is an error.
  console.log('Handling the error');
} finally {
  // This part of the code is always execute, but we can omit this when we don't want to execute code ever.
  console.log(`FINALLY: I'm always execute`);
}