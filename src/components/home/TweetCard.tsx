import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineModeComment } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const Avatar = styled.div`
  background-color: gray;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const MainContent = styled.div`
  margin-left: 10px;
`;

const MainHeader = styled.header`
  display: flex;
  width: 450px;
  min-width: 450px;
  align-items: center;
  line-height: 1.5;

  & h1 {
    font-weight: 900;
    font-size: 1rem;
    margin-right: 5px;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.textgray};
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 10px 0;
`;

const MainBottom = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  & span {
    margin-left: 10px;
    line-height: 2;
    font-size: 0.8rem;
  }
`;

function TweetCard() {
  return (
    <Wrapper>
      <Avatar />
      <MainContent>
        <MainHeader>
          <h1>이름</h1>
          <h2>이메일</h2>
        </MainHeader>
        <ImageContainer></ImageContainer>
        <MainBottom>
          <ButtonContainer>
            <Button>
              <MdOutlineModeComment />
              <span>1</span>
            </Button>
            <Button>
              <AiOutlineHeart />
              <span>23</span>
            </Button>
          </ButtonContainer>
        </MainBottom>
      </MainContent>
    </Wrapper>
  );
}

export default TweetCard;
