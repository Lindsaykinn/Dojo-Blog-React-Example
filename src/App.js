import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50
  const link = "http://www.google.com"
  // const person = { name: 'lindsay', age: 30 }
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>
        <h1>App Component</h1>
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        {/* <p>{ person }</p> */}
        <p>{ 'you can also type out strings and they will work' }</p>
        <p>{['arrays', 'work', 'with', 'output'].join (' ')}</p>
        <p><b>This number is chosen at random using Math.random function so JS functionality can also be used for output:</b> { Math.floor(Math.random() * 12) }</p>
        <a href={ link }>Google Site</a>
      </div>
    </div>
    </Router>
  );
}

export default App;
