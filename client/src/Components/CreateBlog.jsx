import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [dated, setDated] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  async function Add(e) {
    e.preventDefault();
    await axios.post("http://localhost:4000/addBlog", {
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

  return (
    <div className="w-50 mx-auto border rounded p-4 mt-5">
      <Form onSubmit={Add}>
        <h1 className="text-center">Add Your Blog</h1>
        <h6>Author Name</h6>
        <MDBInput
          id="form4Example1"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type="text"
          wrapperClass="mb-4"
        />
        <h6>Title</h6>
        <MDBInput
          type="text"
          id="form4Example2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          wrapperClass="mb-4"
        />
        <h6>Category</h6>
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

        <h6 className="mt-4">Description</h6>
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
        <h6>Date</h6>
        <MDBInput
          value={dated}
          onChange={(e) => {
            setDated(e.target.value);
          }}
          type="date"
        />
        <h6 className="mt-4">Image URL</h6>

        <MDBInput
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
        />
        <MDBBtn type="submit" className="my-4 mx-auto">
          Add Blog
        </MDBBtn>
      </Form>
    </div>
  );
}

export default CreateBlog;
