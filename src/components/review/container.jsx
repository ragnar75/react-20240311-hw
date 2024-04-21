import { Review } from './component';

export const ReviewContainer = ({ review }) => {
  if (!review) {
    return null;
  }
  return <Review review={review} />;
};
