import { Ingredient } from '../ingredient/component';
import styles from './styles.module.scss'

export const Ingredients = ({ ingredients }) => {
  return (
    <div className={styles.ingredients}>
      <span><em>{'('}Ingredients: </em></span>
      <ul className={styles.ingredientsList}>
        {!!ingredients?.length &&
          ingredients?.filter(Boolean).map((ingredient, idx) => (
            <li key={idx}>
              <Ingredient ingredient={ingredient} />
            </li>
          ))}
      </ul>
      <span><em>{')'}</em></span>
    </div>
  );
};
