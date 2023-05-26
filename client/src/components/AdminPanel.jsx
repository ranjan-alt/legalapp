import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Logout from "./Logout";
import Sidebar from "./sidebar/Sidebar";
import { Col, Row, Container } from "react-bootstrap";
import "./main.css";

const AdminPanel = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const localtion = useLocation();

  const handletextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //created payload object
    const payload = {
      text,
      image,
    };
    //make post request to server

    try {
      const response = await axios.post("/file", payload);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="main">
        <Row style={{ display: "flex" }}>
          <Col md={3} sm={3} lg={3}>
            <Sidebar />
          </Col>
          <Col md={9} sm={9} lg={9}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Text</label>
                <input type="text" onChange={handletextChange} />
              </div>
              <div>
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <Logout />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPanel;
