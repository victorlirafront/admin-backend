import { GetServerSideProps } from 'next';
import axios from 'axios';
import { API_END_POINT } from '@/constants/endpoints';
import { User } from '../types';

interface UserPageProps {
  user: User;
}

export default function UserPage({ user }: UserPageProps) {
  if (!user) {
    return <h1>Usuário não encontrado</h1>;
  }

  return (
    <div>
      <h1>{user.username}</h1>
      <p>Estado: {user.state}</p>
      <p>Ocupação: {user.occupation}</p>
      <p>Pontuação: {user.score}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const response = await axios.get(`${API_END_POINT}/users/${id}`);
    return {
      props: { user: response.data },
    };
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return {
      props: { user: null },
    };
  }
};
