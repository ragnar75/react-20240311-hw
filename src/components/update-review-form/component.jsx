import { useRef } from 'react';
import { Button } from '../button/component';
import { useUpdateReviewMutation } from '../../redux/service/api';

import styles from './styles.module.scss';

export const UpdateReviewForm = ({ review, setIsEditable }) => {
  const ratingInput = useRef();
  const textInput = useRef();

  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  if (isLoading) {
    return <div>Update Review...</div>;
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewInputsGroup}>
        <label>
          Rating
          <input
            type="text"
            name="ratingInput"
            ref={ratingInput}
            size={3}
            defaultValue={review.rating}
          />
        </label>
        <label>
          Text
          <input
            type="text"
            name="textInput"
            ref={textInput}
            size={30}
            defaultValue={review.text}
          />
        </label>
      </div>
      <Button
        onClick={() => {
          setIsEditable(false);
          updateReview({
            review: {
              id: review.id,
              userId: review.userId,
              rating: ratingInput.current.value,
              text: textInput.current.value,
            },
          });
        }}
      >
        Update Review
      </Button>
    </div>
  );
};
