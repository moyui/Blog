import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/navBar/index';
import Foot from '../../components/footer/index';
import AboutMe from './aboutMe/index';
import ArticleList from './articleList/index';

const Wrap = styled.div`
  display: grid;
  grid-template-rows: auto auto 48px;
  grid-template-areas:
    'header header'
    'main main'
    'footer footer';
`;

const Header = styled.header`
  grid-area: header;
`;

const Main = styled.div`
  grid-area: main;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MainInner = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

const BigImage = styled.img`
  display: block;
  width: 100vw;
  height: 100vh;
`;

const Footer = styled(Foot)`
  grid-area: footer;
`;

export default function Index() {
  return (
    <Wrap>
      <Header>
        <NavBar></NavBar>
        <BigImage src="https://i.loli.net/2019/09/10/A1ak4ROTd8PKNEL.png" />
      </Header>
      <Main>
        <MainInner>
          <ArticleList />
          <AboutMe></AboutMe>
        </MainInner>
      </Main>
      <Footer></Footer>
    </Wrap>
  );
}
