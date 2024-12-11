import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import {
  MDBBtn,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

function DetailBlog({ toggleOpen, id }) {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [dated, setDated] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  async function SpecificData() {
    const result = await axios.get(`http://localhost:4000/${id}`);

    setTitle(result.data.message[0].title || "");
    setAuthor(result.data.message[0].author || "");
    setCategory(result.data.message[0].category || "");
    setDated(result.data.message[0].dated || "");
    setDescriptions(result.data.message[0].descriptions || "");
    setImage(result.data.message[0].image || "");
  }
  useEffect(() => {
    SpecificData();
  }, []);

  return (
    <div>
      <MDBModalHeader>
        <MDBModalTitle>{title}</MDBModalTitle>
        <MDBBtn
          className="btn-close"
          color="none"
          onClick={() => {
            toggleOpen(id);
          }}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody className="mx-5">
        <Image
          src={image}
          className="mx-auto text-center d-flex flex-row justify-content-center"
          style={{ width: "665px", height: "400px" }}
        />
        <p className="fw-bold my-2">{title}</p>
        <p>{descriptions}</p>

        <div className="d-flex flex-row justify-content-between">
          <p>
            <span className="fw-bold">Author Name - </span>
            {author}
          </p>
          <p>
            <span className="fw-bold">Dated By - </span>
            {dated.slice(0, 10)}
          </p>
        </div>
      </MDBModalBody>
    </div>
  );
}

export default DetailBlog;
