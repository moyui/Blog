import { useState, useEffect } from 'react';
import { ZHIHU_SVG, GITHUB_SVG, EMAIL_SVG, PROFILE_PHOTO } from '@/constants';
import Introduce from '@/components/list/introduce';
import Post from '@/components/list/post';

function List() {
  const [introduce, setIntroduce] = useState({
    profilePhoto: '',
    connect: [] as any
  });
  const [posts, setPosts] = useState([] as any);

  // const [state, setState] = useState(1);

  useEffect(() => {
    setIntroduce({
      profilePhoto: '',
      connect: [
        {
          id: 0,
          name: 'zhihu',
          nameCN: '知乎',
          href: 'https://www.zhihu.com/people/gao-xi-yu-44',
          svg: ZHIHU_SVG
        },
        {
          id: 1,
          name: 'github',
          nameCN: 'github',
          href: 'https://github.com/moyui',
          svg: GITHUB_SVG
        },
        {
          id: 2,
          name: 'email',
          nameCN: 'email',
          href: 'mailto:gxy1510@gmail.com',
          svg: EMAIL_SVG
        }
      ]
    });
  }, []);

  useEffect(() => {
    setPosts([]);
  }, []);

  // const background = 'https://s2.loli.net/2022/08/26/taTxd7jpYgWPbuc.png';

  return (
    <section className="">
      <Introduce {...introduce} profilePhoto={PROFILE_PHOTO}></Introduce>
      <ul>
        {posts.map((item) => (
          // <Post></Post>
          <></>
        ))}
      </ul>
    </section>
  );
}

export default List;

// https://smms.app/image/VicpWfjygAeRBYs
// https://smms.app/delete/3wALY2VemlpNfIEyJOb6zjPoBR

// https://smms.app/image/taTxd7jpYgWPbuc
// https://smms.app/delete/yfv2OrJZz8HX9PAuRVFUxEltKN
