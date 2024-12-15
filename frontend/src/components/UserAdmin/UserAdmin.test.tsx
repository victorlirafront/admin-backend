import { render, screen, fireEvent } from '@testing-library/react';
import UserAdmin from './UserAdmin';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

jest.mock('axios');

describe('UserAdmin Component', () => {
  const mockOnOpenAddUserForm = jest.fn();

  it('should render input field and search icon', () => {
    render(
      <Provider store={store}>
        <UserAdmin onOpenAddUserForm={mockOnOpenAddUserForm} />
      </Provider>,
    );

    expect(screen.getByPlaceholderText('Busque pelo nome, estado ou ocupação')).toBeInTheDocument();
    expect(screen.getByAltText('ícone de pesquisa')).toBeInTheDocument();
  });

  it('should call onOpenAddUserForm when add new user button is clicked', () => {
    render(
      <Provider store={store}>
        <UserAdmin onOpenAddUserForm={mockOnOpenAddUserForm} />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Adicionar usuário'));
    expect(mockOnOpenAddUserForm).toHaveBeenCalledTimes(1);
  });
});
