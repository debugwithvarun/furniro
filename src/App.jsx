import { Route,Routes } from "react-router-dom"
import Home from "./page/Home"

const App = () => {
  const creamcolor="#FFF3E3";
  const creamcombo="#B88E2F";
  const lightcream="#FCF8F3";
  const discountcolor="#E97171";
  const newcolor="#2EC1AC";
  const darktext="#333333";
  const lighttext="#666666";
  const cardcolor="#F4F5F7"
  const hovercolor="#3A3A3A"
  return (
    <Routes>
      <Route path="/" element={<Home creamcolor={creamcolor} creamcombo={creamcombo} lightcream={lightcream} discountcolor={discountcolor} newcolor={newcolor} darktext={darktext} lighttext={lighttext} cardcolor={cardcolor} hovercolor={hovercolor} />}/>
    </Routes>
  )
}

export default App