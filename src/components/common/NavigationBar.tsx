import NavButton from 'components/home/NavButton';
import TweetModal from 'components/home/TweetModal';
import UserInfoButton from 'components/home/UserInfoButton';
import React, { useEffect, useState } from 'react';
import {
  MdHome,
  MdOutlineBookmarkBorder,
  MdPersonOutline,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Header = styled.header`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-end;
  width: max-content;
`;

const NavigationContainer = styled.div`
  width: 100%;
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

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  width: 100%;
  height: 500px;
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

interface INavigationBarProps {
  children: React.ReactNode;
}

function NavigationBar({ children }: INavigationBarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { tweetUploadDone } = useSelector((state: RootState) => state.tweet);

  const onClickTweet = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (tweetUploadDone) {
      setIsOpen(false);
    }
  }, [tweetUploadDone]);
  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
          <NavigationContainer>
            <Logo />
            <Navigation>
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
            </Navigation>
            <TweetButton onClick={onClickTweet}>트윗하기</TweetButton>
          </NavigationContainer>
          <UserInfoButton />
        </HeaderContainer>

        <TweetModal isOpen={isOpen} onClickTweet={onClickTweet} />
      </Header>
      {children}
    </Wrapper>
  );
}

export default NavigationBar;
