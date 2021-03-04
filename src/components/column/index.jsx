import React from 'react';

import { Container } from './styles';

const Column = ({ children }) => {
  return (
    <>
      <Container> {children} </Container>
    </>
  );
};

export default Column;
