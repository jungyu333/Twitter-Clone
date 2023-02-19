import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 12px;
`;

const TweetAvatar = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: gray;
`;

function TweetInputAvatar() {
  return (
    <Wrapper>
      <TweetAvatar />
    </Wrapper>
  );
}

export default TweetInputAvatar;
