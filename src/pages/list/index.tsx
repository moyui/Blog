import { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ZHIHU_SVG, GITHUB_SVG, EMAIL_SVG, PROFILE_PHOTO } from '@/constants';
import Header from '@/components/common/header';
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
  const isLoading = useRef(false);
  const [introduce, setIntroduce] = useState({
    profilePhoto: '',
    connect: [] as any
  });
  const [posts, setPosts] = useState([] as PostResponse[]);
  const [isPostsFinish, setIsPostsFinish] = useState(false);

  const fetchPosts = () => {
    if (isLoading.current) return;
    isLoading.current = true;
    getPosts(page.current)
      .then((res) => {
        setPosts([...posts, ...res.data]);
        if (res.data?.length === 0) {
          setIsPostsFinish(true);
        }
        isLoading.current = false;
      })
      .catch((err) => {
        console.log('🚀 ~ file: index.tsx ~ line 49 ~ getPosts ~ err', err);
        isLoading.current = false;
      });
  };

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
    fetchPosts();
  }, []);

  return (
    <div
      id="list"
      className="overflow-y-scroll h-[100vh] after:bg-moyui-pattern after:opacity-70 after:content-[''] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:z-[-1]"
    >
      <Header></Header>
      <main className="w-[960px] min-h-full px-16 box-content mx-auto bg-while">
        <Introduce {...introduce} profilePhoto={PROFILE_PHOTO}></Introduce>
        <ul className="w-full mt-[-1.5rem] h-full">
          <InfiniteScroll
            scrollableTarget="list"
            dataLength={posts.length}
            hasMore={!isPostsFinish}
            pullDownToRefreshThreshold={100}
            next={() => {
              page.current++;
              fetchPosts();
            }}
            loader={
              <h4 className="flex flex-row h-10 box-content py-2 text-gray-600 items-center justify-center">
                更多内容加载中...
              </h4>
            }
            endMessage={
              <h4 className="flex flex-row h-10 box-content py-2 text-gray-600 items-center justify-center">
                暂无更多内容
              </h4>
            }
          >
            {posts.map((item) => (
              <Post
                key={item.id}
                image="//s2.loli.net/2022/08/27/hvTjF3KBntQO4V9.jpg"
                title={item.title}
                createDate={transFormDate(item.created_at)}
                updateDate={transFormDate(item.updated_at)}
                href={item.html_url}
              ></Post>
            ))}
          </InfiniteScroll>
        </ul>
      </main>
    </div>
  );
}

export default List;

// https://smms.app/image/VicpWfjygAeRBYs
// https://smms.app/delete/3wALY2VemlpNfIEyJOb6zjPoBR

// https://smms.app/image/taTxd7jpYgWPbuc
// https://smms.app/delete/yfv2OrJZz8HX9PAuRVFUxEltKN

// https://smms.app/image/hvTjF3KBntQO4V9
// https://smms.app/delete/gqm8OZrifV7YoN9budJ5eESkxX

// https://smms.app/image/e3mcuQk4NClWzEw
// https://smms.app/delete/1vdabHjlwyIre27YGKTn8spiJV
