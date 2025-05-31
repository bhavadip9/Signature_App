
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
  const [imageType, setImageType] = useState('jpeg');


  const clearHandler = () => {
    signature.clear();
    setResult(null);
  };

  // const saveHandler = () => {
  //   const res = signature.getTrimmedCanvas().toDataURL('image/jpeg');
  //   setResult(res);
  // };

  const saveHandler = () => {
    const mimeType = `image/${imageType}`;
    const res = signature.getTrimmedCanvas().toDataURL(mimeType);
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
          {/* <Selector penColor={penColor} penSize={penSize} setpenColor={setpenColor} setpenSize={setpenSize} /> */}
          <Selector
            penColor={penColor}
            penSize={penSize}
            setpenColor={setpenColor}
            setpenSize={setpenSize}
            imageType={imageType}
            setImageType={setImageType}
          />



        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={6}>
          {/* <Singnature penColor={penColor} penSize={penSize} saveHandler={saveHandler} clearHandler={clearHandler} result={result} setSingnature={setSingnature} /> */}
          <Singnature
            penColor={penColor}
            penSize={penSize}
            clearHandler={clearHandler}
            saveHandler={saveHandler}
            result={result}
            setSingnature={setSingnature}
            imageType={imageType}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

