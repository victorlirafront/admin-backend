import styled from 'styled-components';

export const StyledCardsWrapper = styled.div`
  padding: 10px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 50px;
    }
  }
`;
