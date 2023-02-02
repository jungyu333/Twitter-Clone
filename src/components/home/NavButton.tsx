import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

interface INavButtonProps {
  href: string;
  text: string;
  icon: ReactNode;
}

function NavButton({ href, text, icon }: INavButtonProps) {
  return (
    <Link to={href}>
      <NavBar>
        <div>
          {icon}
          {text}
        </div>
      </NavBar>
    </Link>
  );
}

export default NavButton;
