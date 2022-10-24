import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>facts about PETS</li>
        <li><Link to='/fact'>Cats</Link></li>
        <li><Link to='/dog'>Dogs</Link></li>
      </ul>
    </nav>
  )
}
