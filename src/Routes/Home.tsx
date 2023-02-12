import Logo from 'components/common/Logo';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MdClear,
  MdHome,
  MdOutlineBookmarkBorder,
  MdPersonOutline,
} from 'react-icons/md';
import NavButton from 'components/home/NavButton';
import UserInfoButton from 'components/home/UserInfoButton';
import MainHeader from 'components/home/MainHeader';
import TweetInput from 'components/home/TweetInput';
import { Modal } from '@mui/material';

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

const ModalContainer = styled.div`
  position: absolute;
  width: 600px;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightgray};
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 15px;

  & div {
    padding: 0;
    border-bottom: none;
  }
`;

const ExitButton = styled.div`
  margin: 10px 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }

  & svg {
    width: 50%;
    height: 50%;
  }
`;

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickTweet = () => {
    setIsOpen((prev) => !prev);
  };
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
            <TweetButton onClick={onClickTweet}>트윗하기</TweetButton>
          </NavigationContainer>
          <UserInfoButton />
        </HeaderContainer>
      </Header>

      <Main>
        <MainContainer>
          <MainHeader />
          <TweetInput />
        </MainContainer>
      </Main>

      <Modal open={isOpen} onClose={onClickTweet}>
        <ModalContainer>
          <ExitButton onClick={onClickTweet}>
            <MdClear />
          </ExitButton>

          <TweetInput />
        </ModalContainer>
      </Modal>
    </Wrapper>
  );
}
export default Home;
