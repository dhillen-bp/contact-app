const fs = require("fs");

// membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

// ambil semua data di contact.json
const loadContacts = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(fileBuffer);

  return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContacts();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};

// menuliskan / menimpa file contacts.json dengan data yg baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

// menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContacts();
  contacts.push(contact);
  saveContacts(contacts);
};

// cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContacts();
  return contacts.find((contact) => contact.nama === nama);
};

// hapus contact
const deleteContact = (nama) => {
  const contacts = loadContacts();

  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);
  saveContacts(filteredContacts);
};

const updateContacts = (contactBaru) => {
  const contacts = loadContacts();

  // hilangkan contact lama yg namanya sama dengan oldNama
  const filteredContacts = contacts.filter(
    (contact) => contact.nama !== contactBaru.oldNama
  );

  // hapus properti oldNama
  delete contactBaru.oldNama;
  // push data contact baru
  filteredContacts.push(contactBaru);
  // timpa dengan semua data yg baru
  saveContacts(filteredContacts);
};

module.exports = {
  loadContacts,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
  updateContacts,
};
