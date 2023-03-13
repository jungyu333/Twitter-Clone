import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ITweetCard } from 'types/home';
import CommentButton from './CommentButton';
import HeartButton from './HeartButton';
import TweetCommentInput from './TweetCommentInput';
import TweetComments from './TweetComments';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s ease-in;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  :hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
    transition: 0.1s ease-in;
  }
`;

const Avatar = styled.img`
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

const TweetText = styled.div`
  margin-top: 10px;
`;

const ImageContainer = styled.div<{ imageLnegth: number }>`
  width: 100%;
  height: max-content;
  margin: 10px 0;
  display: ${({ imageLnegth }) => (imageLnegth === 1 ? 'block' : 'grid')};
  grid-template-columns: ${({ imageLnegth }) =>
    imageLnegth >= 2 ? '1fr 1fr' : ''};
  grid-template-rows: ${({ imageLnegth }) =>
    imageLnegth >= 3 ? '1fr 1fr' : ''};
  gap: 5px;
  justify-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const MainBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

function TweetCard({ tweetData }: ITweetCard) {
  const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);
  const navigation = useNavigate();
  const onClickCard = () => {
    console.log(tweetData.id);
    navigation(`/tweet/${tweetData.id}`);
  };
  return (
    <Wrapper onClick={onClickCard}>
      <Avatar src={tweetData.avatar} />
      <MainContent>
        <MainHeader>
          <h1>{tweetData.name}</h1>
          <h2>{tweetData.email}</h2>
        </MainHeader>
        <TweetText>{tweetData.text}</TweetText>
        <ImageContainer imageLnegth={tweetData.images.length}>
          {tweetData.images.map((image, index) => (
            <Image key={index} src={image}></Image>
          ))}
        </ImageContainer>
        <MainBottom>
          <ButtonContainer>
            <CommentButton
              commentsNum={tweetData.commentsNum}
              setIsCommentOpen={setIsCommentOpen}
            />

            <HeartButton />
          </ButtonContainer>
        </MainBottom>
        {isCommentOpen && (
          <>
            <TweetCommentInput
              tweetId={tweetData.id}
              setIsCommentOpen={setIsCommentOpen}
            />
          </>
        )}
      </MainContent>
    </Wrapper>
  );
}

export default TweetCard;
