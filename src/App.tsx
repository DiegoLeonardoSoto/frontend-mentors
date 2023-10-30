import CardFront from './component/CardFront'
import CardBack from './component/CardBack'
import SuccessMessage from './pages/SuccessMessage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/Form'

// import Form from './pages/Form'

function App() {
  return (
    <div className="flex flex-col font-spaceGrotesk sm:flex-row">
      <div className="relative">
        <img
          className="w-full sm:hidden"
          src="./assets/images/bg-main-mobile.png"
          alt=""
        />

        <img
          className=" hidden sm:block sm:h-screen"
          src="./assets/images/bg-main-desktop.png"
          alt=""
        />

        <CardFront />

        <CardBack />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<SuccessMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
