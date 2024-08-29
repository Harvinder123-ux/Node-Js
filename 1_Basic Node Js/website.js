import http from "http";
import fs from "fs/promises";
import { error } from "console";
const port = process.env.PORT || 3007;

const app = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");

  //   console.log(req);
  //   console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.statusCode = 200;
    const fileData = await fs.readFile("index.html");
    res.end(fileData.toString());
  } else if (req.url == "/bout") {
    res.statusCode = 200;
    res.end("<h1>About page Harvinder</h1>");

    //created the static file server
  } else if (req.url == "/harvi") {
    res.end("<h1>Hello This Is Harvinder Public</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Error</h1><p>Page Not Found on this server</p>");
  }
});

app.listen(port, () => {
  console.log(`Server listening at the port ${port}`);
});
