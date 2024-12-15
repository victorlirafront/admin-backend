import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header Component', () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the header with the paper plane icon', () => {
    render(<Header />);

    const icon = screen.getByAltText('Avião de papel icone');
    expect(icon).toBeInTheDocument();
  });

  it('should call router.push when paper plane is clicked', () => {
    render(<Header />);

    const paperPlane = screen.getByText('Home').parentElement;
    fireEvent.click(paperPlane!);

    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('should call router.push when "Voluntários" is clicked', () => {
    render(<Header />);

    const voluntarios = screen.getByText('Voluntários');
    fireEvent.click(voluntarios);

    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
