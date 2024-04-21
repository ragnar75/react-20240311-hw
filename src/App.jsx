import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { DataProvider } from './pages/data-provider';
import { Homepage } from './pages/home-page';
import { RestaurantContainer } from './components/restaurant/container';
import { MenuContainer } from './components/menu/container';
import { ReviewsContainer } from './components/reviews/container';
import { DishContainer } from './components/dish/container';
import { RestaurantTabsContainer } from './components/restaurant-tabs/container';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<DataProvider />}
    >
      <Route
        index
        element={<Homepage />}
      />
      <Route
        path="restaurants"
        element={<RestaurantTabsContainer />}
      >
        <Route
          path=":restaurantId"
          element={<RestaurantContainer />}
        >
          <Route
            index
            element={<MenuContainer />}
          />
          <Route
            path="menu"
            element={<MenuContainer />}
          />
          <Route
            path="reviews"
            element={<ReviewsContainer />}
          />
        </Route>
      </Route>
      <Route
        path="dish/:dishId"
        element={<DishContainer />}
      />
    </Route>
  )
);

export const App = () => <RouterProvider router={router} />;
