import LinearLoading from 'components/common/LinearLoading';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdClear, MdOutlineImage } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { createTweet } from 'redux/action/tweet';
import { RootState, useAppDispatch } from 'redux/store';
import styled from 'styled-components';
import TweetInputAvatar from './TweetInputAvatar';

const TweetInputContainer = styled.div`
  padding: 5px 14px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const InputContainer = styled.form`
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

const InputBottom = styled.div<{ previewLength: number }>`
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
    cursor: ${({ previewLength }) =>
      previewLength === 4 ? 'default' : 'pointer'};
    &:hover {
      background-color: ${({ theme, previewLength }) =>
        previewLength === 4 ? 'none' : theme.colors.lightcontents};
    }
  }

  & svg {
    width: 20px;
    height: 20px;

    color: ${({ theme, previewLength }) =>
      previewLength === 4 ? theme.colors.lightcontents : theme.colors.contents};
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

const ImageInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img<{ index: number; previewLength: number }>`
  width: ${({ previewLength }) => (previewLength > 1 ? '200px' : '400px')};
  height: ${({ previewLength }) => (previewLength > 1 ? '200px' : '400px')};
`;

const PreviewBox = styled.div`
  position: relative;
`;

const PreviewDelete = styled.div`
  position: absolute;
  top: 0;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
`;

function TweetInput() {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [maxLength, setMaxLength] = useState<number>(0);
  const [isInputFill, setIsInputFill] = useState<boolean>(false);
  const [preview, setPreview] = useState<string[]>([]);
  const [tweetText, setTweetText] = useState<string>('');
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.login);
  const { tweetUploadLoading, tweetUploadDone } = useSelector(
    (state: RootState) => state.tweet,
  );

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

  const onClickImage = () => {
    if (imageRef.current) {
      if (preview.length === 4) {
        return;
      } else {
        imageRef.current.click();
      }
    }
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === 'string') {
          setPreview([data.target.result, ...preview]);
        }
      };
      event.target.value = '';
    }
  };

  const onClickPreviewDelete = (event: React.MouseEvent, index: number) => {
    const previewImage = preview;
    previewImage.splice(index, 1);
    setPreview([...previewImage]);
  };

  const onChangeTweetText = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = event.target.value;
      setTweetText(text);
    },
    [],
  );

  const onSubmitTweet = (event: React.FormEvent) => {
    event.preventDefault();

    if (user) {
      const createdAt = Date.now();

      dispatch(
        createTweet({
          text: tweetText,
          userId: user.uid,
          createdAt: createdAt,
          tweetImages: preview,
        }),
      );
    }
  };

  useEffect(() => {
    if (tweetUploadDone) {
      setTweetText('');
      setMaxLength(0);
      setPreview([]);
    }
  }, [tweetUploadDone]);

  return (
    <>
      {tweetUploadLoading && <LinearLoading />}

      <TweetInputContainer onSubmit={onSubmitTweet}>
        <TweetInputAvatar avatarUrl={user?.avatar!} />

        <InputContainer>
          <TweetTextArea
            placeholder="What's happening?"
            ref={textRef}
            onInput={handleResizeHeight}
            rows={2}
            onKeyUp={calcLetterCount}
            onKeyDown={calcLetterCount}
            maxLength={150}
            value={tweetText}
            onChange={(event) => onChangeTweetText(event)}
          />
          <PreviewContainer>
            {preview.map((image, index) => (
              <PreviewBox key={index}>
                <PreviewDelete
                  onClick={(event: React.MouseEvent) =>
                    onClickPreviewDelete(event, index)
                  }
                >
                  <MdClear />
                </PreviewDelete>
                <PreviewImage
                  previewLength={preview.length}
                  index={index}
                  src={image}
                />
              </PreviewBox>
            ))}
          </PreviewContainer>

          <InputBottom previewLength={preview.length}>
            <div onClick={onClickImage}>
              <MdOutlineImage />
            </div>
            <ImageInput
              type={'file'}
              ref={imageRef}
              accept="image/*"
              onChange={onChangeImage}
            />

            <TweetButtonContainer>
              <LetterCount>{maxLength}</LetterCount>

              <InputTweetButton
                type="submit"
                disabled={maxLength === 0 && !tweetUploadLoading}
                isInputFill={isInputFill}
              >
                Tweet
              </InputTweetButton>
            </TweetButtonContainer>
          </InputBottom>
        </InputContainer>
      </TweetInputContainer>
    </>
  );
}

export default TweetInput;
