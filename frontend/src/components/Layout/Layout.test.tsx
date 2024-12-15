import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { ReduxProvider } from '@/redux/provider';

// Mock do Header e Footer
jest.mock('@/components/Header/Header', () => ({
  __esModule: true,
  default: () => <div>Header</div>,
}));

jest.mock('@/components/Footer/Footer', () => ({
  __esModule: true,
  default: () => <div>Footer</div>,
}));

describe('Layout Component', () => {
  it('should render Header, main content, and Footer', () => {
    render(
      <ReduxProvider>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </ReduxProvider>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
