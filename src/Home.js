import { useState  } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
  const [name, setName] = useState('mario')

  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')


  //will run anytime there is a re-render
  
  
  // let name = 'mario'

  // const [age, setAge] = useState(25)

  // const handleClick = () => {
  //   setName('luigi')
  //   setAge(30)
  // }

  const handleClickAgain = (name, e) => {
    console.log ('hello ' + name, e.target)
  }
  return ( 
    <div className="home">
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
      <button onClick={(e)=> handleClickAgain('mario', e)}>Click me again</button>

      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
      {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs"/>}
    </div>
   );
}
 
export default Home;