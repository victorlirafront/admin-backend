import { render, screen } from '@testing-library/react';
import CardsWrapper from './CardsWrapper';
import { StyledCardsWrapper } from '../CardsWrapper/CardsWrapper.styled';

describe('CardsWrapper Component', () => {
  it('should render children correctly', () => {
    render(
      <CardsWrapper>
        <div>Test Content</div>
      </CardsWrapper>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should have the correct data-aos attributes', () => {
    render(
      <CardsWrapper>
        <div>Test Content</div>
      </CardsWrapper>,
    );

    const wrapper = screen.getByText('Test Content').closest(StyledCardsWrapper);

    expect(wrapper).toHaveAttribute('data-aos', 'fade-down');
    expect(wrapper).toHaveAttribute('data-aos-offset', '0');
    expect(wrapper).toHaveAttribute('data-aos-delay', '200');
  });
});
