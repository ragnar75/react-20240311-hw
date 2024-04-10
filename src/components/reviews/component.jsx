import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Review } from '../review/component';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors';
import { fetchReviewsByRestaurantId } from '../../redux/entities/review/thunks/fetch-reviews-by-restaurant-id';

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  const reviewIds =
    useSelector((state) => selectRestaurantReviewIds(state, restaurantId)) ||
    [];

  console.log('restaurantId: ' + restaurantId);
  console.log(reviewIds);

  if (!reviewIds.filter(Boolean)?.length) {
    return null;
  }

  return (
    <div>
      <h3>{`${reviewIds.length}${
        reviewIds.length > 1 ? ' Reviews' : ' Review'
      }`}</h3>
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
