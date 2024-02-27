const http = require("http");
const url = require("url");
const fs = require("fs");
const replaceTemplate = require("./replaceTemplate");
require("dotenv").config();

const port = process.env.PORT || 3000;
const serverAddress = process.env.SERVER_ADDRESS || "127.0.0.1";

const data = fs.readFileSync(`${__dirname}/data/data.json`, `utf-8`);
const tempOverview = fs.readFileSync(
  `${__dirname}/template/overview.html`,
  `utf-8`
);
const tempProduct = fs.readFileSync(
  `${__dirname}/template/template-product.html`,
  `utf-8`
);
const tempCard = fs.readFileSync(
  `${__dirname}/template/template-card.html`,
  `utf-8`
);
const dataObj = JSON.parse(data);
// parse url

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  //   overview page
  if (pathname == "/" || pathname == "/overview") {
    res.writeHead(200, { Content_type: "text/html" });
    const cardhtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace(`{%PRODUCT_CARDS%}`, cardhtml);
    res.end(output);
    // product page
  } else if (pathname == "/product") {
    res.writeHead(200, { Content_type: "text/html" });
    const product = dataObj[query.id];
    const productOutput = replaceTemplate(tempProduct, product);
    res.end(productOutput);
    // api
  } else if (pathname === "/api") {
    res.end(data);
    // error
  } else {
    res.writeHead(404);
    res.end("<h1>page not fount</h1>");
  }
});

server.listen(port, serverAddress, () => {
  console.log("you are listening to port 8000");
});
