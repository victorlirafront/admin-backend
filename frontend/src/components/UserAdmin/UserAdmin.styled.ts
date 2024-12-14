import styled from 'styled-components';

export const StyledUserAdmin = styled.div`
  padding: 10;
  position: relative;

  .search-group {
    display: flex;
    .search-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 600px;
      margin-right: 30px;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      #search {
        flex: 1;
        border: none;
        padding: 15px 20px;
        border-radius: 4px;
        transition: 0.1s ease;
        font-size: 16px;
        margin-right: 3px;

        &:focus {
          outline: none;
          box-shadow: 0 0 5px #4a90e2;
        }

        &::placeholder {
          color: #a0a0a0;
          font-size: 16px;
          font-style: italic;
          transition: color 0.3s ease;
        }

        &:focus::placeholder {
          color: #d0d0d0;
        }
      }

      .search-icon {
        margin-right: 20px;
        margin-left: 20px;
        height: 30px;
        width: 30px;
        cursor: pointer;
      }

      .search-icon-wrapper {
        display: flex;
        align-items: center;
        font-size: 11px;
        height: 100%;
        background: #f3f3f3;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          background: #e8e7e7;
        }
      }
    }
    .add-new-user {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      transition: 0.3s;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 11px;
      background: #06aec8;
      color: #fff;
      padding: 10px 20px;

      &:hover {
        background: #0392a9;
      }
    }
  }
`;
