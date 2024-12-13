import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { LayoutProps } from './Layout.types';
import { ReduxProvider } from '@/redux/provider';

const Layout = ({ children }: LayoutProps) => (
  <ReduxProvider>
    <Header />
    <main>{children}</main>
    <Footer />
  </ReduxProvider>
);

export default Layout;
