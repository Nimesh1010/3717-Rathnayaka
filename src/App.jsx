import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TopBar from './components/navbar/TopBar'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
import AllJobs from './components/pages/AllJobs'
import Login from './components/pages/Login'
import Recruiters from './components/pages/Recruiters'

function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alljobs' element={<AllJobs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/recruiters' element={<Recruiters/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
