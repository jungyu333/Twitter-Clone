export interface INavButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

export interface IUserInfoButtonModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserInfoModalButton {
  text: string;
  href: string;
}

export interface IMainHeaderTabButton {
  href: string;
  text: string;
  setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  isFollowing: boolean;
  index: number;
}

export interface ITweet {
  createdAt: number;
  images: string[];
  text: string;
  userId: string;
  email: string;
  name: string;
  avatar: string;
  id: string;
  comments?: IComment[];
}

export interface ITweetData {
  text: string;
  userId: string;
  createdAt: number;
  tweetImages?: string[];
}

export interface ITweetCard {
  tweetData: ITweet;
}

export interface ICreateCommentData {
  userId: string;
  tweetId: string;
  text: string;
  createdAt: number;
}

export interface ITweetCommentInputProps {
  tweetId: string;
}

export interface ITweetCommentsProps extends ITweetCommentInputProps {}

export interface IComment {
  userId: string;
  tweetId: string;
  createdAt: number;
  avatar: string;
  email: string;
  name: string;
  text: string;
  id: string;
}
