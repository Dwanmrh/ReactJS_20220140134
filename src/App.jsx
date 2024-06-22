import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import gambar from "./assets/DwanMirror.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [submittedName, setSubmittedName] = useState("");
  const [submittedBio, setSubmittedBio] = useState("");
  const [submittedImage, setSubmittedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setSubmittedBio(bio);
    setSubmittedImage(imagePreview);
  };

  return (
    <div id="root">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            IT Member
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#form-section">
                  Form
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Manager */}
      <div className="container main-content mt-5">
        <h1 className="text-center mb-4">IT Manager</h1>
        <div className="card mx-auto mb-4" style={{ width: "18rem" }}>
          <img src={gambar} className="card-img-top img-fluid" alt="gambar" />
          <div className="card-body">
            <h2 className="card-title">Biodata</h2>
            <p className="card-text">
              Halo guys, kenalin nama aku Muhammad Ridwan Hidayatullah. Aku
              mahasiswa aktif dari Universitas Muhammadiyah Yogyakarta, prodi
              Teknologi Informasi, Angkatan 2022.
            </p>
          </div>
        </div>

        <h2 className="text-center mb-4">Input Biodata</h2>
        <div
          id="form-section"
          className="card mx-auto mb-4"
          style={{ width: "18rem" }}
        >
          {imagePreview && (
            <img
              src={imagePreview}
              className="card-img-top img-fluid"
              alt="gambar"
            />
          )}
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Biodata</label>
                <textarea
                  className="form-control"
                  id="bio"
                  rows="3"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="image">Gambar</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="image"
                  onChange={handleImageChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>

        {submittedName && (
          <div className="card mx-auto mb-4" style={{ width: "18rem" }}>
            {submittedImage && (
              <img
                src={submittedImage}
                className="card-img-top img-fluid"
                alt="gambar"
              />
            )}
            <div className="card-body">
              <h2 className="card-title">{submittedName}</h2>
              <p className="card-text">{submittedBio}</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 p-4 text-center py-3">
        <div>
          <a href="https://facebook.com" className="text-white mx-2">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            <FaInstagram />
          </a>
        </div>
        <p className="mt-2 mb-0">
          &copy; 2024 Ridwan Hidayatullah. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
