import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="card">
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