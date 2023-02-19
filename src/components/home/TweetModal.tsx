import { Modal } from '@mui/material';
import React from 'react';
import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import TweetInput from './TweetInput';

const ModalContainer = styled.div`
  position: absolute;
  width: 600px;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightgray};
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
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

  &:focus {
    outline: none;
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

interface ITweetModalProps {
  isOpen: boolean;
  onClickTweet: () => void;
}

function TweetModal({ isOpen, onClickTweet }: ITweetModalProps) {
  return (
    <Modal open={isOpen} onClose={onClickTweet}>
      <ModalContainer>
        <ExitButton onClick={onClickTweet}>
          <MdClear />
        </ExitButton>

        <TweetInput />
      </ModalContainer>
    </Modal>
  );
}

export default TweetModal;
