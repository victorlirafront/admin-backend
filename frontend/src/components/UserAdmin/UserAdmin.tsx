import { SEARCH_ICON } from '@/constants/images';
import { StyledUserAdmin } from './UserAdmin.styled';
import Image from 'next/image';
import { UserAdminProps } from './UserAdmim.types';
import { useEffect, useState } from 'react';
import { setUsers } from '@/redux/features/users-slice/users-slice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { API_END_POINT } from '@/constants/endpoints';
import { User } from '@/pages/types';
import { useAppSelector } from '@/redux/store';

function UserAdmin(props: UserAdminProps) {
  const { onOpenAddUserForm } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [originaUserCollection, setOriginaUser] = useState<User[]>();
  const userCollection = useAppSelector((state) => state.usersReducer.users);

  useEffect(() => {
    setOriginaUser(userCollection);
  }, []);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_END_POINT}/users/search?q=${searchQuery}`);
      const filteredUsers = response.data;

      if (filteredUsers.length === 0 && originaUserCollection) {
        dispatch(setUsers(originaUserCollection));
      } else {
        dispatch(setUsers(filteredUsers));
      }
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
    <StyledUserAdmin>
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
