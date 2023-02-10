import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMainHeaderTabButton } from 'types/home';

const Tab = styled.span`
  display: flex;
  flex-direction: column;
  width: max-content;
  position: relative;
`;

const Text = styled.span<{ isFollowing: boolean }>`
  color: ${({ theme, isFollowing }) =>
    isFollowing ? theme.colors.black : theme.colors.textgray};
  font-weight: ${({ isFollowing }) => (isFollowing ? '900' : '600')};
`;

const TabUnderBar = styled.span<{ isFollowing: boolean }>`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.contents};
  position: absolute;
  bottom: -100%;
  border-radius: 10px;
  margin-bottom: 1px;
  display: ${({ isFollowing }) => (isFollowing ? 'inline' : 'none')};
`;

function MainHeaderTabButton({
  href,
  text,
  setIsFollowing,
  isFollowing,
  index,
}: IMainHeaderTabButton) {
  const onClickTab = () => {
    if (index === 0) {
      setIsFollowing(false);
    } else if (index === 1) {
      setIsFollowing(true);
    }
  };
  return (
    <Link to={href} onClick={onClickTab}>
      <Tab>
        <Text isFollowing={isFollowing}>{text}</Text>
        <TabUnderBar isFollowing={isFollowing} />
      </Tab>
    </Link>
  );
}

export default MainHeaderTabButton;
