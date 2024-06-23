


import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'react-bootstrap';

const Singnature = ({ setSingnature, penColor, penSize, clearHandler, saveHandler, result }) => {


    return (
        <div style={{ textAlign: 'center', margin: '10px' }}>
            <div style={{ border: `2px solid ${penColor}`, borderRadius: '5px', width: '100%', maxWidth: '500px', margin: '20px auto' }}>
                <SignatureCanvas
                    ref={(ref) => setSingnature(ref)}
                    dotSize={penSize}
                    penColor={penColor}
                    backgroundColor='rgba(255,255,255,1)'
                    canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                />
            </div>

            <Button variant='primary' onClick={clearHandler} className='m-2'>Clear</Button>
            <Button variant='success' onClick={saveHandler} className='m-2'>Save</Button>



            {result && (
                <div>
                    <img src={result} alt='Signature Result' />
                    <Button variant='info' className='m-2'>
                        <a href={result} download='Signature' style={{ color: 'white', textDecoration: 'none' }}>Download</a>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Singnature;
