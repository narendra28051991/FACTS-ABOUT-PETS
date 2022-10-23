// routes
import { Link } from 'react-router-dom';

// hooks
import { useFetch } from '../../hooks/useFetch';

// styles
import './Cat.css';

export default function Cat() {
  const url = 'https://catfact.ninja/fact'
  const { data, isPending, error } = useFetch(url)

  return (
    <div className='fact-list'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && (
        <div className='fact'>
          <h2>Cat Fact of the day</h2>
          <h3>{data.fact}</h3>
          <p>Word length: {data.length}</p>
          <div><Link to='/cat'>New Fact</Link></div>
        </div>
      )}  
    </div>
  )
}
