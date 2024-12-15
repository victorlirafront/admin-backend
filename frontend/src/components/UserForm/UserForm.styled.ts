import styled from 'styled-components';

const StyledUserForm = styled.form`
  width: 100%;
  padding: 40px;
  .inputs-container {
    width: 100%;
    .form-control {
      display: flex;
      text-align: start;
      flex-direction: column;
      width: 100%;
      margin-top: 30px;
      label {
        color: #6b7280;
      }

      input {
        padding: 13px 20px;
        border: none;
        outline: none;
        background: rgb(255, 255, 255);
        border-radius: 30px;
        margin-bottom: 20px;
        margin-top: 7px;
        font-size: 16px;
        color: #6b7280;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #e9e9e9;
      }
    }
  }

  .add-user-btn {
    width: 100%;
    height: 40px;
    margin-top: 30px;
    background: #06aec8;
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
`;

export default StyledUserForm;
