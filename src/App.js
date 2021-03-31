import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50
  const link = "http://www.google.com"
  // const person = { name: 'lindsay', age: 30 }
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
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
  );
}

export default App;
