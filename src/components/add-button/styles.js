import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export const StyledButton = styled(Fab)`
  position: absolute;
  bottom: 3vw;
  right: 6vw;
  width: 100px;
  height: 100px;

  @media (max-width: 800px) {
    width: 80px;
    height: 80px;
    bottom: 10vw;
    right: 10vw;
    
  }
`;

