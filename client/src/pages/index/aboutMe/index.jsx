import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  position: sticky;
  top: 60px;
  width: 315px;
  padding: 20px;
  background-color: #fff;
  margin-top: 40px;
  margin-left: 20px;
  box-sizing: border-box;
  align-self: start;
`;

const Avatar = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 4px;
`;

const Info = styled.div`
  font-size: 16px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Meta = styled.div`
  margin-top: 10px;
`;

const Link = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

const LinkTo = styled.span`
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-image: url(${props => props.url});
  background-size: 36px;
  background-repeat: no-repeat;
  background-color: #f4f4f4;
  margin-left: 20px;
  :first-child {
    margin-left: 0;
  }
`;

function AboutMe() {
  const contact = [
    {
      url: 'https://i.loli.net/2019/11/09/BNQxaboqApf3Ois.png',
      name: '知乎'
    },
    {
      url: 'https://i.loli.net/2019/11/09/UG8PodxmL1DjFk4.png',
      name: 'Github'
    }
  ];

  return (
    <Aside>
      <Avatar src="https://i.loli.net/2019/11/09/VTogxvSePU8Chmj.png" />
      <Info>
        <Meta>昵称：moyui默羽(Sean)</Meta>
        <Meta>前端开发工程师/图形学爱好者/音游er</Meta>
      </Info>
      <Link>
        {contact.map(item => (
          <LinkTo key={item.name} url={item.url}></LinkTo>
        ))}
      </Link>
    </Aside>
  );
}

export default React.memo(AboutMe);
