import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Li = styled(Link)`
  background-color: #fff;
  margin-top: 40px;
  border-radius: 4px;
  padding: 40px;
  display: block;
`;

const Body = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60px 40px auto;
  grid-template-areas:
    "title"
    "meta"
    "content";
  overflow: hidden;
`;

const Title = styled.h5`
  grid-area: title;
  font-size: 32px;
  text-align: center;
  line-height: 60px;
  color: #000;
`;

const Meta = styled.div`
  grid-area: meta;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .sorting {
    color: #000;
  }

  .date,
  .watching-times {
    margin-left: 8px;
  }

  .date {
    color: #0e3bbd;
  }

  .watching-times {
    color: #fd4d39;
  }
`;

const Content = styled.pre`
  grid-area: content;
  padding: 0 20px;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const Button = styled.button`
  background: #97dffd;
  color: #fff;
  font-size: 13px;
  padding: 1px 15px;
  border-radius: 5px;
  border: none;
  display: block;
  line-height: 2;
  margin-top: 10px;
  margin: 10px auto 0;
`;

function ArticleItem(props) {
  return (
    <Li to={`/articlePage/${props.number}`}>
      <Body>
        <Title>{props.title}</Title>
        <Meta>
          <span className="sorting">分类：{props.sorting}</span>
          <span className="date">日期：{props.date}</span>
          <span className="watching-times">
            浏览次数：{props.watchingTimes}
          </span>
        </Meta>
        <Content>{props.content}</Content>
      </Body>
      <Button>查看全部</Button>
    </Li>
  );
}

export default React.memo(ArticleItem);
