import styled from 'styled-components';

export const StyledUser = styled.div`
  min-height: calc(100vh - 128px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 20px;
`;

export const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 40px;
    color: #6b7280;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }

    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 19px;
    color: #6b7280;

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

export const ProfileInfo = styled.div`
  background: #fff;
  padding: 30px 50px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  margin: 0 auto;

  @media screen and (max-width: 425px) {
    padding: 30px 40px;
  }

  p {
    font-size: 18px;
    color: #6b7280;
    margin: 10px 0;

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }

  strong {
    color: #6b7280;

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const Quote = styled.blockquote`
  font-style: italic;
  color: #555;
  border-left: 4px solid #ccc;
  padding-left: 20px;
  margin-top: 20px;
  font-size: 14px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;

  .quote-title {
    font-size: 16px;
    font-weight: bold;
    color: #6b7280;
    margin-bottom: 10px;
  }
`;

export const Footer = styled.div`
  text-align: center;
  color: #888;
  font-size: 16px;
  margin-top: 20px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

export default StyledUser;
