import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'react-bootstrap';

const Singnature = ({ setSingnature, penColor, penSize, clearHandler, saveHandler, result, imageType }) => {
    return (
        <div className="text-center my-3 px-2">
            <div
                className="mx-auto mb-3"
                style={{
                    border: `2px solid ${penColor}`,
                    borderRadius: '5px',
                    width: '100%',
                    maxWidth: '100%',
                }}
            >
                <SignatureCanvas
                    ref={(ref) => setSingnature(ref)}
                    dotSize={parseFloat(penSize)}
                    penColor={penColor}
                    backgroundColor="rgba(255,255,255,1)"
                    canvasProps={{
                        className: 'sigCanvas',
                        style: {
                            width: '100%',
                            height: '200px',
                        },
                    }}
                />
            </div>

            <div className="d-flex flex-wrap justify-content-center mb-3">
                <Button variant="primary" onClick={clearHandler} className="m-2">
                    Clear
                </Button>
                <Button variant="primary" onClick={saveHandler} className="m-2">
                    Save
                </Button>
            </div>

            {result && (
                <div>
                    <img
                        src={result}
                        alt="Signature"
                        className="img-fluid mb-3"
                        style={{ maxWidth: '500px', width: '100%' }}
                    />
                    <div>

                        <Button variant='info' className='m-2'>
                            <a
                                href={result}
                                download={`Signature.${imageType}`}
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                Download
                            </a>
                        </Button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Singnature;
