const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Name
const dbName = "belajar";

// Use connect method to connect to the server
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Koneksi berhasil!");

    // pilih database dan collection
    const db = client.db(dbName);
    const mahasiswa = db.collection("mahasiswa");

    // Menambahkan 1 data ke collection mahasiswa
    // const result = await mahasiswa.insertOne({
    //   nama: "Erika",
    //   email: "erika@mail.com",
    // });
    // console.log("Data berhasil ditambahkan!");
    // console.log(result);

    // Menambahkan lebih dari 1 data
    // mencegah dokumen tambahan disisipkan jika salah satu gagal
    // const options = { ordered: true };

    // const result = await mahasiswa.insertMany([
    //   {
    //     nama: "drik",
    //     email: "drik@mail.com",
    //   },
    //   {
    //     nama: "trik",
    //     email: "trik@mail.com",
    //   },
    // ]);
    // console.log("Data berhasil ditambahkan!");

    // Menampilkan semua data yang ada di collection mahasiswa
    // const students = mahasiswa.find().toArray();
    // students
    //   .then((result) => {
    //     console.log(result); // Tampilkan array hasil query
    //   })
    //   .catch((error) => {
    //     console.log("Gagal mendapatkan data!", error);
    //   });

    // Menampilkan data berdasarkan kriteria yang ada di collection mahasiswa
    //   const student = mahasiswa.findOne({
    //     _id: new ObjectId("64a8fbd489c0147d59fb10e3"),
    //   });
    //   student
    //     .then((result) => {
    //       console.log(result); // Tampilkan array hasil query
    //     })
    //     .catch((error) => {
    //       console.log("Gagal mendapatkan data!", error);
    //     });

    // Mengubah data berdasarkan id
    // const updatePromise = mahasiswa.updateOne(
    //   {
    //     _id: new ObjectId("64a8fc0471358a25386eae42"),
    //   },
    //   {
    //     $set: {
    //       email: "alex@yahoo.com",
    //     },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Mengubah data lebih dari 1, berdasarkan kriteria
    // mahasiswa.updateMany(
    //   {
    //     nama: "alex",
    //   },
    //   {
    //     $set: {
    //       nama: "Alex Woy",
    //     },
    //   }
    // );

    // Menghapus 1 Data
    // mahasiswa
    //   .deleteOne({
    //     _id: new ObjectId("64a8fc1ab2a95d8c2186a459"),
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Menghapus lebih dari 1 data, berdasarkan kriteria
    mahasiswa
      .deleteMany({
        nama: "Orik",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Koneksi gagal!", error);
  }
}

connectToDatabase();
