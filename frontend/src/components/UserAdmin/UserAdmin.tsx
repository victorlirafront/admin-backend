import { SEARCH_ICON } from '@/constants/images';
import { StyledUserAdmin } from './UserAdmin.styled';
import Image from 'next/image';

function UserAdmin() {
  return (
    <StyledUserAdmin>
      <div className="search-wrapper">
        <input id="search" type="search" placeholder="Busque pelo nome" />
        <div className="search-icon-wrapper">
          <Image
            className="search-icon"
            src={SEARCH_ICON}
            width={30}
            height={30}
            alt="icone de pesquisa"
          />
        </div>
      </div>
      <button className="add-new-user">Adicionar usuário</button>
    </StyledUserAdmin>
  );
}

export default UserAdmin;
