import { Review } from '../review/component';

export const Reviews = ({ reviewIds }) => {
  if (!reviewIds.filter(Boolean).length) {
    return null;
  }

  return (
    <div>
      <h3>{`${reviewIds.length}${reviewIds.length > 1 ? ' Reviews': ' Review'}`}</h3>
      <ul>
        {reviewIds?.map((reviewId) => (
          <li key={reviewId}>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
