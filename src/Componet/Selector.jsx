
import { Form } from 'react-bootstrap';

const Selector = ({ penColor, penSize, setpenColor, setpenSize }) => {
    return (
        <div style={{ textAlign: 'left', margin: '10px' }}>
            <Form>
                <Form.Group controlId='penColor'>
                    <Form.Label>Select pen Color:</Form.Label>
                    <Form.Control as='select' value={penColor} onChange={(e) => setpenColor(e.target.value)} style={{ backgroundColor: `${penColor}`, color: 'white' }}>
                        <option style={{ backgroundColor: 'black', color: 'white' }} value='black'>Black</option>
                        <option style={{ backgroundColor: 'green', color: 'white' }} value='green'>Green</option>
                        <option style={{ backgroundColor: 'red', color: 'white' }} value='red'>Red</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='penSize'>
                    <Form.Label>Select pen size:</Form.Label>
                    <Form.Control as='select' value={penSize} onChange={(e) => setpenSize(e.target.value)}>
                        <option value='0.5'>0.5</option>
                        <option value='1'>1</option>
                        <option value='1.5'>1.5</option>
                        <option value='2'>2</option>
                        <option value='2.5'>2.5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Selector;
