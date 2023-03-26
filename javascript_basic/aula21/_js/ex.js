//    EXERCISE

// Take the value by input
// Pass to object
// Input to print


const myScoop = (e) => {
  const send = document.querySelector('#send');
  const people = [];

  send.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = send.querySelector('#name').value;
    const lastname = send.querySelector('#lastname').value;
    const weight = send.querySelector('#weight').value;
    const height = send.querySelector('#height').value;

    const createPerson = (name, lastname, weight, height) => {
      return { name, lastname, weight, height };
    }

    const person = createPerson(name, lastname, weight, height);
    people.push(person);

    const print = document.querySelector('#print');
    print.innerHTML += `<p>${person.name} ${person.lastname} ${person.weight} ${person.height} </p>`;

  });



}

myScoop();