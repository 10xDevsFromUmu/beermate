import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'
import Home from './Home'

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/privacy" style={{ marginRight: '1rem' }}>Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </Router>
  )
}

export default App
