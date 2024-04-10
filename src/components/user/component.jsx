import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/user/selectors';

export const User = ({ userId }) => {
  // const user = useSelector((state) => state.user.entities[userId]);

  const user = useSelector((state) => selectUserById(state, userId));

  if (!user) {
    return null;
  }

  return <p>{user?.name}</p>;
};
