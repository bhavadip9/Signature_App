import { Form, Row, Col } from 'react-bootstrap';

const Selector = ({ penColor, penSize, setpenColor, setpenSize, imageType, setImageType }) => {
    return (

        <div className="my-4 px-3">
            <Form>
                <Row className="gy-3 gx-4">
                    <Col xs={12} md={4}>
                        <Form.Group controlId="penColor">
                            <Form.Label className="fw-semibold">Pen Color</Form.Label>
                            <Form.Select
                                value={penColor}
                                onChange={(e) => setpenColor(e.target.value)}
                                style={{
                                    backgroundColor: penColor,
                                    color: penColor === 'black' ? 'white' : 'black',
                                }}
                            >
                                <option value="black" style={{ backgroundColor: 'black', color: 'white' }}>Black</option>
                                <option value="green" style={{ backgroundColor: 'green' }}>Green</option>
                                <option value="red" style={{ backgroundColor: 'red' }}>Red</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={4}>
                        <Form.Group controlId="penSize">
                            <Form.Label className="fw-semibold">Pen Size</Form.Label>
                            <Form.Select
                                value={penSize}
                                onChange={(e) => setpenSize(e.target.value)}
                            >
                                <option value="0.5">0.5</option>
                                <option value="1">1</option>
                                <option value="1.5">1.5</option>
                                <option value="2">2</option>
                                <option value="2.5">2.5</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={4}>
                        <Form.Group controlId="imageType">
                            <Form.Label className="fw-semibold">Download Format</Form.Label>
                            <Form.Select
                                value={imageType}
                                onChange={(e) => setImageType(e.target.value)}
                            >
                                <option value="jpeg">JPEG</option>
                                <option value="png">PNG</option>
                                <option value="webp">WEBP</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>

    );
};

export default Selector;
