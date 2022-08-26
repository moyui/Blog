import { useState, useEffect } from 'react';
import Introduce from '@/components/list/introduce';
import Post from '@/components/list/post';

const zhihu = (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2088"
    width="200"
    height="200"
  >
    <path
      d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28z m-98.56 458.88l-16.8 66.88 23.68-20.8s53.92 61.28 64 76.48 1.44 68.96 1.44 68.96l-92.48-113.12s-29.12 101.12-68.48 124.16a97.6 97.6 0 0 1-80 6.56 342.08 342.08 0 0 0 85.44-89.76 382.88 382.88 0 0 0 39.52-119.36h-115.04s8.8-40.48 24.16-41.6 90.88 0 90.88 0l-1.76-124.8-43.2 2.24a96 96 0 0 1-32 48c-24.16 17.44-38.4 10.88-38.4 10.88s42.72-118.24 55.84-141.28 50.4-25.12 50.4-25.12l-23.04 66.72h147.84c17.6 0 18.56 40.64 18.56 40.64h-90.56v122.56s61.28-2.24 81.12 0 19.68 41.6 19.68 41.6z m329.44 160h-91.52l-65.12 46.24-13.6-46.24h-36.96v-368h208z"
      fill="#49C0FB"
      p-id="2089"
    ></path>
    <path
      d="M602.88 691.68l54.88-41.44h43.04V364.64h-121.12v285.6h11.2l12 41.44z"
      fill="#49C0FB"
      p-id="2090"
    ></path>
  </svg>
);

const github = (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2423"
    width="200"
    height="200"
  >
    <path
      d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
      p-id="2424"
    ></path>
  </svg>
);

const email = (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1444"
    width="200"
    height="200"
  >
    <path
      d="M69.76 302.72v418.08l229.92-207.04L69.76 302.72zM926.08 777.6L678.88 548.32l-166.56 155.2-169.12-155.2L98.72 777.6h827.36z"
      fill="#708A97"
      p-id="1445"
    ></path>
    <path
      d="M513.28 633.28L924.8 246.4H97.76l415.52 386.88zM954.24 299.68L718.08 513.12l236.16 207.68V299.68z"
      fill="#708A97"
      p-id="1446"
    ></path>
  </svg>
);

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
          name: '知乎',
          href: 'https://www.zhihu.com/people/gao-xi-yu-44',
          svg: zhihu
        },
        {
          id: 1,
          name: 'github',
          href: 'https://github.com/moyui',
          svg: github
        },
        {
          id: 2,
          name: 'email',
          href: 'mailto:gxy1510@gmail.com',
          svg: email
        }
      ]
    });
  }, []);

  useEffect(() => {
    setPosts([]);
  }, []);

  // const background = 'https://s2.loli.net/2022/08/26/taTxd7jpYgWPbuc.png';

  return (
    <section className="bg-moyui-pattern">
      <Introduce
        {...introduce}
        profilePhoto="https://s2.loli.net/2022/08/26/VicpWfjygAeRBYs.jpg"
      ></Introduce>
      {/* <ul></ul> */}
      {/* <Post></Post> */}
    </section>
  );
}

export default List;

// https://smms.app/image/VicpWfjygAeRBYs
// https://smms.app/delete/3wALY2VemlpNfIEyJOb6zjPoBR

// https://smms.app/image/taTxd7jpYgWPbuc
// https://smms.app/delete/yfv2OrJZz8HX9PAuRVFUxEltKN
