import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getList } from "../api";
import Item from "./item/index";

const List = styled.ul`
  width: 772px;
`;

const initialList = { status: "loading", data: [], error: null };

function ArticleList() {
  const [list, setList] = useState(initialList);

  useEffect(() => {
    getList()
      .then(res =>
        setList({ status: "success", data: res.data.repository.issues.edges })
      )
      .catch(error => setList({ status: "error", data: [], error }));
  }, []);

  return (
    <List>
      {list.data.map(item => {
        const formatData = formatItem(item);
        return <Item {...formatData} key={formatData.id} />;
      })}
    </List>
  );
}

function formatItem(item) {
  const data = item.node;
  return {
    id: item.cursor,
    title: data.title,
    date: data.updatedAt,
    content: data.bodyText,
    sorting: "",
    watchingTimes: "",
    number: data.number
  };
}

export default React.memo(ArticleList);
