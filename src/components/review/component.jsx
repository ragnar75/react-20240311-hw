import { useSelector } from 'react-redux';
import { User } from '../user/component';
import { selectReviewById } from '../../redux/entities/review/selectors';
import styles from './styles.module.scss';

export const Review = ({ reviewId }) => {
  // const review = useSelector((state) => state.review.entities[reviewId]);

  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  return (
    <div className={styles.reviewContainer}>
      <p>Rating: {review?.rating}</p>
      <p>
        <em>{review?.text}</em>
      </p>
      <User userId={review?.userId} />
    </div>
  );
};
