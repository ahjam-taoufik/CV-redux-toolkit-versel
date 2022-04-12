import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from './features/counter/Counter';
import AddPost from './page/addPosts/AddPost';
import Home from './page/Home';


function App() {
  return (
    <Router>
      <div className='container mt-5'> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/posts' element={<AddPost />} />
       
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
