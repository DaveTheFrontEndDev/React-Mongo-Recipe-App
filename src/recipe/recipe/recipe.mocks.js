const recipe = {
  id: 1,
  title: 'Pancake Tower!',
  vegetarian: true,
  serves: 7,
  dateCreated: '02-02-17',
  image: {
    small: '/resources/recipes/1-small.png',
    large: '/resources/recipes/1-large.png',
  },
  ingredients: [
    {
      amount: '5',
      item: 'Carrots',
    },
    {
      amount: '100g',
      item: 'Cheese',
    },
    {
      amount: '8 ounces',
      item: 'Sugar',
    },
  ],
  steps: [
    'Measure carrots',
    'Take a break',
    'Hang up washing',
    'Drink some wine',
    'Buy a ready meal and stick in microwave',
  ],
};

export default recipe;
