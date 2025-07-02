import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <img src="/beermateX4.png" alt="Beermate logo" style={{ maxWidth: 160, margin: '0 auto 1.5rem', display: 'block' }} />
      <h2>Welcome to Beermate</h2>
      <p className="page-desc">Please select a document to view:</p>
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Use</Link></li>
      </ul>
    </div>
  )
}

export default Home 