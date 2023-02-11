import Logo from 'components/common/Logo';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  MdHome,
  MdOutlineBookmarkBorder,
  MdOutlineImage,
  MdPersonOutline,
} from 'react-icons/md';
import NavButton from 'components/home/NavButton';
import UserInfoButton from 'components/home/UserInfoButton';
import MainHeader from 'components/home/MainHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
const Header = styled.header`
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
  display: flex;
  flex-grow: 1.5;
  justify-content: flex-end;
  width: 25%;
`;

const HeaderContainer = styled.div`
  width: 275px;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  & img {
    width: 50px;
    height: 50px;
  }
`;

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  width: 100%;
  height: 500px;
`;

const Main = styled.main`
  display: flex;
  flex-grow: 4;
  width: 60%;
`;

const MainContainer = styled.div`
  width: 550px;
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const TweetButton = styled.div`
  background-color: ${({ theme }) => theme.colors.contents};
  text-align: center;
  padding: 20px;
  width: 200px;
  border-radius: 30px;
  opacity: 0.9;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    opacity: 1;
  }
`;

const NavigationContainer = styled.div`
  width: 100%;
`;

const TweetInputContainer = styled.div`
  padding: 5px 14px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const AvatarContainer = styled.div`
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

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TweetInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px 0;
  font-size: 1.4rem;
  overflow: hidden;
  resize: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textgray};
  }
`;

const InputBottom = styled.div`
  display: flex;
  margin: 5px 0;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightcontents};
    }
  }

  & svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.contents};
  }
`;

const LetterCount = styled.span`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.textgray};
  font-size: 1rem;
  padding-top: 3px;
`;

const TweetButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputTweetButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightcontents};
  font-weight: 600;
  font-size: 1.1rem;
  padding: 8px 15px;
  border: none;
  border-radius: 30px;
`;

function Home() {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [maxLength, setMaxLength] = useState<number>(0);

  const calcLetterCount = useCallback(() => {
    if (textRef.current) {
      setMaxLength(textRef.current?.value?.length!);
    }
  }, []);

  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, []);
  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
          <NavigationContainer>
            <Logo />
            <NavigationBar>
              <NavButton text="홈" href="/home" icon={<MdHome />} />
              <NavButton
                text="북마크"
                href="/home"
                icon={<MdOutlineBookmarkBorder />}
              />
              <NavButton
                text="프로필"
                href="/home"
                icon={<MdPersonOutline />}
              />
            </NavigationBar>
            <TweetButton>트윗하기</TweetButton>
          </NavigationContainer>
          <UserInfoButton />
        </HeaderContainer>
      </Header>

      <Main>
        <MainContainer>
          <MainHeader />
          <TweetInputContainer>
            <AvatarContainer>
              <TweetAvatar />
            </AvatarContainer>

            <InputContainer>
              <TweetInput
                placeholder="What's happening?"
                ref={textRef}
                onInput={handleResizeHeight}
                rows={2}
                onKeyUp={calcLetterCount}
                onKeyDown={calcLetterCount}
                maxLength={150}
              />
              <InputBottom>
                <div>
                  <MdOutlineImage />
                </div>

                <TweetButtonContainer>
                  <LetterCount>{maxLength}</LetterCount>

                  <InputTweetButton>Tweet</InputTweetButton>
                </TweetButtonContainer>
              </InputBottom>
            </InputContainer>
          </TweetInputContainer>
        </MainContainer>
      </Main>
    </Wrapper>
  );
}
export default Home;
