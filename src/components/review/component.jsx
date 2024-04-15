import { UserContainer } from '../user/container';

import styles from './styles.module.scss';

export const Review = ({ review }) => {
  return (
    <div className={styles.reviewContainer}>
      <p>Rating: {review?.rating}</p>
      <p>
        <em>{review?.text}</em>
      </p>
      <UserContainer userId={review?.userId} />
    </div>
  );
};
