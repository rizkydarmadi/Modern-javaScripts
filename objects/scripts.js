// literal => gak boleh duplikat

// let mahasiswa = {
//   nama: 'taylor',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`halo taylor ${this.nama}, selamat makan`);
//   },
// };

// object function => mirip kayak oop python
// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, enjoy your game`);
//   };
//   return mahasiswa;
// }
// let jessi = mahasiswa('jessica', 19);
// let maria = mahasiswa('maria', 10);

// contruktor function => tanpa let dan return
// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, enjoy your game`);
//   };
// }
// // tapi harus ada new
// let sandika = new mahasiswa('sandhika', 10);

// object.create() mirip seperti object funtion
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, enjoy your game`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, enjoy your game`);
  },
};
function mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  return mahasiswa;
}

let jessi = mahasiswa('jessica', 19);
let maria = mahasiswa('maria', 10);
