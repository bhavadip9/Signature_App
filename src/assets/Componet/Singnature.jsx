
import SignatureCanvas from 'react-signature-canvas'

const Singnature = ({ setSingnature, penColor, penSize, clearHandler, saveHandler, result }) => {
    return (
        <>
            <div style={{ border: `1px solid ${penColor}`, borderRadius: "5px", width: "500px", margin: "20px 0 0 0" }}>
                <SignatureCanvas
                    ref={(ref) => setSingnature(ref)}
                    dotSize={penSize}
                    penColor={penColor}
                    backgroundColor="rgba(255,255,255,1)"
                    canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
            </div>

            <button onClick={clearHandler}>Clear</button>
            <button onClick={saveHandler}>Save</button>
            {
                result && (<div>
                    <img src={result} />
                    <button> <a href={result} download="Singnature">Download</a></button>
                </div>)
            }
        </>
    )
}

export default Singnature
