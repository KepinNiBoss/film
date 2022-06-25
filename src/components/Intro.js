import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="Intro">
      <Container className="text-white d-flex justify-content-center align-item-center text-center">
        <Row>
          <Col>
            <div className="title1">NONTON GRATIS</div>
            <div className="title2">TANPA KARCIS</div>
            <div className="IntroButton  text-center justify-content-center align-item-center">
              <Button variant="dark">Lihat Daftar List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
