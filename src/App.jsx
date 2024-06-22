import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import gambar from "./assets/DwanMirror.jpg";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Ridwan Hidayatullah</h1>
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={gambar} className="card-img-top" alt="gambar" />
        <div className="card-body">
          <h2 className="card-title">Biodata</h2>
          <p className="card-text">
            Halo guys, kenalin nama aku Muhammad Ridwan Hidayatullah. Aku
            mahasiswa aktif dari Universitas Muhammadiyah Yogyakarta, prodi
            Teknologi Informasi, Angkatan 2022.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
