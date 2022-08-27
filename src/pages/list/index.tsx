import { useState, useEffect, useRef } from 'react';
import { ZHIHU_SVG, GITHUB_SVG, EMAIL_SVG, PROFILE_PHOTO } from '@/constants';
import Introduce from '@/components/list/introduce';
import Post from '@/components/list/post';
import { getPosts, PostResponse } from './api';

const transFormDate = (timeStamp: string) => {
  const res = new Date(timeStamp);
  const month = res.getMonth() + 1;
  const date = res.getDate();
  return `${res.getFullYear()}-${month > 10 ? month : '0' + month}-${
    date > 10 ? date : '0' + date
  }`;
};

function List() {
  const page = useRef(1);
  const [introduce, setIntroduce] = useState({
    profilePhoto: '',
    connect: [] as any
  });
  const [posts, setPosts] = useState([] as PostResponse[]);

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
    getPosts(page.current)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log('🚀 ~ file: index.tsx ~ line 49 ~ getPosts ~ err', err);
      });
  }, []);

  // const background = 'https://s2.loli.net/2022/08/26/taTxd7jpYgWPbuc.png';

  return (
    <section className="w-[960px] mx-auto">
      <Introduce {...introduce} profilePhoto={PROFILE_PHOTO}></Introduce>
      <ul className="w-full">
        {posts.map((item) => (
          <Post
            key={item.id}
            image="//s2.loli.net/2022/08/27/hvTjF3KBntQO4V9.jpg"
            title={item.title}
            createDate={transFormDate(item.created_at)}
            updateDate={transFormDate(item.updated_at)}
            href=""
          ></Post>
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

// https://smms.app/image/hvTjF3KBntQO4V9
// https://smms.app/delete/gqm8OZrifV7YoN9budJ5eESkxX
