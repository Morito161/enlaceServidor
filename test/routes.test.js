const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../index');
const routes = ['/', '/mercurio', '/venus', '/tierra', '/marte', '/jupiter', '/saturno', '/urano', '/neptuno'];
let server, base;
test.before(async () => {
  server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});
test.after(async () => {
  if (server) await new Promise((resolve, reject) => server.close(err => err ? reject(err) : resolve()));
});
for (const route of routes) {
  test(`GET ${route} renders successfully`, async () => {
    const response = await fetch(base + route);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') || '', /html/);
    assert.equal(response.headers.get('x-powered-by'), null);
  });
}
