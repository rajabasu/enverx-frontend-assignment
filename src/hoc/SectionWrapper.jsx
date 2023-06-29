import React from 'react';
import { Container } from '@mui/material';

const SectionWrapper = (Component) => {
  const pageHeight = { height: 'calc(100vh - 81px)' };

  const HOC = (props) => (
    <section>
      <Container>
        <Component pageHeight={pageHeight} {...props} />
      </Container>
    </section>
  );

  return HOC;
};

export default SectionWrapper;
