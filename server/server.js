const Koa = require('koa');
const cors = require('koa2-cors');

const app = new Koa();
app.use(cors());

app.use(async (ctx) => {
  let path = ctx.request.path;
  if (path === '/articleitems' && ctx.method === 'GET') {
    const data = ctx.request.path;
    ctx.status = 200;
    ctx.set('Content-Type', 'application/json');
    const returnData = {
      data: [
        {
          id: 1,
          status: 'success',
          title: '百度',
          archive: '网址',
          date: '2018/2/28',
          readTimes: '1',
          abstract: '这是百度首页',
        },
        {
          id: 2,
          status: 'success',
          title: '谷歌',
          archive: '网址',
          date: '2018/3/1',
          readTimes: '1',
          abstract: '这是谷歌首页',
        },
        {
          id: 3,
          status: 'success',
          title: '百度',
          archive: '网址',
          date: '2018/2/28',
          readTimes: '1',
          abstract: '这是百度首页',
        },
        {
          id: 4,
          status: 'success',
          title: '谷歌',
          archive: '网址',
          date: '2018/3/1',
          readTimes: '1',
          abstract: '这是谷歌首页',
        },
        {
          id: 5,
          status: 'success',
          title: '百度',
          archive: '网址',
          date: '2018/2/28',
          readTimes: '1',
          abstract: '这是百度首页',
        },
        {
          id: 6,
          status: 'success',
          title: '谷歌',
          archive: '网址',
          date: '2018/3/1',
          readTimes: '1',
          abstract: '这是谷歌首页',
        },
        {
          id: 7,
          status: 'success',
          title: '百度',
          archive: '网址',
          date: '2018/2/28',
          readTimes: '1',
          abstract: '这是百度首页',
        },
        {
          id: 8,
          status: 'success',
          title: '谷歌',
          archive: '网址',
          date: '2018/3/1',
          readTimes: '1',
          abstract: '这是谷歌首页',
        },
        {
          id: 9,
          status: 'success',
          title: '百度',
          archive: '网址',
          date: '2018/2/28',
          readTimes: '1',
          abstract: '这是百度首页',
        },
        {
          id: 10,
          status: 'success',
          title: '谷歌',
          archive: '网址',
          date: '2018/3/1',
          readTimes: '1',
          abstract: '这是谷歌首页',
        }
      ]
    };
    ctx.body = JSON.stringify(returnData);
  }
});

app.listen(443, '45.32.203.201', () => {
  console.log('服务器正在运行');
});