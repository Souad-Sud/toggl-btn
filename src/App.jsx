import { useState } from 'react';
import Text from './components/Text';
import './toggl.css'
 
 

function App() {

  const [toggl, setToggl] = useState(false);
  
  return (
    <div className='toggl_container'>

    <button onClick={() => setToggl(!toggl)}>
      Toggl me
    </button>
    {toggl && <Text />}
       
    </div>
  )
}

export default App
