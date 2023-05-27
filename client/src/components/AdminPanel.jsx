import { useLocation } from "react-router-dom";
import Logout from "./Logout";
import Sidebar from "./sidebar/Sidebar";
import { Col, Row, Container } from "react-bootstrap";
import "./main.css";
import Groupcards from "./GroupCards/GroupCards";

const AdminPanel = () => {
  const localtion = useLocation();
  return (
    <>
      <Container fluid className="main">
        <Row style={{ display: "flex" }}>
          <Col md={3} sm={3} lg={3}>
            <Sidebar />
          </Col>
          <Col md={9} sm={9} lg={9}>
            <Groupcards />
            <Logout />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPanel;
