import { useState } from 'react'

// hooks
// import { useBinary } from '../../hooks/useBinary'
import { usePrime } from '../../hooks/usePrime'
import { useRandom } from '../../hooks/useRandom'
import { useMode } from "../../hooks/useMode"

// styles
import './Dog.css';

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

type DogImagesProps = {
  id: number,
  img: string
}

type DogArrayProps = {
  [key:string]: DogImagesProps
}

export default function Dog({key:string}: DogArrayProps) {
  const { mode } = useMode()

  const dogImages = [
    {id: 1, img: Image1 },
    {id: 2, img: Image2 },
    {id: 3, img: Image3 },
    {id: 4, img: Image4 },
    {id: 5, img: Image5 },
    {id: 6, img: Image6 },
    {id: 7, img: Image7 },
    {id: 8, img: Image8 },
    {id: 9, img: Image9 },
    {id: 10, img: Image10 }
  ]

  const comments = [
    'The entered number is a negative number',
    'The entered number in binary has 4 or more digits and is all 1s!',
    'The entered number is greater than 100',
    'The entered number is a prime number',
    'The entered number is divisible by 5',
    'The entered number is a positive number',
    'Hi, My name is Munna. Select a number and meet my friends..'
  ]

  const [choice, setChoice] = useState(0)
  const [comment, setComment] = useState(comments[6])
  const [image, setImage] = useState([dogImages[8]])

  // const binary = useBinary(choice)
  const prime = usePrime(choice)
  const random = useRandom(2, 4)

  const findImageNumber = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    if (choice < 0) {
      setImage([dogImages[0]])
      setComment(comments[0])
    }
    // else if (binary) {
    //   setImage([dogImages[6]])
    //   setComment(comments[1])
    // }
    else if (choice > 100) {
      setImage([dogImages[9]])
      setComment(comments[2])
    }
    else if (prime) {
      setImage([dogImages[random-1]])
      setComment(comments[3])
    }
    else if (choice % 5 === 0) {
      setImage([dogImages[4], dogImages[5]])
      setComment(comments[4])
    }
    else {
      const staticNumber: string = (process.env.REACT_APP_STATIC_DOG as string)
      setImage([dogImages[parseInt(staticNumber)-1]])
      setComment(comments[5])
    }
  }

  return (
    <div className={`dogs ${mode}`}>
      <h2 className='page-title'>Dog Image Loader</h2>
      <form onSubmit={findImageNumber}>
        <label>
          <span>Enter your number:</span>
          <input
            type='number'
            required
            onChange={(e) => setChoice(parseInt(e.target.value))}
            value={choice}
          />
        </label>
        <button>Preview</button>
      </form>

      {comment && <p>Comment: {comment}</p>}
      {image && image.map(filter => (
        <ul key={filter.id}>
          <li><img src={filter.img} alt="dog-images" /></li>
        </ul>
    ))}
    </div>
  )
}
