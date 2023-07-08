const express = require("express");
const expressLayouts = require("express-ejs-layouts");

require("./utils/db");
const Contact = require("./model/contact");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;
const host = "localhost";

// Setup EJS
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Halaman Home
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

// Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  //   Contact.find().then((contact) => {
  //     res.send(contact);
  //   });
  const contacts = await Contact.find();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
    msg: req.flash("msg"),
  });
});

// Halaman detail contact
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.listen(port, host, () => {
  console.log(`Mongo Contact App | listening at http://${host}:${port}`);
});
