import { useState } from 'react';
import { Button } from '../button/component';
import { UserContainer } from '../user/container';

import styles from './styles.module.scss';
import { UpdateReviewForm } from '../update-review-form/component';

export const Review = ({ review }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className={styles.reviewContainer}>
      <div className={isEditable ? styles.editable : ''}>
        <p>Rating: {review?.rating}</p>
        <p>
          <em>{review?.text}</em>
        </p>
        <UserContainer userId={review?.userId} />
        <Button onClick={() => setIsEditable(true)}>Edit</Button>
      </div>
      {isEditable && (
        <UpdateReviewForm
          review={review}
          setIsEditable={setIsEditable}
        />
      )}
    </div>
  );
};
