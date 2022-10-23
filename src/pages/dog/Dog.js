// styles
import './Dog.css';

export default function Dog() {
  return (
    <div className='dogs'>
      <h2 className='page-title'>Dog Image Loader</h2>
      <form>
        <label>
          <span>Enter your number:</span>
          <input
            type='number'
            required
          />
        </label>
        <button>Preview</button>
      </form>
    </div>
  )
}
