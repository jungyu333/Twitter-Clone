import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  & textarea {
    width: 100%;
    padding: 10px 5px;
    resize: none;
    :focus {
      outline-color: ${({ theme }) => theme.colors.lightcontents};
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function TweetComent() {
  return (
    <Wrapper>
      <textarea rows={2} />
    </Wrapper>
  );
}

export default TweetComent;
