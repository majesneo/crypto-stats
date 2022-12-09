import { describe, jest, test } from '@jest/globals';
import { fireEvent, waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { AuthForm } from '../../../features/Authentication/ui/AuthForm/AuthForm';
import { renderWithProviders } from '../../../shared/lib/test-utils/renderWithProviders';
import { Button } from '../../../shared/ui/components/button/Button';
import { CloseIcon } from '../../../shared/ui/components/Icons/CloseIcon/Index';
import { ModalBackground } from '../Modal/ModalBackground';
import { ModalCloseButton } from '../Modal/ModalCloseButton';
import { Modal, ModalContents, ModalContext } from '../Modal/ModalContext';
import { ModalOpenButton } from '../Modal/ModalOpenButton';
import { StyledModalBackground } from '../Modal/style';
import { Menu } from './Menu';

describe('Menu', () => {
  beforeEach(() => {
    const mockRef = jest.fn();
    renderWithProviders(<Menu ref={mockRef} />);
  });

  test('fakeTest', () => {});

  test('Should render button with text "Sign in"', () => {
    const SIGN_IN = 'Sign in';
    const { getByText } = render(<Button />);

    expect(getByText(SIGN_IN));
  });

  describe('Modal', () => {
    const DISPLAY_NONE = 'display: none';
    const DISPLAY_FLEX = 'display: flex';
    const MODAL_CONTENTS = 'modal-contents';
    const OPEN_MODAL_BUTTON = 'open-modal-button';
    const CLOSE_MODAL_BUTTON = 'close-modal-button';
    const MODAL_BACKGROUND = 'modal-background';
    let rootModal: HTMLDivElement | null;
    let rootModalElement: HTMLDivElement;

    beforeEach(() => {
      const ROOT_MODAL = 'rootModal';
      rootModal = document.createElement('div');
      rootModal.setAttribute('id', ROOT_MODAL);
      document.body.appendChild(rootModal);
      rootModalElement = document.getElementById(ROOT_MODAL) as HTMLDivElement;
    });

    afterEach(() => {
      if (rootModal) {
        document.body.removeChild(rootModal);
        rootModal = null;
      }
    });

    test('Portal validation, components in modalContents should be in the document', () => {
      const TEXT_CONTENTS = 'test portal contents';
      const { getByText } = render(
        <Modal>
          <ModalContents>
            <div>{TEXT_CONTENTS}</div>
          </ModalContents>
        </Modal>
      );

      expect(getByText(TEXT_CONTENTS)).toBeInTheDocument();
      expect(rootModalElement).toContainElement(getByText(TEXT_CONTENTS));
    });

    test('Portal validation, components in modalContents should not be in the document', () => {
      const TEXT_CONTENTS = 'test portal contents';
      const { queryByText } = render(
        <Modal>
          <ModalContents />
        </Modal>
      );

      expect(queryByText(TEXT_CONTENTS)).not.toBeInTheDocument();
      expect(rootModalElement).not.toContainElement(queryByText(TEXT_CONTENTS));
    });

    it('Should render the modal contents when the isOpen state is true', () => {
      const MODAL_CONTENTS = 'modal-contents';
      const { getByTestId, rerender } = render(
        <Modal>
          <ModalContents data-testid={MODAL_CONTENTS}>
            <p>Modal Content</p>
          </ModalContents>
        </Modal>
      );

      expect(getByTestId(MODAL_CONTENTS)).toHaveStyle(DISPLAY_NONE);

      rerender(
        <Modal>
          <ModalContext.Provider value={{ isOpen: true, setIsOpen: jest.fn() }}>
            <ModalContents data-testid={MODAL_CONTENTS}>
              <p>Modal Content</p>
            </ModalContents>
          </ModalContext.Provider>
        </Modal>
      );

      expect(getByTestId(MODAL_CONTENTS)).toHaveStyle(DISPLAY_FLEX);
    });

    test('Should render the ModalBackground when we click ModalOpenButton', () => {
      const { getByTestId } = render(
        <Modal>
          <ModalBackground>
            {(props) => (
              <StyledModalBackground
                data-testid={MODAL_BACKGROUND}
                isOpen={props.isOpen}
                onClick={() => props.setIsOpen}
              />
            )}
          </ModalBackground>
          <ModalOpenButton>
            {(props) => (
              <Button
                data-testid={OPEN_MODAL_BUTTON}
                onClick={props.setIsOpen}
              />
            )}
          </ModalOpenButton>
        </Modal>
      );
      expect(getByTestId(MODAL_BACKGROUND)).toHaveStyle(DISPLAY_NONE);

      fireEvent.click(getByTestId(OPEN_MODAL_BUTTON));
      expect(getByTestId(MODAL_BACKGROUND)).toHaveStyle(DISPLAY_FLEX);
    });

    test('Should close modal when we click on the ModalBackground', () => {
      const { getByTestId } = render(
        <Modal>
          <ModalBackground>
            {(props) => (
              <StyledModalBackground
                data-testid={MODAL_BACKGROUND}
                isOpen={props.isOpen}
                onClick={props.setIsOpen}
              />
            )}
          </ModalBackground>
          <ModalOpenButton>
            {(props) => (
              <Button
                data-testid={OPEN_MODAL_BUTTON}
                onClick={props.setIsOpen}
              />
            )}
          </ModalOpenButton>
        </Modal>
      );
      fireEvent.click(getByTestId(OPEN_MODAL_BUTTON));
      expect(getByTestId(MODAL_BACKGROUND)).toHaveStyle(DISPLAY_FLEX);

      fireEvent.click(getByTestId(MODAL_BACKGROUND));
      expect(getByTestId(MODAL_BACKGROUND)).toHaveStyle(DISPLAY_NONE);
    });

    test('Should set and update isOpen when we click on the ModalOpenButton with text "Sign in" and close when we click on the ModalCloseButton', () => {
      const { getByTestId } = render(
        <Modal>
          <ModalContents data-testid={MODAL_CONTENTS}>
            <ModalCloseButton>
              {(props) => (
                <CloseIcon
                  data-testid={CLOSE_MODAL_BUTTON}
                  onClick={props.setIsOpen}
                />
              )}
            </ModalCloseButton>
          </ModalContents>
          <ModalOpenButton>
            {(props) => (
              <Button
                data-testid={OPEN_MODAL_BUTTON}
                onClick={props.setIsOpen}
              />
            )}
          </ModalOpenButton>
        </Modal>
      );

      expect(getByTestId(MODAL_CONTENTS)).toHaveStyle(DISPLAY_NONE);

      fireEvent.click(getByTestId(OPEN_MODAL_BUTTON));
      expect(getByTestId(MODAL_CONTENTS)).toHaveStyle(DISPLAY_FLEX);

      fireEvent.click(getByTestId(CLOSE_MODAL_BUTTON));
      expect(getByTestId(MODAL_CONTENTS)).toHaveStyle(DISPLAY_NONE);
    });
  });

  describe('AuthForm', () => {
    const ERROR_WEN_PASSWORD_INVALID = 'password must be at least 8 characters';
    const ERROR_WEN_EMAIL_INVALID = 'email must be a valid email';
    const PLACEHOLDER_EMAIL = 'Email';
    const PLACEHOLDER_PASSWORD = 'Password';
    const VALID_EMAIL = 'test@example.com';
    const INVALID_EMAIL = 'invalid';
    const VALID_PASSWORD = 'password123';
    const INVALID_PASSWORD = '1234567';
    const SUBMIT_BUTTON = 'Login';
    const mockOnSubmit = jest.fn();

    it('Should submit the form and call the onSubmit prop with the entered values', async () => {
      const { getByPlaceholderText, getByText } = render(
        <AuthForm onSubmit={mockOnSubmit} />
      );

      const emailInput = getByPlaceholderText(PLACEHOLDER_EMAIL);
      const passwordInput = getByPlaceholderText(PLACEHOLDER_PASSWORD);
      const submitButton = getByText(SUBMIT_BUTTON);

      fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
      fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
      fireEvent.click(submitButton);

      await waitFor(() =>
        expect(mockOnSubmit).toHaveBeenCalledWith({
          email: VALID_EMAIL,
          password: VALID_PASSWORD,
        })
      );
    });

    it('Should show an error if the form is submitted with an invalid email', async () => {
      const { getByPlaceholderText, getByText } = render(
        <AuthForm onSubmit={mockOnSubmit} />
      );

      const emailInput = getByPlaceholderText(PLACEHOLDER_EMAIL);
      const passwordInput = getByPlaceholderText(PLACEHOLDER_PASSWORD);
      const submitButton = getByText(SUBMIT_BUTTON);

      fireEvent.change(emailInput, { target: { value: INVALID_EMAIL } });
      fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
      fireEvent.click(submitButton);

      await waitFor(() => expect(getByText(ERROR_WEN_EMAIL_INVALID)));
    });

    it('should show an error if the form is submitted with a password less than 8 characters', async () => {
      const { getByPlaceholderText, getByText } = render(
        <AuthForm onSubmit={mockOnSubmit} />
      );

      const emailInput = getByPlaceholderText(PLACEHOLDER_EMAIL);
      const passwordInput = getByPlaceholderText(PLACEHOLDER_PASSWORD);
      const submitButton = getByText(SUBMIT_BUTTON);

      fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
      fireEvent.change(passwordInput, { target: { value: INVALID_PASSWORD } });
      fireEvent.click(submitButton);

      await waitFor(() => expect(getByText(ERROR_WEN_PASSWORD_INVALID)));
    });
  });
});
