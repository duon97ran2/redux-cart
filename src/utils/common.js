export const currencyFormat = (number) => {
  return number.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'VND',
  });
}