import styled from 'styled-components';

export const StyledCard = styled.div`
  padding: 20px;
  width: 400px;
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

  .info-wrapper {
    display: flex;
    align-items: center;

    .avatar-wrapper {
      .avatar-picture {
        border-radius: 100%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      margin-right: 30px;
    }

    .profile-informations-wrapper {
      .profile-informations {
        display: flex;
        margin-top: 10px;
        .profile-item {
          display: flex;
          align-items: center;

          .star-icon {
            margin-right: 5px;
          }

          &:not(:last-child) {
            margin-right: 10px;
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
      width: 40%;
      height: 30px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      transition: 0.3s;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 11px;

      &.edit {
        background: lightgreen;
        &:hover {
          background: #82dc82;
        }
      }

      &.remove {
        background: lightcoral;
        &:hover {
          background: #d87373;
        }
      }
    }
  }
`;
