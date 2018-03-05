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
    console.log(req.body);
    const data = {
      data: [
        {
          id: 0001,
          status: 'success',
          link: 'article',
          title: '百度',
          archive: '网址',
          date: '2018/2/28',
          readTimes: '1',
          abstract: '这是百度首页',
        },
        {
          id: 0002,
          status: 'success',
          link: 'article',
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
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在127.0.0.1和8000上`);
})