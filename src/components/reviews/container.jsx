import { useSelector } from 'react-redux';
import { Reviews } from './component';
import { useRequest } from '../../hooks/use-request';

import { REQUEST_STATUSES } from '../../redux/ui/request/constants';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors';
import { fetchReviewsByRestaurantId } from '../../redux/entities/review/thunks/fetch-reviews-by-restaurant-id';
import { fetchUsers } from '../../redux/entities/user/thunks/fetch-users';

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewRequestStatus = useRequest(
    fetchReviewsByRestaurantId,
    restaurantId
  );
  const userRequestStatus = useRequest(fetchUsers);

  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  if (
    reviewRequestStatus === REQUEST_STATUSES.pending ||
    userRequestStatus === REQUEST_STATUSES.pending
  ) {
    return <div>Loading Reviews...</div>;
  }

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} />;
};
