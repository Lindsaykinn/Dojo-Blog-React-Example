import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'content 1', author: 'mario', id:1 },
    {title: 'Welcome party', body: 'content 2', author: 'yoshi', id:2 },
    {title: 'Web dev top tips', body: 'content 3', author: 'mario', id:3 }
  ])
  
  const [name, setName] = useState('mario')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  //will run anytime there is a re-render
  useEffect(() => {
    console.log('use effect ran')
    // console.log(blogs)
  }, [name])
  
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
      <h2>Home Page</h2>
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
      <button onClick={(e)=> handleClickAgain('mario', e)}>Click me again</button>
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs"/>
    </div>
   );
}
 
export default Home;