import { AVATAR_MAN } from '@/constants/images';
import { StyledCard } from './Card.styled';
import Image from 'next/image';

function Card() {
  return (
    <StyledCard>
      <div>
        <Image className="avatar-picture" src={AVATAR_MAN} height={100} width={100} alt="teste" />
      </div>
    </StyledCard>
  );
}

export default Card;
