import { Review } from '../review/component';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {!!reviews?.length &&
          reviews.filter(Boolean).map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
      </ul>
    </div>
  );
};
