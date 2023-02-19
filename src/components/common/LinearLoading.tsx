import { LinearProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 5px;
`;

function LinearLoading() {
  return (
    <Wrapper>
      <LinearProgress />
    </Wrapper>
  );
}

export default LinearLoading;
