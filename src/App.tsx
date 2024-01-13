import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageHome from './pages/PageHome';
import Page404 from './pages/Page404';
import Socials from './components/Socials';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Socials/>
      </BrowserRouter>
    </>
  )
}

export default App
