import Effect from './pages/Effect';
import State from './pages/State';
import Home from './pages/Home';
import Memo from './pages/Memo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Ref from './pages/Ref';
import Reduce from './pages/Reduce';
import Callback from './pages/Callback';


function App() {

  return (
    <div className='px-16 py-10'>

      <Router>
        <div>
          <div className='flex flex-row gap-5'>
            <Link to="/"><button className='btn'>home</button></Link>
            <Link to="/state"><button className='btn'>state</button></Link>
            <Link to="/effect"><button className='btn'>effect</button></Link>
            <Link to="/memo"><button className='btn'>memo</button></Link>
            <Link to="/ref"><button className='btn'>ref</button></Link>
            <Link to="/reduce"><button className='btn'>reduce</button></Link>
            <Link to="/callback"><button className='btn'>callback</button></Link>

            {/* memo returns return-reference. 
            callback return function */}

            {/* useTransition/useDeferredValue - increase speed of application/prevent sluggish applications */}

            {/* <Link to="/context"><button className='btn'>context</button></Link> */}

          </div>
          <br />
          <br />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/state' element={<State />} />
            <Route path='/effect' element={<Effect />} />
            <Route path='/memo' element={<Memo />} />
            <Route path='/ref' element={<Ref />} />
            <Route path='/reduce' element={<Reduce />} />
            <Route path='/callback' element={<Callback />} />


            {/* <Route path='/context' element={<Context />} /> */}
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
