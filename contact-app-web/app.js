const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("Halaman About!");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  //   res.send("Halaman Contact!");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("http");
// const fs = require("fs");

// const port = 3000;
// const host = "127.0.0.1";

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error : file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/html",
//   });

//   const url = req.url;

//   switch (url) {
//     case "/about":
//       renderHTML("./about.html", res);
//       break;
//     case "/contact":
//       renderHTML("./contact.html", res);
//       break;
//     default:
//       renderHTML("./index.html", res);
//       break;
//   }

//   //   if (url === "/about") {
//   //     renderHTML("./about.html", res);
//   //   } else if (url === "/contact") {
//   //     renderHTML("./contact.html", res);
//   //   } else {
//   //     // res.write("Hello World!");
//   //     renderHTML("./index.html", res);
//   //   }
// });

// server.listen(port, host, () => {
//   console.log(`Server is listening on port ${port}`);
// });
