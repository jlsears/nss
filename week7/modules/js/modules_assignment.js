/*
  .....  YOUR MISSION  .....

  1. Make a JavaScript module that has properties
      that describe your favorite food. One
      property must be an array that will hold
      incredients.

  2. Create a method that allows you to add
      ingredients for your favorite food.

  3. Use the method you built above to add all of
      the ingredients you can think of for your food.

*/

var favoriteFood = {
  name: "chicken marsala",
  type: "Italian",
  ingredients: [],
  addIngredients: function (ingredient) {
    this.ingredients.push(ingredient);
}
}

//setIngredients: function (newIngredient) {
    //this.ingredients = newIngredient.pop();
//}

var myIngredients = ["pasta", "mushrooms", "chicken"];

myIngredients.map(function (i) {
    favoriteFood.addIngredients(i);
})

console.log(favoriteFood);
