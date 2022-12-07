/*
TODO
Check that the button in the ModalOpenButton component is active and triggers the correct actions.
Check that the AuthForm component in the ModalContents component has the correct property
errors and triggers the correct actions on submit
 */

import { describe, jest, test } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
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

  afterEach(() => {});

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

  // test('Should change email', () => {
  //   const EMAIL = 'Email';

  //   expect(screen.getByPlaceholderText(EMAIL));
  // });

  // test('Should change password', () => {
  //   const PASSWORD = 'Password';

  //   expect(screen.getByPlaceholderText(PASSWORD));
  // });
});
