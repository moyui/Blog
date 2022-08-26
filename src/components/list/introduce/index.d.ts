interface ConnectProps {
  id: number;
  name: string;
  href: string;
  svg: JSX.Element;
}

export interface IntroduceProps {
  // backgroundImage: string;
  profilePhoto: string;
  connect: ConnectProps[];
}
