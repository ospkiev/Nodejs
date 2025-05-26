const service = require('./service');
const router = require("../helpers/router");

router.addRoute('GET', '/', (req, res) => {
  const data = service.getUser();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

router.addRoute('POST', '/users', (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const userData = JSON.parse(body);
    const newUser = service.createUser(userData);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  });
});

router.addRoute('PUT', '/users', (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const userData = JSON.parse(body);
    const newUser = service.updateUser(userData);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  });
});

router.addRoute('DELETE', '/users', (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const userData = JSON.parse(body);
    const newUser = service.deleteUser(userData.id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  });
});


module.exports = router;