import React, { useCallback, useRef, useState } from 'react';
import { MdOutlineImage } from 'react-icons/md';
import styled from 'styled-components';

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

const TweetTextArea = styled.textarea`
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

const InputTweetButton = styled.button<{ isInputFill: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightcontents};
  font-weight: 600;
  font-size: 1.1rem;
  padding: 8px 15px;
  border: none;
  border-radius: 30px;

  cursor: ${({ isInputFill }) => (isInputFill ? 'pointer' : 'auto')};
  background-color: ${({ theme, isInputFill }) =>
    isInputFill ? theme.colors.contents : theme.colors.lightcontents};
`;

function TweetInput() {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [maxLength, setMaxLength] = useState<number>(0);
  const [isInputFill, setIsInputFill] = useState<boolean>(false);

  const calcLetterCount = useCallback(() => {
    if (textRef.current) {
      setMaxLength(textRef.current?.value?.length!);
      if (textRef.current.value.length > 0) {
        setIsInputFill(true);
      } else {
        setIsInputFill(false);
      }
    }
  }, []);

  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, []);
  return (
    <TweetInputContainer>
      <AvatarContainer>
        <TweetAvatar />
      </AvatarContainer>

      <InputContainer>
        <TweetTextArea
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

            <InputTweetButton disabled={isInputFill} isInputFill={isInputFill}>
              Tweet
            </InputTweetButton>
          </TweetButtonContainer>
        </InputBottom>
      </InputContainer>
    </TweetInputContainer>
  );
}

export default TweetInput;
