import { useState } from 'react'

// images
import Image1 from '../../assets/images/one.jpg'
import Image2 from '../../assets/images/two.jpg'
import Image3 from '../../assets/images/three.jpg'
import Image4 from '../../assets/images/four.jpg'
import Image5 from '../../assets/images/five.jpg'
import Image6 from '../../assets/images/six.jpg'
import Image7 from '../../assets/images/seven.jpg'
import Image8 from '../../assets/images/eight.jpg'
import Image9 from '../../assets/images/nine.jpg'
import Image10 from '../../assets/images/ten.jpg'

// styles
import './Dog.css';

export default function Dog() {
  const dogImages = [
    {id: 1, img: Image1, comment: 'The entered number is a negative number'},
    {id: 2, img: Image2, comment: 'The entered number is a prime number'},
    {id: 3, img: Image3, comment: 'The entered number is a prime number'},
    {id: 4, img: Image4, comment: 'The entered number is a prime number'},
    {id: 5, img: Image5, comment: 'The entered number is a divisible by 5'},
    {id: 6, img: Image6, comment: 'The entered number is a divisible by 5'},
    {id: 7, img: Image7, comment: 'The entered number in binary has 4 or more digits and is all 1s!'},
    {id: 8, img: Image8, comment: 'The entered number is a positive number'},
    {id: 9, img: Image9, comment: 'Hi, My name is Munna. Please submit your number !'},
    {id: 10, img: Image10, comment: 'The entered number is greater than 100'}
  ]

  const [choice, setChoice] = useState('')
  const [image, setImage] = useState([dogImages[8]])

  const findImageNumber = (e) => {
    e.preventDefault()
    setImage([])
  }

  return (
    <div className='dogs'>
      <h2 className='page-title'>Dog Image Loader</h2>
      <form onSubmit={findImageNumber}>
        <label>
          <span>Enter your number:</span>
          <input
            type='number'
            required
            onChange={(e) => setChoice(e.target.value)}
            value={choice}
          />
        </label>
        <button>Preview</button>
      </form>

      {image && image.map(filter => (
        <ul key={filter.id}>
          <li>Comment: {filter.comment}</li>
          <li><img src={filter.img} alt="dog-images" /></li>
        </ul>
      ))}
    </div>
  )
}
