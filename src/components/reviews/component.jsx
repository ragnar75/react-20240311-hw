import { Review } from '../review/component';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {!!reviews?.length &&
          reviews
            .filter((review) => review !== null && review !== undefined)
            .map((review) => (
              // added key with unique ids to prevent errors in the console
              <li key={review.id}>
                <Review review={review} />
              </li>
            ))}
      </ul>
    </div>
  );
};
