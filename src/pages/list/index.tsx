import { useState, useEffect } from 'react';
import Introduce from '@/components/list/introduce';
import Post from '@/components/list/post';

function List() {
  const [introduce, setIntroduce] = useState({});
  const [posts, setPosts] = useState([]);

  // const [state, setState] = useState(1);

  // useEffect(() => {
  //   setState(2);
  //   return () => {};
  // }, []);

  return (
    <section>
      {/* <Introduce></Introduce> */}
      <ul></ul>
      {/* <Post></Post> */}
    </section>
  );
}

export default List;
