import React, { useEffect, useRef } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import styled from 'styled-components';
import { IUserInfoButtonModalProps } from 'types/home';
import UserInfoModalButton from './UserInfoModalButton';

const UserButtonModal = styled.div`
  width: 250px;
  height: 100px;
  max-height: 100px;
  background-color: ${({ theme }) => theme.colors.textgray};
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 0 5px 2px ${({ theme }) => theme.colors.lightgray};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & svg {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: -40px;
    transform: translate(-50%, -50%);
    left: 50%;
    fill: ${({ theme }) => theme.colors.textgray};
    stroke: ${({ theme }) => theme.colors.lightgray};
  }
`;

function UserInfoButtonModal({ setIsOpen }: IUserInfoButtonModalProps) {
  const modalEl = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.BaseSyntheticEvent | MouseEvent) => {
    if (modalEl && !modalEl.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return (
    <UserButtonModal ref={modalEl}>
      <UserInfoModalButton text="로그아웃" href="/logout" />
      <MdArrowDropDown />
    </UserButtonModal>
  );
}

export default UserInfoButtonModal;
