import { restaurants } from '../../constants/mock';
import { Restaurant } from '../restaurant/component';
export const Restaurants = () => {
  // if (!restaurants) {
  //   return null;
  // }

  return (
    <main>
      {!!restaurants?.length &&
        restaurants
          .filter((elm) => elm !== null && elm !== undefined)
          .map((elm) => (
            // added key with unique ids to prevent errors in the console
            <div key={elm.id}>
              <Restaurant restaurant={elm} />
            </div>
          ))}
    </main>
  );
};
