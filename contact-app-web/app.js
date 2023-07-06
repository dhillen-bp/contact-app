const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Third party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// Built in middleware
app.use(express.static("public"));

// Application level middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });

  const mahasiswa = [
    // {
    //   nama: "Sandika Galih",
    //   email: "sdkglh@mail.com",
    // },
    // ,
    // {
    //   nama: "Erik Galih",
    //   email: "erik@mail.com",
    // },
  ];

  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Dhillen",
    title: "Home",
    mahasiswa: mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
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
