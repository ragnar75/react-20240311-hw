import { RestaurantsContainer } from './components/restaurants/container';
import { Layout } from './components/layout/component';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <RestaurantsContainer />
      </Layout>
    </Provider>
  );
};
