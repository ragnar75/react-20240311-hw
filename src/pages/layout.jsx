import { Footer } from '../components/footer/component';
import { Header } from '../components/header/component';

export const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
