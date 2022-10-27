import styled from 'styled-components';
import { COLORS } from '../../../shared/constants/style';

interface IImage {
  alt: string;
}
export const Photo = styled.div<IImage>``;

export const Container = styled.div`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  cursor: default;
  outline: none;
  ${Photo} {
    width: 100%;
    height: 270px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ::before {
      content: '';
      display: block;
      position: absolute;
      background: #eee;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`;

export const Title = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;
  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => COLORS.SECONDARY};
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const Price = styled.div`
  height: 60px;
  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  margin: 0;
  b {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;

export const Installment = styled.p`
  margin: 0;
  color: #9c9b9b;
`;
