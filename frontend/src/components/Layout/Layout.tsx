import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { LayoutProps } from './Layout.types';

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
