import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/index";

import fetchArticle from "./api";

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
      <div>
        <h3>{info.data.title}</h3>
        <span>{info.data.updatedAt}</span>
      </div>
      <section dangerouslySetInnerHTML={{ __html: info.data.body }}></section>
    </>
  );
}

export default ArticlePage;
