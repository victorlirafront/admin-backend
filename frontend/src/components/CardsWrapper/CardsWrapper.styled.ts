import styled from 'styled-components';

export const StyledCardsWrapper = styled.div`
  padding: 10px;
  min-height: calc(100vh - 128px);
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
    margin: 100px 0 100px 0;

    @media screen and (max-width: 768px) {
      margin: 50px 0 50px 0;
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 50px;

      .title-error {
        color: #f08080;
      }
    }
  }
`;
