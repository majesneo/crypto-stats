import styled from 'styled-components';
import { StyledPhotoProps } from './Photo';

export const StyledPhoto = styled.div<StyledPhotoProps>`
  --w: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --h: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  aspect-ratio: var(--w) / var(--h);
  margin-bottom: 5px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > * {
    border-radius: 12px;
  }
`;
