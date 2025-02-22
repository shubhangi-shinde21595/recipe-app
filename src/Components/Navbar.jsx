import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand" href="/">
              Recipe App
            </a>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={`/category/indian`} className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Indian
                </a>
              </Link>
              <Link to={`/category/american`} className="nav-item">
                <a className="nav-link" href="/">
                  American
                </a>
              </Link>
              <Link to={`/category/italian`} className="nav-item">
                <a className="nav-link" href="/">
                  Italian
                </a>
              </Link>
              <Link to={`/category/british`} className="nav-item">
                <a className="nav-link" href="/">
                  British
                </a>
              </Link>
              <Link to={`/category/thai`} className="nav-item">
                <a className="nav-link" href="/">
                  Thai
                </a>
              </Link>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
