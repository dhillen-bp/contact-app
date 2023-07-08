const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/belajar")
  .then(() => console.log("Connected!"));

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "human",
//   nohp: "0851234567",
//   email: "human@gmail.com",
// });

// // Simpan ke collections
// contact1.save().then((contact) => console.log(contact));
