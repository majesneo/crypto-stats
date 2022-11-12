import styled from 'styled-components';
import { StyledPhotoProps } from './Photo';

export const StyledPhoto = styled.div<StyledPhotoProps>`
  --w: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --h: ${(props) => (props.ratio ? props.ratio[1] : 1)};
  --widthPercent: ${(props) => (props.width ? props.width : '100%')};
  --heightPercent: ${(props) => (props.height ? props.height : '100%')};

  aspect-ratio: var(--w) / var(--h);
  margin-bottom: 5px;
  > img {
    width: var(--widthPercent);
    height: var(--heightPercent);
    object-fit: cover;
  }
  > * {
    border-radius: 12px;
  }
`;
