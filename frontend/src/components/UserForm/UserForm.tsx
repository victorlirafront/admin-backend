import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_DEVELOPMENT_ENDPOINT, API_PRODUCTION_ENDPOINT } from '@/constants/endpoints';
import { useDispatch } from 'react-redux';
import { setUsers } from '@/redux/features/users-slice/users-slice';
import { useAppSelector } from '@/redux/store';
import StyledUserForm from './UserForm.styled';
import { UserFormProps } from './UserForm.type';

function AddUserForm(props: UserFormProps) {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');
  const dispatch = useDispatch();
  const userCollection = useAppSelector((state) => state.usersReducer.users);
  const { user, onCloseModal } = props;

  useEffect(() => {
    setUsername(user.username);
    setScore(user.score);
    setOccupation(user.occupation);
    setState(user.state);
  }, [user]);

  const sendNewUser = async () => {
    if (!username || !score || !state || !occupation) {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }

    const newUser = { username, score, state, occupation };

    const sendUserRequest = async (
      method: string,
      newUser: { username: string; score: string; state: string; occupation: string },
    ) => {
      const API_END_POINT =
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
          ? API_PRODUCTION_ENDPOINT
          : API_DEVELOPMENT_ENDPOINT;

      const url = `${API_END_POINT}/users`;
      const userId = user.id;
      const headers = { 'Content-Type': 'application/json' };

      try {
        const response =
          method === 'PUT'
            ? await axios.put(`${url}/${userId}`, newUser, { headers })
            : await axios.post(url, newUser, { headers });

        if (method === 'PUT') {
          const updatedUsers = userCollection.map((user) =>
            user.id === userId
              ? {
                  ...user,
                  username,
                  score,
                  state,
                  occupation,
                }
              : user,
          );
          dispatch(setUsers(updatedUsers));
        } else {
          dispatch(setUsers([...userCollection, response.data]));
        }

        setUsername('');
        setScore('');
        setState('');
        setOccupation('');
      } catch (error) {
        console.error('Erro ao criar ou atualizar o usuário:', error);
      }
    };

    sendUserRequest(user.method, newUser);
    onCloseModal();
  };

  return (
    <StyledUserForm action="POST">
      <div className="inputs-container">
        <div className="form-control">
          <label htmlFor="">Nome do usuário</label>
          <input
            type="text"
            placeholder="Ex: David"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Pontuação</label>
          <input
            type="text"
            placeholder="Ex: 5"
            value={score}
            onChange={(e) => setScore(String(e.target.value))}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Estado</label>
          <input
            type="text"
            placeholder="Ex: SP"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Ocupação</label>
          <input
            type="text"
            placeholder="Ex: Analista de dados"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
      </div>
      <button className="add-user-btn" type="button" onClick={sendNewUser}>
        Adicionar
      </button>
    </StyledUserForm>
  );
}

export default AddUserForm;
