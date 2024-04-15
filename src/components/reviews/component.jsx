import { ReviewContainer } from '../review/container';

export const Reviews = ({ reviewIds }) => {
  return (
    <div>
      <h3>{`${reviewIds.length}${
        reviewIds.length > 1 ? ' Reviews' : ' Review'
      }`}</h3>
      <ul>
        {reviewIds.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
