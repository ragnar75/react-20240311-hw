import { createRoot } from 'react-dom/client';
import { Restaurants } from './components/restaurants/component';
import { Layout } from './components/layout/component';

createRoot(document.getElementById('root')).render(
  <Layout>
    <Restaurants />
  </Layout>
);
