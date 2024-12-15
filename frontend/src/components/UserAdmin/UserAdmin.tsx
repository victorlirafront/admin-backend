import { SEARCH_ICON } from '@/constants/images';
import { StyledUserAdmin } from './UserAdmin.styled';
import Image from 'next/image';
import { UserAdminProps } from './UserAdmim.types';
import { useState } from 'react';
import { setUsers } from '@/redux/features/users-slice/users-slice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { API_END_POINT } from '@/constants/endpoints';

function UserAdmin(props: UserAdminProps) {
  const { onOpenAddUserForm } = props;
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_END_POINT}/users/search?q=${searchQuery}`);
      const filteredUsers = response.data;

      dispatch(setUsers(filteredUsers));
    } catch (error) {
      console.error('Erro ao buscar os usuários:', error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClick = () => {
    handleSearch();
  };

  return (
    <StyledUserAdmin data-aos="fade-down" data-aos-offset="0" data-aos-delay="150">
      <div className="search-group">
        <div className="search-wrapper">
          <input
            id="search"
            type="search"
            placeholder="Busque pelo nome, estado ou ocupação"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="search-icon-wrapper" onClick={handleClick}>
            <Image
              className="search-icon"
              src={SEARCH_ICON}
              width={30}
              height={30}
              alt="ícone de pesquisa"
            />
          </div>
        </div>
        <button onClick={onOpenAddUserForm} className="add-new-user">
          Adicionar usuário
        </button>
      </div>
    </StyledUserAdmin>
  );
}

export default UserAdmin;
