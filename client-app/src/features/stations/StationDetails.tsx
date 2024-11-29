import { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import StationList1 from "./StationList1";
import StationList2 from "./StationList2";
import './StationSidebar.css'

const MetroTabComponent = () => {
  const [key, setKey] = useState<string>("phaseOne");

  return (
    <div>
      <div className="intro-section">
        <img
          src="/assets/metro.jpg" // Replace with your metro image URL
          alt="Metro"
          className="intro-image"
        />
        <div className="quote-overlay">
          <p className="quote-text">
            "The journey of a thousand miles begins with a single step."
          </p>
        </div>
      </div>
      <br />
      <Tab.Container id="phase-tabs" activeKey={key} onSelect={(k: string | null) => setKey(k as string)}>
        <Row>
          <Col sm={12}>
            <Nav variant="pills" className="nav-tabs-attached">
              <Nav.Item>
                <Nav.Link eventKey="phaseOne">Line 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="phaseTwo">Line 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="phaseOne">
                {/* Render Phase I stations */}
                <StationList1 />
              </Tab.Pane>
              <Tab.Pane eventKey="phaseTwo">
                {/* Render Phase II stations */}
                <StationList2 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default MetroTabComponent;