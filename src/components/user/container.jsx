import { User } from './component';
import { useGetUsersQuery } from '../../redux/service/api';

export const UserContainer = ({ userId }) => {
  const { currentData: user, isLoading } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      currentData: result.currentData?.find(({ id }) => id === userId),
    }),
  });

  if (isLoading) {
    return <div>Loading User...</div>;
  }

  if (!user) {
    return null;
  }

  const { name } = user;

  return <User name={name} />;
};
