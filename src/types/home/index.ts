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
