

const Selector = ({ penColor, penSize, setpenColor, setpenSize }) => {
    return (
        <>
            <div style={{ textAlign: "left" }}>
                <div >
                    <label >Select pen Color :-</label>
                    <select value={penColor} onChange={(e) => setpenColor(e.target.value)} style={{ backgroundColor: `${penColor}`, color: "white", padding: "5px", margin: "0 0 10px 0", borderRadius: "5px" }} >
                        <option style={{ backgroundColor: "black", color: "white" }} value="black">Black</option>
                        <option style={{ backgroundColor: "green", color: "white" }} value="green">Green</option>
                        <option style={{ backgroundColor: "red", color: "white" }} value="red">Red</option>
                    </select >
                </div>
                <div>
                    <label>Select pen size :</label>
                    <select value={penSize} onChange={(e) => setpenSize(e.target.value)} style={{ borderRadius: "5px" }}>
                        <option value="0.5">0.5 </option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Selector
