
import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'react-bootstrap';

const Signature = ({ setSignature, penColor, penSize, clearHandler, saveHandler, result }) => {
    const sigCanvasRef = useRef(null);

    const handleClear = () => {
        if (sigCanvasRef.current) {
            sigCanvasRef.current.clear();
            clearHandler();
        }
    };

    const handleSave = () => {
        if (sigCanvasRef.current) {
            const dataUrl = sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png');
            saveHandler(dataUrl);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '10px' }}>
            <div style={{ border: `2px solid ${penColor}`, borderRadius: '5px', maxWidth: '500px', margin: '20px auto' }}>
                <SignatureCanvas
                    ref={sigCanvasRef}
                    penColor={penColor}
                    canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                />
            </div>

            <Button variant='primary' onClick={handleClear} className='m-2'>Clear</Button>
            <Button variant='success' onClick={handleSave} className='m-2'>Save</Button>

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

export default Signature;
