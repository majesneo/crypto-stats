/*
TODO
Check that Modal renders the ModalBackground and ModalContents components.

Check that Modal renders ModalOpenButton and ModalCloseButton components,
and that clicking those buttons opens and closes Modal respectively.

Check that Modal is passing correct props to ModalBackground components
and ModalContents, such as the isOpen prop for the ModalBackground component.

Check if Modal is passing correct callback functions to components
ModalOpenButton and ModalCloseButton, such as the setIsOpen function to toggle the isOpen state.

Check if Modal correctly resets the error state and calls the function
resetErrorHandle when the ModalCloseButton or ModalBackground button is clicked.
*/

/*
TODO
Check that the modal is using createPortal to render its children.
Check that the modal component is passing the correct props to its child components.
Check that the ModalBackground component has the correct styles when the modal is open.
Check that the CloseIcon in the ModalCloseButton component is active and triggers the correct actions.
Check that the button in the ModalOpenButton component is active and triggers the correct actions.
Check that the AuthForm component in the ModalContents component has the correct property
errors and triggers the correct actions on submit
 */

import { describe, jest, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderWithProviders } from '../../../shared/lib/test-utils/renderWithProviders';
import { Button } from '../../../shared/ui/components/button/Button';

import { Menu } from './Menu';

describe('Menu', () => {
  test('fakeTest', () => {});

  test('Should render button with text "Sign in"', () => {
    const SIGN_IN = 'Sign in';
    const ref = jest.fn();
    renderWithProviders(<Menu ref={ref} />);

    const { getByText } = render(<Button />);

    expect(getByText(SIGN_IN));
  });
});
