import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import Poster from "../Image/poster.png";
import { MDBModal, MDBModalDialog, MDBModalContent } from "mdb-react-ui-kit";
import DetailBlog from "./DetailBlog";

function Home() {
  const [state, setState] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = (id) => {
    setOptSmModal(!optSmModal);
    setSelectedId(id);
  };

  const navigate = useNavigate();

  async function Get() {
    const result = await axios.get("http://localhost:4000");
    console.log(result);
    setState(result.data);
  }
  useEffect(() => {
    Get();
  }, []);

  async function Deleted(id) {
    axios.delete(`http://localhost:4000/deleteBlog/${id}`).then(() => {
      Get();
    });
  }
  return (
    <div>
      <Image
        className="mx-auto text-center align-items-center d-flex justify-content-center my-5"
        src={Poster}
      />
      <div className="d-flex mx-5 flex-row   flex-wrap mx-3">
        {state.map((item) => {
          return (
            <div
              key={item.id}
              className="d-flex flex-column border mx-2 my-2 rounded shadow p-3 "
              style={{ width: "292px", height: "388px" }}
            >
              <Image
                onClick={() => {
                  toggleOpen(item.id);
                }}
                alt={item.category}
                style={{ width: "258px", height: "160px" }}
                className=" "
                src={item.image}
              />
              <div
                className="text-primary text-center border rounded-pill mt-2"
                style={{ width: "100px" }}
              >
                {item.category}
              </div>
              <h4 className="mt-1 fw-bold">
                {item.title.slice(0, 30) + "..."}
              </h4>
              <div className="d-flex flex-row justify-content-between my-2">
                <h6>{item.author}</h6>
                <div>{item.dated.slice(0, 10)}</div>
              </div>
              <section className="d-flex flex-row justify-content-between">
                <Button
                  onClick={() => {
                    navigate(`/editBlog/${item.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    Deleted(item.id);
                  }}
                >
                  Delete
                </Button>
              </section>
            </div>
          );
        })}
      </div>

      <MDBModal
        open={optSmModal}
        tabIndex="-1"
        onClose={() => setOptSmModal(false)}
      >
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <DetailBlog toggleOpen={toggleOpen} id={selectedId} />
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default Home;
