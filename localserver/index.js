var connect = require('connect')
	, serveStatic = require('serve-static')
	, app;

app = connect();

app.use(serveStatic('../public'));
app.use(serveStatic('../tuts'));


app.listen(5000);