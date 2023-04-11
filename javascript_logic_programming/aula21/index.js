const returnHour = (data) => {
  if (data && !(data instanceof Date)) { // If date it's a instance of Date
    throw new TypeError(`Waiting instance of date`);
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:18')
  const hour = returnHour(data);
  console.log(hour);

} catch (e) {
  // Handling error
  console.log(e);
} finally {
  console.log('Have a nice day.')
}
