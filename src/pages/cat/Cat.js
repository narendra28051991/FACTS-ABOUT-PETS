// routes
import { Link } from 'react-router-dom';

// styles
import './Cat.css';

export default function Cat() {
  return (
    <div className='fact-list'>
      <div className='fact'>
        <h2>Cat Fact of the day</h2>
        <h3>Fact</h3>
        <p>Word length: </p>
        <div><Link to='/cat'></Link></div>
      </div>
    </div>
  )
}
