import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 350px;

  @media (max-width: 800px) {
    width: 250px;
  }
`;

export const Description = styled.p`
  font-size: 15pt;
`;
