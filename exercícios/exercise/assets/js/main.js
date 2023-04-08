const elements = [
  { tag: 'p', text: 'Phrase 1' },
  { tag: 'div', text: 'Phrase 2' },
  { tag: 'footer', text: 'Phrase 3' },
  { tag: 'section', text: 'Phrase 4' }
];

const start = (elements) => {
  const container = document.querySelector('.container');
  const div = createTag('div');
  container.appendChild(div);

  for (let i = 0; i < elements.length; i++) {
    const { tag, text } = elements[i];

    setTag(tag, text);
  }
}

const createTag = (tag) => {
  const tagElement = document.createElement(tag);
  return tagElement;
}

const setTag = (tag, text) => {
  const div = document.querySelector('.container div');

  const tagElement = createTag(tag);
  tagElement.innerHTML = text;
  div.appendChild(tagElement);
}

start(elements);