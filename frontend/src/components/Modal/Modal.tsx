import { StyledModalWrapper, StyledModal } from './Modal.styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IModalProps } from './Modal.types';
import { CLOSE_ICON } from '@/constants/images';

const Modal = function (props: IModalProps) {
  const { children, className, closeModal } = props;

  const [fadeDownOnLoad, setFadeDownOnLoad] = useState(false);

  const onCloseModalHandler = function () {
    closeModal();
  };

  useEffect(() => {
    setFadeDownOnLoad(true);
  }, []);

  return (
    <StyledModalWrapper className={className}>
      <StyledModal className={`${className} ${fadeDownOnLoad ? 'onDomLoad' : ''} `}>
        <div className="close-box" onClick={onCloseModalHandler}>
          <Image
            className="close-icon"
            width={50}
            height={50}
            src={CLOSE_ICON}
            alt="Close modal"
            data-aos="fade-down"
          />
        </div>
        <div>{children}</div>
      </StyledModal>
    </StyledModalWrapper>
  );
};

export default Modal;
