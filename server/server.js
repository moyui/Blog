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
          title: 'Hello World!',
          archive: '杂项',
          date: '2018/3/22',
          readTimes: 'NaN',
          abstract: '嘛，程序员的第一次都是Hello World吧！',
        }
      ]
    };
    ctx.body = JSON.stringify(returnData);
  } else if (path === '/articleinfo/1' && ctx.method === 'GET') {
    const data = ctx.request.path;
    ctx.status = 200;
    ctx.set('Content-Type', 'application/json; text/html');
    const returnData = {
      data: {
          status: 'success',
          title: 'Hello World!',
          page: '嘛，程序员的第一次都是Hello World吧!等下会有自我介绍的(等下不知道要几天后了',
          previousPage: 'No',
          nextPage: 'No',
      }
    };
    ctx.body = JSON.stringify(returnData);
  }
});

app.listen(443, '45.32.203.201', () => {
  console.log('服务器正在运行');
});