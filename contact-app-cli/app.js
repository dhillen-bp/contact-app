const yargs = require("yargs");
const {
  saveContact,
  listContact,
  detailContact,
  deleteContact,
} = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Alamat Email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "Nama Telephone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      saveContact(argv.nama, argv.email, argv.noHp);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama&noHp contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no Hp contact",
  handler() {
    listContact();
  },
});

// menampilkan detail kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// menghapus kontak berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
