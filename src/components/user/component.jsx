import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/user/selectors';
import { fetchUsers } from '../../redux/entities/user/thunks/fetch-users';

export const User = ({ userId }) => {
  // const user = useSelector((state) => state.user.entities[userId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const user = useSelector((state) => selectUserById(state, userId));

  if (!user) {
    return null;
  }

  return <p>{user?.name}</p>;
};
