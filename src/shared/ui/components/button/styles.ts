import styled, { css } from 'styled-components';

import {
  COLORS,
  DISABLED_OPACITY,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  SIZE,
} from '../../constants/style';
import { ButtonProps } from './Button';

const colorStyles = (p: ButtonProps) => {
  let color = SECONDARY_TEXT_COLOR,
    backgroundColor = SECONDARY_COLOR;

  if (p.variant === COLORS.PRIMARY) {
    color = PRIMARY_TEXT_COLOR;
    backgroundColor = PRIMARY_COLOR;
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${backgroundColor};

    &:focus-visible {
      border-color: ${color};
    }
  `;
};

export const StyledButton = styled.button<ButtonProps>`
  ${colorStyles};
  cursor: pointer;
  display: inline-block;
  width: ${(p) => p.isFullWidth && '100%'};
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: ${(p) => {
    if (p.size === SIZE.LARGE) {
      return '0.5rem 1rem';
    } else if (p.size === SIZE.SMALL) {
      return '0.25rem 0.5rem';
    }
    return '0.4rem 0.75rem';
  }};
  font-size: ${(p) => {
    if (p.size === SIZE.LARGE) {
      return '1.25rem';
    } else if (p.size === SIZE.SMALL) {
      return '0.875rem';
    }
    return '1rem';
  }};
  line-height: 1.5;
  border-radius: 0;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: ${DISABLED_OPACITY};
  }
`;
