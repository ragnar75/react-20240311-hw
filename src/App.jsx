import { Restaurants } from './components/restaurants/component';
import { Layout } from './components/layout/component';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Restaurants />
      </Layout>
    </Provider>
  );
};
