import styled from 'styled-components';
import {
  SECONDARY_COLOR,
  THIRD_TEXT_COLOR,
} from '../../shared/ui/constants/style';

export const StyledCartProduct = styled.div``;

export const CartProductContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${SECONDARY_COLOR};
`;

export const CartProductContent = styled.div`
  background-color: white;
  box-sizing: border-box;
  color: var(--ozTextPrimary);
  display: flex;
  flex-direction: column;
  max-width: 902px;
  width: 100%;
`;

export const CartProductDescription = styled.div`
  flex-basis: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 2;
  max-width: 444px;
  width: 100%;
`;

export const CartProductPrice = styled.div`
  align-items: start;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CartProductTable = styled.div`
  display: grid;
  grid-template-columns: minmax(max-content, max-content) minmax(auto, 370px) 0.3fr 0.3fr 0.3fr 0.3fr;
  grid-auto-rows: minmax(auto, auto);
  gap: 1rem;
`;

export const ColumnName = styled.div`
  color: ${THIRD_TEXT_COLOR};
  font-family: 'San Francisco Bold';
`;
