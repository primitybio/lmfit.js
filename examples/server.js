const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	console.log(req.url);
	switch (req.url) {
		case "/": {
			res.setHeader("Content-Type", "text/html");
			res.end(fs.readFileSync(`${__dirname}/index.html`));
			break;
		}
		case "/dist/lm.js": {
			res.setHeader("Content-Type", "text/javascript;charset=UTF-8");
			res.end(fs.readFileSync(`${__dirname}/../dist/lm.js`));
			break;
		}
		default: {
			res.statusCode = 404;
			break;
		}
	}
});

server.listen(50000, () => {
	console.log(`Listening on http://localhost:${server.address().port}`);
});
