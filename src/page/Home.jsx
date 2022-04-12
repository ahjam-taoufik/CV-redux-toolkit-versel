import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1 className='mb-3'>React Redux Toolkit</h1>
      <ul className='list-group'>
        <Link
          className='list-group-item list-group-item-action'
          to='counter'
        >
          Counter Example 1 (Initiation)
        </Link>

       
      </ul>
    </>
  )
}

export default Home
