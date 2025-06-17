import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import Jobs from './components/Jobs'
import Login from './components/login'
function App() {
  

  return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>        
      </BrowserRouter>
    </div>
  )
}

export default App