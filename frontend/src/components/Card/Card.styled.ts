import styled from 'styled-components';

export const StyledCard = styled.div`
  padding: 20px;
  width: 400px;
  height: 200px;
  border-radius: 8px;
  margin: 20px 10px;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: 0.1s ease-in-out;

  &:hover {
    border: 1px solid #06aec8;
    transform: scale(1.05);
    transition: 0.1s ease-in-out;
  }

  .avatar-picture {
    border-radius: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
