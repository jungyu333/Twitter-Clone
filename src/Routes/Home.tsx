import Logo from 'components/common/Logo';
import React from 'react';
import styled from 'styled-components';
import {
  MdHome,
  MdOutlineBookmarkBorder,
  MdPersonOutline,
} from 'react-icons/md';
import NavButton from 'components/home/NavButton';
import UserInfoButton from 'components/home/UserInfoButton';
import { Link } from 'react-router-dom';

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

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};

  & h1 {
    font-weight: 800;
    font-size: 1.3rem;
    width: 100%;
    height: 50%;
    padding: 10px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  height: 50%;
  & a {
    font-weight: 600;
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightgray};
    }
  }
`;

const Tab = styled.span`
  display: flex;
  flex-direction: column;
  width: max-content;
  position: relative;
`;

const TabUnderBar = styled.span`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.contents};
  position: absolute;
  bottom: -100%;
  border-radius: 10px;
  margin-bottom: 1px;
`;

function Home() {
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
          <MainHeader>
            <h1>홈</h1>
            <TabContainer>
              <Link to={'/home'}>
                <Tab>
                  <span>For you</span>
                  <TabUnderBar />
                </Tab>
              </Link>
              <Link to={'/home'}>
                <Tab>
                  <span>Following</span>
                  <TabUnderBar />
                </Tab>
              </Link>
            </TabContainer>
          </MainHeader>
        </MainContainer>
      </Main>
    </Wrapper>
  );
}
export default Home;
