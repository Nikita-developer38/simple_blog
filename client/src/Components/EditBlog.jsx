import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditBlog() {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [dated, setDated] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  async function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:4000/updateBlog/${id}`, {
      title: title,
      descriptions: descriptions,
      dated: dated,
      image: image,
      author: author,
      category: category,
    });
    setTitle("");
    setAuthor("");
    setCategory("");
    setDated("");
    setDescriptions("");
    setImage("");
    navigate("/");
  }

  async function SpecificData() {
    const result = await axios.get(`http://localhost:4000/${id}`);

    setTitle(result.data.message[0].title || "");
    setAuthor(result.data.message[0].author || "");
    setCategory(result.data.message[0].category || "");

    setDescriptions(result.data.message[0].descriptions || "");
    setImage(result.data.message[0].image || "");
  }
  useEffect(() => {
    SpecificData();
  }, []);

  return (
    <div className="w-50 mx-auto border rounded mt-5 p-4">
      <Form onSubmit={Update}>
        <h1 className="text-center">Edit Your Blog</h1>
        <h6>Edit Author Name</h6>
        <MDBInput
          id="form4Example1"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type="text"
          wrapperClass="mb-4"
        />
        <h6>Edit Title</h6>
        <MDBInput
          type="text"
          id="form4Example2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          wrapperClass="mb-4"
        />
        <h6>Edit Category</h6>
        <Form.Select
          aria-label="Default select example"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option>select</option>
          <option value="love">Love</option>
          <option value="technology">Technology</option>
          <option value="fashion">Fashion</option>
        </Form.Select>

        <h6 className="mt-4">Edit Description</h6>
        <MDBTextArea
          wrapperClass="mb-4"
          value={descriptions}
          onChange={(e) => {
            setDescriptions(e.target.value);
          }}
          textarea
          id="form4Example3"
          rows={4}
        />
        <h6>Edit Date</h6>
        <MDBInput
          value={dated}
          onChange={(e) => {
            setDated(e.target.value);
          }}
          type="date"
        />
        <h6 className="mt-4">Edit Image URL</h6>

        <MDBInput
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
        />
        <MDBBtn type="submit" className="my-4" block>
          Update Blog
        </MDBBtn>
      </Form>
    </div>
  );
}
