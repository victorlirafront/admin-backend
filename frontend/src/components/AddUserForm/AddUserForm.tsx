import React, { useState } from 'react';
import axios from 'axios';
import { API_END_POINT } from '@/constants/endpoints';
import { useDispatch } from 'react-redux';
import { setUsers } from '@/redux/features/users-slice/users-slice';
import { useAppSelector } from '@/redux/store';
import StyledAddUserForm from './AddUserForm.styled';

function AddUserForm() {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');
  const dispatch = useDispatch();
  const userCollection = useAppSelector((state) => state.usersReducer.users);

  const sendNewUser = async () => {
    if (!username || !score || !state || !occupation) {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }

    const newUser = { username, score, state, occupation };

    try {
      const response = await axios.post(`${API_END_POINT}/users`, newUser, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch(setUsers([...userCollection, response.data]));

      setUsername('');
      setScore('');
      setState('');
      setOccupation('');
    } catch (error) {
      console.error('Erro ao criar um novo usuário:', error);
    }
  };

  return (
    <StyledAddUserForm action="POST">
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
            type="number"
            placeholder="Ex: 5"
            value={score}
            onChange={(e) => setScore(e.target.value)}
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
          <p>Ocupação</p>
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
    </StyledAddUserForm>
  );
}

export default AddUserForm;
