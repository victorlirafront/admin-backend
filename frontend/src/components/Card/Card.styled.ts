import styled from 'styled-components';

export const StyledCard = styled.div`
  padding: 20px;
  width: 430px;
  border-radius: 8px;
  margin: 20px 10px;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: 0.1s ease-in-out;

  @media screen and (max-width: 490px) {
    width: 90%;
    margin: 10px 0px;
  }

  &:hover {
    border: 1px solid #06aec8;
    transform: scale(1.05);
    transition: 0.1s ease-in-out;
  }

  .info-wrapper {
    display: flex;
    align-items: center;

    .avatar-wrapper {
      .avatar-picture {
        border-radius: 100%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        width: 70px;
        height: 70px;
      }
      margin-right: 30px;
    }

    .profile-informations-wrapper {
      h1 {
        font-size: 20px;
        color: #6b7280;

        @media screen and (max-width: 490px) {
          font-size: 16px;
        }
      }
      .profile-informations {
        display: flex;
        margin-top: 10px;
        .profile-item {
          display: flex;
          align-items: center;
          color: #6b7280;

          @media screen and (max-width: 490px) {
            font-size: 12px;
          }

          .star-icon {
            margin-right: 5px;
          }

          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;

    .button {
      width: 30%;
      height: 30px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      transition: 0.3s;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 11px;
      color: #fff;

      @media screen and (max-width: 490px) {
        font-size: 8px;
      }

      &.edit {
        background: #1cc695;
        &:hover {
          background: #18b488;
        }
      }

      &.remove {
        background: lightcoral;
        &:hover {
          background: #d87373;
        }
      }

      &.open {
        background: #06aec8;
        &:hover {
          background: #039bb2;
        }
      }
    }
  }
`;
