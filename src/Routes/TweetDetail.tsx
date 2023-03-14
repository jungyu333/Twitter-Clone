import TweetDetailHeader from 'components/tweetDetail/TweetDetailHeader';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineModeComment } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 100vh;
`;

const TweetDetailCard = styled.div`
  padding: 0 16px;
  width: 100%;
`;

const MainContainer = styled.div`
  width: 550px;
  height: max-content;
  border-left: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 12px;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  & h1 {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    min-height: 20px;
  }

  & h2 {
    display: flex;
    align-items: center;
    font-size: 15px;
    min-height: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 12px;
  margin-bottom: 16px;
  & p {
    font-size: 17px;
    line-height: 20px;
    font-weight: 400;
    word-wrap: break-word;
  }
`;

const ImageCotainer = styled.div`
  width: 100%;
  height: max-content;
`;

const TimeContainer = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const SubInfoContainer = styled.div`
  font-size: 15px;
  padding: 16px 4px;
  height: 53px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const SubInfo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  & div {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    margin-right: 5px;
  }

  & span {
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.textgray};
  }
`;

const IConContainer = styled.div`
  height: 48px;
  min-height: 1.875rem;
  display: flex;
  justify-content: space-around;
`;

function TweetDetail() {
  return (
    <Wrapper>
      <MainContainer>
        <TweetDetailHeader />
        <TweetDetailCard>
          <Header>
            <Avatar />
            <WriterInfo>
              <div>
                <h1>이름</h1>
                <h2>이메일</h2>
              </div>
            </WriterInfo>
          </Header>
          <Content>
            <p>text</p>
            <ImageCotainer></ImageCotainer>
            <TimeContainer>
              <div>time</div>
            </TimeContainer>
            <SubInfoContainer>
              <SubInfo>
                <div>1000</div>
                <span>Comments</span>
              </SubInfo>
              <SubInfo>
                <div>1000</div>
                <span>Likes</span>
              </SubInfo>
            </SubInfoContainer>
            <IConContainer>
              <MdOutlineModeComment />
              <AiOutlineHeart />
            </IConContainer>
          </Content>
        </TweetDetailCard>
      </MainContainer>
    </Wrapper>
  );
}

export default TweetDetail;
