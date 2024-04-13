
import { useState } from 'react'
import Appname from './assets/Componet/Appname';
import Selector from './assets/Componet/Selector';
import Singnature from './assets/Componet/Singnature';



function App() {
  const [penColor, setpenColor] = useState("black")
  const [penSize, setpenSize] = useState("1");
  const [signature, setSingnature] = useState("")
  const [result, setResult] = useState(null)
  const clearHandler = () => {
    signature.clear()
    setResult(null)
  }
  const saveHandler = () => {
    const res = signature.getTrimmedCanvas().toDataURL("image/jpeg");
    setResult(res)
  }



  return (
    <>
      <Appname />
      <Selector penColor={penColor} penSize={penSize} setpenColor={setpenColor} setpenSize={setpenSize} />
      <Singnature penColor={penColor} penSize={penSize} saveHandler={saveHandler} clearHandler={clearHandler} result={result} setSingnature={setSingnature} />

    </>
  )
}

export default App
