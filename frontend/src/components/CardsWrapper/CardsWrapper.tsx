import { StyledCardsWrapper } from '../CardsWrapper/CardsWrapper.styled';
import { CardsWrapperProps } from './CardsWrapper.types';

function CardsWrapper({ children }: CardsWrapperProps) {
  return (
    <StyledCardsWrapper>
      <div className="container">{children}</div>
    </StyledCardsWrapper>
  );
}

export default CardsWrapper;
