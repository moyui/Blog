const Koa = require('koa');
const Router = require('koa-router');
const KoaStatic = require('koa-static');
const fs = require('fs');
const path = require('path');

const app = new Koa({
  proxy: true
});

const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'));
const assetsPath = path.resolve(__dirname, '../dist');

const router = new Router();

router.all('/blog', async (ctx) => {
  ctx.body = template;
  ctx.set('Content-Type', 'text/html');
  ctx.status = 200;
});

app.use(KoaStatic(assetsPath));
app.use(router.routes()).use(router.allowedMethods());

const port = 8001;

app.listen(port, '0.0.0.0', () => {
  console.log('start at ' + port);
});
