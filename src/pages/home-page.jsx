import { Link, Outlet } from 'react-router-dom';

// import '../styles.scss'

export const Homepage = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <Link to="/restaurants">Goto Restaurants</Link>
      <Outlet />
    </div>
  );
};
