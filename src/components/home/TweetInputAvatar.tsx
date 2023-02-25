import React from 'react';
import styled from 'styled-components';
import { ITweetInputAvatar } from 'types/common';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 12px;
`;

const TweetAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

function TweetInputAvatar({ avatarUrl }: ITweetInputAvatar) {
  return (
    <Wrapper>
      <TweetAvatar src={avatarUrl} />
    </Wrapper>
  );
}

export default TweetInputAvatar;
