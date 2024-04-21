import { useRef } from 'react';
import { Button } from '../button/component';
import { useCreateReviewMutation } from '../../redux/service/api';

import styles from './styles.module.scss';

export const NewReviewForm = ({ restaurantId, setIsShow }) => {
  const ratingInput = useRef();
  const textInput = useRef();

  const [createReview, { isLoading }] = useCreateReviewMutation();

  // console.log(isLoading, isSuccess)

  // Either my component is rendering too quickly, or isLoading is not functioning correctly,
  // because visually I don’t see the “Saving review” display.

  if (isLoading) {
    return <div>Saving Review...</div>;
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewInputsGroup}>
        <label>
          Rating
          <input
            type="text"
            ref={ratingInput}
            name="ratingInput"
            size={3}
          />
        </label>
        <label>
          Text
          <input
            type="text"
            ref={textInput}
            name="textInput"
            size={30}
          />
        </label>
      </div>
      <Button
        onClick={() => {
          setIsShow(false);
          createReview({
            restaurantId,
            newReview: {
              userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
              rating: ratingInput.current.value,
              text: textInput.current.value,
            },
          });
        }}
      >
        Create Review
      </Button>
    </div>
  );
};
