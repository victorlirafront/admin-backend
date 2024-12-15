import { StyledCardsWrapper } from '../CardsWrapper/CardsWrapper.styled';
import { CardsWrapperProps } from './CardsWrapper.types';

function CardsWrapper({ children }: CardsWrapperProps) {
  return (
    <StyledCardsWrapper data-aos="fade-down" data-aos-offset="0" data-aos-delay="200">
      <div className="container">{children}</div>
    </StyledCardsWrapper>
  );
}

export default CardsWrapper;
