const restify = require('restify');

const server = restify.createServer({
    name: 'payment-service',
    version: '1.0.0'
});

const plugins = restify.plugins;
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());

server.get('/echo/:name', (req, res, next) => {
    res.send(req.params);
    return next();
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`${server.name} listening at port ${port}`));