import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
`;

function Logo() {
  return <LogoImage src={`${process.env.PUBLIC_URL}/images/ic_logo.png `} />;
}

export default Logo;
