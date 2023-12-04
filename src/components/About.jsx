import { Alert, Col, Container, Row } from "react-bootstrap";

export function About(){
    return (
        <Container>
            <Alert variant="primary">
                <h1>About Us</h1>
            </Alert>
            <Row>
                <Col lg={4}>
                    <h3>Mission</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam praesentium corporis magnam temporibus eligendi deleniti itaque hic, repellat tempora illum quam. Necessitatibus quia excepturi blanditiis dolorem velit iusto reiciendis.</p>
                </Col>
                <Col lg={4}>
                    <h3>Vision</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nisi, nesciunt exercitationem assumenda nulla voluptate tempora dolores eum. Inventore similique consectetur quasi porro commodi quam, laboriosam minima quae ipsa quia.</p>
                </Col>
                <Col lg={4}>
                    <h3>Our History</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio quisquam voluptate doloremque. Excepturi porro repellat, error inventore suscipit rem totam vero, unde maiores iusto omnis architecto quae repellendus accusantium.</p>
                </Col>
            </Row>
        </Container>
    );
}