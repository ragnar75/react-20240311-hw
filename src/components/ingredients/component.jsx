import { Ingredient } from '../ingredient/component';

export const Ingredients = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <div>
      <h4>Ingredients:</h4>
      <ul>
        {!!ingredients?.length &&
          ingredients
            .filter(
              (ingredient) => ingredient !== null && ingredient !== undefined
            )
            .map((ingredient, idx) => (
              // added key with unique ids to prevent errors in the console
              <li key={idx}>
                <Ingredient ingredient={ingredient} />
              </li>
            ))}
      </ul>
    </div>
  );
};
