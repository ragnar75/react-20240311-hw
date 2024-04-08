import { useSelector } from 'react-redux';

export const User = ({ userId }) => {
  const user = useSelector((state) => state.user.entities[userId]);

  if (!user) {
    return null;
  }

  return <p>{user?.name}</p>;
};
