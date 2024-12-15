import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render the footer with the correct content', () => {
    render(<Footer />);

    expect(screen.getByText('Desenvolvido por:')).toBeInTheDocument();
    expect(screen.getByText('Victor Lira')).toBeInTheDocument();
  });

  it('should have the correct data-aos attributes', () => {
    render(<Footer />);

    const footerElement = screen.getByText('Desenvolvido por:').closest('footer');

    expect(footerElement).toHaveAttribute('data-aos', 'fade-up');
    expect(footerElement).toHaveAttribute('data-aos-offset', '0');
    expect(footerElement).toHaveAttribute('data-aos-delay', '250');
  });
});
