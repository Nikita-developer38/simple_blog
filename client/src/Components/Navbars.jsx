import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
function Navbars() {
  return (
    <div className="d-flex flex-row justify-content-around shadow-lg">
      <div className="d-flex flex-row ">
        <Image
          src="https://logopond.com/logos/caaea19e93eeeafd7c461a32f0af683a.png"
          className=""
          style={{ width: "70px", height: "70px" }}
        />
        <p
          className="fs-5 text-center"
          style={{ alignItems: "center", alignSelf: "end" }}
        >
          Meta<span className="fs-5 fw-bold">Blog</span>
        </p>
      </div>
      <div className="d-flex flex-row justify-content-around text-center align-self-center text-dark">
        <Link
          className="text-dark fs-4 mx-3"
          style={{ textDecoration: "none" }}
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-dark fs-4  mx-3"
          style={{ textDecoration: "none" }}
          to="/addBlog"
        >
          New Blog
        </Link>
      </div>
    </div>
  );
}

export default Navbars;
