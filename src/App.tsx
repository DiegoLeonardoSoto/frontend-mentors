import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SuccessPage from './pages/SuccessPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
