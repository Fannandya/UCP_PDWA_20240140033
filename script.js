let daftarAnggota = JSON.parse(localStorage.getItem("daftarAnggota")) || [
  {
    nama: "fannandya sutan sakti pratama",
    email: "fannandya.sutan.ft24@mail.umy.ac.id",
    minat: "Web Development",
  },
  { nama: "ridha hawimau", email: "hawimau@gmail.com", minat: "Desain UI/UX" },
    { nama: "Dhika merak", email: "merak@gmail.com", minat: "Data Science" }
];

function tampilkanTabelAnggota() {
  let tbody = document.getElementById("memberTableBody");
  if (tbody) {
    tbody.innerHTML = "";
    daftarAnggota.forEach((anggota, i) => {
      tbody.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${anggota.nama}</td>
                    <td>${anggota.email}</td>
                    <td>${anggota.minat}</td>
                </tr>
            `;
    });
  }
}

tampilkanTabelAnggota();

function simpanData(event) {
  event.preventDefault();

  let inputNama = document.getElementById("inputNama").value;
  let inputEmail = document.getElementById("inputEmail").value;
  let inputMinat = document.getElementById("inputMinat").value;

  let dataBaru = {
    nama: inputNama,
    email: inputEmail,
    minat: inputMinat,
  };

  daftarAnggota.push(dataBaru);
  localStorage.setItem("daftarAnggota", JSON.stringify(daftarAnggota));

  alert("Berhasil Mendaftar!\nNama: " + inputNama);

  document.getElementById("tampilNama").innerText = inputNama;
  document.getElementById("tampilEmail").innerText = inputEmail;
  document.getElementById("tampilMinat").innerText = inputMinat;
  document.getElementById("hasilForm").style.display = "block";

  return false;
}

function tampilInfoGambar() {
  alert("Ini adalah gambar kegiatan belajar anggota Tech Community.");
}

function putarAudio() {
  let audio = document.getElementById("audioLatar");
  if (audio) audio.play();
}

function pauseAudio() {
  let audio = document.getElementById("audioLatar");
  if (audio) audio.pause();
}
