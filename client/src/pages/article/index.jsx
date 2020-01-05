import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "../../components/navBar/index";
import Foot from '../../components/footer/index';
import fetchArticle from "./api";

const Article = styled.div`
  width: 772px;
  background-color: #fff;
  border-radius: 4px;
  margin: 38px auto;
  overflow: auto;
`;

const Title = styled.h1`
  color: #444;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-top: 38px;
`;

const Date = styled.span`
  color: #0e3bbd;
  margin-top: 10px;
  display: inline-block;
`;

const initiaPage = {
  status: "loading",
  data: {
    title: "",
    updatedAt: "",
    body: ""
  },
  error: null
};

function ArticlePage(props) {
  const {
    match: { params }
  } = props;
  const { number } = params;

  const [info, setInfo] = useState(initiaPage);

  useEffect(() => {
    fetchArticle({ number }).then(res => {
      const data = res.data.repository.issue;
      setInfo({
        status: "success",
        data: {
          title: data.title,
          updatedAt: data.updatedAt,
          body: data.bodyHTML
        }
      });
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Article>
        <Title>{info.data.title}</Title>
        <Date>{info.data.updatedAt}</Date>
        <section
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: info.data.body }}
        ></section>
      </Article>
      <Foot></Foot>
    </>
  );
}

export default ArticlePage;
