import { AVATAR_MAN, STAR_ICON } from '@/constants/images';
import { StyledCard } from './Card.styled';
import Image from 'next/image';
import { CardProps } from './Card.types';
import { useRouter } from 'next/router';
import truncText from '@/helpers/truncText';

function Card(props: CardProps) {
  const { username, state, score, occupation, onDeleteUser, onUpdateUser, id } = props;

  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/user/${id}`);
  };

  return (
    <StyledCard>
      <div className="info-wrapper">
        <div className="avatar-wrapper">
          <Image
            className="avatar-picture"
            src={AVATAR_MAN}
            height={100}
            width={100}
            alt="Foto de evatar do usuário"
          />
        </div>
        <div className="profile-informations-wrapper">
          <h1>{truncText(username, 12)}</h1>
          <div className="profile-informations">
            <div className="profile-item">
              <Image
                className="star-icon"
                src={STAR_ICON}
                height={20}
                width={20}
                alt="ícone de estrela"
              />
              <p>{truncText(score, 2)}</p>
            </div>
            <div className="profile-item">
              <p>{truncText(occupation, 13)}</p>
            </div>
            <div className="profile-item">
              <p>{truncText(state, 2)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="button edit" onClick={onUpdateUser}>
          Editar
        </button>
        <button className="button remove" onClick={onDeleteUser}>
          Deletar
        </button>
        <button className="button open" onClick={handleCardClick}>
          Abrir
        </button>
      </div>
    </StyledCard>
  );
}

export default Card;
