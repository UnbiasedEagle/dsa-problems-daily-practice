const groceries = ['Milk', 'Eggs', 'Cereal', 'Salami', 'Juice'];

const firstItem = groceries[0];
const lastItem = groceries[groceries.length - 1];
const thirdItem = groceries[2];

groceries.push('Potato');
groceries.unshift('Ice Cream');

groceries.splice(3, 0, 'Cheese');

groceries.pop();

groceries.shift();

const foundIndex = groceries.indexOf('Eggs');
