interface ConnectProps {
  id: number;
  nameCN: string;
  name: string;
  href: string;
  svg: JSX.Element;
}

export interface IntroduceProps {
  // backgroundImage: string;
  profilePhoto: string;
  connect: ConnectProps[];
}
