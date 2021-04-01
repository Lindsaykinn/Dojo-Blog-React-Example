import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  
  const [name, setName] = useState('mario')
  const [isPending, setIsPending] = useState(true)


  //will run anytime there is a re-render
  useEffect(() => {
    console.log('use effect ran')
    // console.log(blogs)
    fetch('http://localhost:8000/blogs')
      .then(resp => {
        return resp.json()
      })
      .then((data) => {
        setBlogs(data)
        setIsPending(false)
      })
  }, [])
  
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
       { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
      {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs"/>}
    </div>
   );
}
 
export default Home;