import { ReviewContainer } from '../review/container';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {/* <h3>{`${reviewIds.length}${
        reviewIds.length > 1 ? ' Reviews' : ' Review'
      }`}</h3> */}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewContainer review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
