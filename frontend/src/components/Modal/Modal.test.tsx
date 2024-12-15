import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  const closeModalMock = jest.fn();

  it('should render children inside the modal', () => {
    render(
      <Modal closeModal={closeModalMock} className="test-class">
        <div>Test Content</div>
      </Modal>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should call closeModal when the close icon is clicked', () => {
    render(
      <Modal closeModal={closeModalMock} className="test-class">
        <div>Test Content</div>
      </Modal>,
    );
    const closeButton = screen.getByAltText('Close modal');
    fireEvent.click(closeButton);
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});
