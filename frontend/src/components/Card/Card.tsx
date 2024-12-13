import { AVATAR_MAN, STAR_ICON } from '@/constants/images';
import { StyledCard } from './Card.styled';
import Image from 'next/image';

function Card() {
  return (
    <StyledCard>
      <div className="info-wrapper">
        <div className="avatar-wrapper">
          <Image className="avatar-picture" src={AVATAR_MAN} height={100} width={100} alt="teste" />
        </div>
        <div className="profile-informations-wrapper">
          <h1>Felipe</h1>
          <div className="profile-informations">
            <div className="profile-item">
              <Image className="star-icon" src={STAR_ICON} height={20} width={20} alt="teste" />
              <p>4.2</p>
            </div>
            <div className="profile-item">
              <p>Estudante</p>
            </div>
            <div className="profile-item">
              <p>ES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="button edit">Editar</button>
        <button className="button remove">Deletar</button>
      </div>
    </StyledCard>
  );
}

export default Card;
