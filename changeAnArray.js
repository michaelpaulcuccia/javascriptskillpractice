let ingredients = [
    'two ounces of cream cheese, three tablespoons of baking powder',
    'six teaspoons of milk, four cups of flour',
    'one tablespoons of vanilla, a teaspoon of salt',
];

const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

const newIngredients = ingredients.map(element => {
    let ingredient = element.toLocaleLowerCase();
    unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i])
    });
    console.log(ingredient);
});
