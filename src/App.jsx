
import Appname from './Componet/Appname';
import Selector from './Componet/Selector';
import Singnature from './Componet/Singnature';


import { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [penColor, setpenColor] = useState('black');
  const [penSize, setpenSize] = useState('1');
  const [signature, setSingnature] = useState('');
  const [result, setResult] = useState(null);

  const clearHandler = () => {
    signature.clear();
    setResult(null);
  };

  const saveHandler = () => {
    const res = signature.getTrimmedCanvas().toDataURL('image/jpeg');
    setResult(res);
  };

  return (
    <Container fluid className='fullbody'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={6}>
          <Appname />
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={6}>
          <Selector penColor={penColor} penSize={penSize} setpenColor={setpenColor} setpenSize={setpenSize} />
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={6}>
          <Singnature penColor={penColor} penSize={penSize} saveHandler={saveHandler} clearHandler={clearHandler} result={result} setSingnature={setSingnature} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

