const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const app = new Koa();
app.use(bodyParser());
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
        }
      ]
    };
    ctx.body = JSON.stringify(returnData);
  }
});

app.listen(8000, '127.0.0.1', () => {
  console.log('服务器正在运行');
});