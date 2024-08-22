import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PaginaPadrao } from './PaginaPadrao'
import { Home } from './Pages/Home'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
