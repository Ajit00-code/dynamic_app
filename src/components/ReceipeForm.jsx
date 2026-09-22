import { useState } from "react";

export default function ReceipeForm() {
  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);
  const [ingredientInput, setIngredientInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedIngredient = ingredientInput.trim();

    if (!trimmedIngredient) {
      return;
    }

    setIngredients((prevIngredients) => [...prevIngredients, trimmedIngredient]);
    setIngredientInput("");
  }

  return (
    <>
      <div className="FormContainer">
        <form className="add-ingredient-form" onSubmit={handleSubmit}>
          <div className="SearchBarContainer">
            <div className="SearchInputContainer">
              <input
                type="text"
                name="ingredient"
                value={ingredientInput}
                onChange={(event) => setIngredientInput(event.target.value)}
                placeholder="Enter ingredient here.."
              />
            </div>
            <div className="AddingredientBtnContainer">
              <button type="submit">+ Add Ingredient</button>
            </div>
          </div>
        </form>
      </div>

      <div className="IngredientsListContainer">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient}-${index}`}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </>
  );
}