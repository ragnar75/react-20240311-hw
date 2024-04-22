import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Reviews } from './component';
import { NewReviewForm } from '../new-review-form/component';
import { Button } from '../button/component';
import { useGetReviewsByRestaurantIdQuery } from '../../redux/service/api';

import styles from './styles.module.scss';

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const [isShow, setIsShow] = useState(false);

  const {
    currentData: reviews,
    isLoading,
    refetch,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <div>Loading Reviews...</div>;
  }

  if (!reviews?.length) {
    return null;
  }

  
  return (
    <section>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => setIsShow(true)}>Add Review</Button>
        
      {/* I have doubts that refetch() works correctly */}
        <Button onClick={refetch}>Refetch Reviews</Button>
      </div>
      {isShow && (
        <NewReviewForm
          restaurantId={restaurantId}
          setIsShow={setIsShow}
        />
      )}
      <Reviews reviews={reviews} />
    </section>
  );
};
