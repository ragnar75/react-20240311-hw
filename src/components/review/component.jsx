export const Review = ({ review }) => {
  return (
    <div>
      <p>{review.user}</p>
      <p>Rating: {review.rating}</p>
      <p>{review.text}</p>
    </div>
  );
};
