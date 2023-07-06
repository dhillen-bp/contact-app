const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
// Third party middleware
app.use(expressLayouts);
// Built in middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
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
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
