import './App.css'

import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import PieSimple from 'pages/PieSimple'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pie-simple" />} />
        <Route path="/pie-simple" element={<PieSimple />} />
      </Routes>
    </Router>
  )
}

export default App
