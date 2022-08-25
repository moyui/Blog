interface ConnectProps {
  name: string;
  href: string;
  image: string;
}

export interface IntroduceProps {
  backgroundImage: string;
  profilePhoto: string;
  connect: ConnectProps[];
}
