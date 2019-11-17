import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getList } from '../api';
import Item from './item/index';

const List = styled.ul`
  width: 772px;
`;

const initialList = { status: 'loading', data: [], error: null };

function ArticleList() {
  const [list, setList] = useState(initialList);

  useEffect(() => {
    getList()
      .then(res => setList({ status: 'success', data: res.data.data.list }))
      .catch(error => setList({ status: 'error', data: [], error }));
  }, []);

  return (
    <List>
      {list.data.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </List>
  );
}

export default React.memo(ArticleList);
