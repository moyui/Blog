const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === '/articleitems') {
    res.sendDate = true;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.statusCode = 200;
    const data = {
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
    res.end(JSON.stringify(data));
  }

  if (req.url === '/articleinfo') {
    res.sendDate = true;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.statusCode = 200;
    const data = {
      data: {
          title: '百度',
          page: '百度是一家垃圾搜索引擎啊喵~',
          previousPage: null,
          nextPage: 2
        }
    };
    res.end(JSON.stringify(data));
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在127.0.0.1和8000上`);
})