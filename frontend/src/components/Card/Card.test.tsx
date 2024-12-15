import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Card Component', () => {
  const mockPush = jest.fn();
  const mockOnDeleteUser = jest.fn();
  const mockOnUpdateUser = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the card with user information', () => {
    render(
      <Card
        id="1"
        username="John Doe"
        state="ES"
        score="5"
        occupation="Developer"
        onDeleteUser={mockOnDeleteUser}
        onUpdateUser={mockOnUpdateUser}
      />,
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('should call onUpdateUser when "Editar" button is clicked', () => {
    render(
      <Card
        id="1"
        username="John Doe"
        state="ES"
        score="5"
        occupation="Developer"
        onDeleteUser={mockOnDeleteUser}
        onUpdateUser={mockOnUpdateUser}
      />,
    );

    const editButton = screen.getByText('Editar');
    fireEvent.click(editButton);

    expect(mockOnUpdateUser).toHaveBeenCalled();
  });

  it('should call onDeleteUser when "Deletar" button is clicked', () => {
    render(
      <Card
        id="1"
        username="John Doe"
        state="ES"
        score="5"
        occupation="Developer"
        onDeleteUser={mockOnDeleteUser}
        onUpdateUser={mockOnUpdateUser}
      />,
    );

    const deleteButton = screen.getByText('Deletar');
    fireEvent.click(deleteButton);

    expect(mockOnDeleteUser).toHaveBeenCalled();
  });

  it('should call router.push when "Abrir" button is clicked', () => {
    render(
      <Card
        id="1"
        username="John Doe"
        state="ES"
        score="5"
        occupation="Developer"
        onDeleteUser={mockOnDeleteUser}
        onUpdateUser={mockOnUpdateUser}
      />,
    );

    const openButton = screen.getByText('Abrir');
    fireEvent.click(openButton);

    expect(mockPush).toHaveBeenCalledWith('/user/1');
  });
});
