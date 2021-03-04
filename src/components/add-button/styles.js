import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export const StyledButton = styled(Fab)`
  position: fixed;
  bottom: 3vw;
  right: 6vw;
  width: 100px;
  height: 100px;

  @media (max-width: 800px) {
    float: top;
  }
`;
