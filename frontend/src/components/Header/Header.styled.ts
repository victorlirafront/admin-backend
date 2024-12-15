import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #1cc695;
  color: #fff;
  padding: 10px 20px;
  @media screen and (max-width: 768px) {
    padding: 10px 10px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1328px;
    margin: 0 auto;

    .paper-plane-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;

      .paper-plane-icon {
        transform: rotate(8deg);
        margin-right: 10px;

        @media screen and (max-width: 768px) {
          font-size: 12px;
          height: 30px;
          width: auto;
        }
      }

      .home {
        font-weight: bolder;
        text-transform: uppercase;
        font-size: 14px;

        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }
    }

    .header-menu-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;

      .header-menu-list-item {
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bolder;
        font-size: 14px;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          font-size: 12px;
        }

        &.selected {
          color: #fff;
        }

        color: #e3e3e3;

        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }
  }
`;
