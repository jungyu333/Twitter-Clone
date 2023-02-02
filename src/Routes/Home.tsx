import Logo from 'components/common/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MdHome,
  MdMoreVert,
  MdOutlineBookmarkBorder,
  MdPersonOutline,
} from 'react-icons/md';

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
`;

const NavBar = styled.div`
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  margin: 10px 0;

  &:hover {
    & div {
      background-color: ${({ theme }) => theme.colors.lightgray};
    }
  }

  & div {
    width: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px 10px 8px;

    border-radius: 30px;

    & svg {
      width: 30px;
      height: 100%;
      margin-right: 10px;
    }
  }
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

const Avatar = styled.div`
  background-color: gray;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px 0;
  padding: 10px 13px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

const NavigationContainer = styled.div`
  width: 100%;
`;

const InfoContainer = styled.div`
  text-align: start;
  max-width: 100%;
  margin: 0 12px;
  & h1 {
    font-weight: 600;
    font-size: 1rem;
  }
  & span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textgray};
  }
`;

function Home() {
  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
          <NavigationContainer>
            <Logo />
            <NavigationBar>
              <Link to={'/home'}>
                <NavBar>
                  <div>
                    <MdHome />홈
                  </div>
                </NavBar>
              </Link>
              <Link to={'/home'}>
                <NavBar>
                  <div>
                    <MdOutlineBookmarkBorder />
                    북마크
                  </div>
                </NavBar>
              </Link>
              <Link to={'/home'}>
                <NavBar>
                  <div>
                    <MdPersonOutline />
                    프로필
                  </div>
                </NavBar>
              </Link>
            </NavigationBar>
            <TweetButton>트윗하기</TweetButton>
          </NavigationContainer>

          <UserInfo>
            <Avatar />
            <InfoContainer>
              <h1>이름</h1>
              <span>jungyu3826@naver.com</span>
            </InfoContainer>
            <MdMoreVert />
          </UserInfo>
        </HeaderContainer>
      </Header>
      <Main>
        <div>
          <div></div>
        </div>
      </Main>
    </Wrapper>
  );
}
export default Home;
