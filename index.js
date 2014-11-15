/**
 * Created by bolehivsky on 11/15/14.
 */
var restify = require('restify');
var server = restify.createServer({
    name: 'museumServerNodeJS',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
    res.send(req.params);
    return next();
});

server.listen(process.env.PORT || 5000, function () {
    console.log('%s listening at %s', server.name, server.url);
});