import { GetServerSideProps } from 'next';
import axios from 'axios';
import { API_DEVELOPMENT_ENDPOINT, API_PRODUCTION_ENDPOINT } from '@/constants/endpoints';
import StyledUser, { Footer, ProfileHeader, ProfileInfo, Quote } from './User.styled';
import getGreeting from '@/helpers/getGreeting';

export type User = {
  id: string;
  username: string;
  score: string;
  createdAt?: string;
  state: string;
  occupation: string;
};

interface UserPageProps {
  user: User;
}

export default function UserPage({ user }: UserPageProps) {
  if (!user) {
    return <h1>Usuário não encontrado</h1>;
  }

  const currentHour = new Date().getHours();
  const greeting = getGreeting(currentHour);

  return (
    <StyledUser>
      <div className="container">
        <ProfileHeader>
          <h1>{`${greeting}, ${user.username}`}</h1>
          <p>Bem-vindo à sua página de perfil!</p>
        </ProfileHeader>
        <ProfileInfo>
          <p>
            <strong>Estado:</strong> {user.state}
          </p>
          <p>
            <strong>Ocupação:</strong> {user.occupation}
          </p>
          <p>
            <strong>Pontuação:</strong> {user.score}
          </p>
          <Quote>
            <p className="quote-title">Citação do dia</p>
            {`"Mesmo a menor das pessoas pode mudar o curso do futuro."`}
          </Quote>
        </ProfileInfo>
        <Footer>
          <p>Obrigado por visitar o seu perfil. Continue explorando! 🚀</p>
        </Footer>
      </div>
    </StyledUser>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const API_END_POINT =
      process.env.ENVIRONMENT === 'production' ? API_PRODUCTION_ENDPOINT : API_DEVELOPMENT_ENDPOINT;
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
