import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #06aec8;
  color: #fff;
  padding: 10px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;

    .paper-plane-icon {
      transform: rotate(8deg);
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
