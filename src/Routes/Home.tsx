import Logo from 'components/common/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MdHome,
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
  font-size: 1.5rem;
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

    border-radius: 20px;

    & svg {
      width: 30px;
      height: 100%;
      margin-right: 10px;
    }
  }
`;

function Home() {
  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
          <div>
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
            <div>트윗하기</div>
          </div>

          <div>사용자</div>
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
