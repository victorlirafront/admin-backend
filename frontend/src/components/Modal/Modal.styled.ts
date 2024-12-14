import styled from 'styled-components';

export const StyledModal = styled.div`
  background: white;
  position: fixed;
  z-index: 20;
  color: #000;
  padding: 20px;
  text-align: center;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  width: 600px;
  top: 200px;
  right: 50%;
  top: 50%;
  transform: translate(50%, -250%) !important;
  height: 300px;

  &.onDomLoad {
    transform: translateY(-100%);
    transition: 0.9s;
  }

  @media screen and (max-width: 1035px) {
    right: 50%;
    top: 50%;
    transform: translate(50%, -113%) !important;
  }

  @media screen and (max-width: 640px) {
    width: 90%;
  }

  &.active {
    position: fixed;
    transform: translateY(0%);
    opacity: 1;
    transition: 0.9s;
    visibility: visible;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%) !important;

    @media screen and (max-width: 1035px) {
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%) !important;
    }
  }

  h1 {
    line-height: 30px;
  }

  .close-box {
    padding: 20px;
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    .close-icon {
      max-width: 20px;
      max-height: 20px;
      cursor: pointer;
    }
  }
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.6s;

  &.active {
    display: block;
    visibility: visible;
  }
`;
