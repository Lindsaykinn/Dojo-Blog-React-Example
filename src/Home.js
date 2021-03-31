import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'content 1', author: 'mario', id:1 },
    {title: 'Welcome party', body: 'content 2', author: 'yoshi', id:2 },
    {title: 'Web dev top tips', body: 'content 3', author: 'mario', id:3 }
  ])
  
  const [name, setName] = useState('mario')
  // let name = 'mario'

  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('luigi')
    setAge(30)
  }

  const handleClickAgain = (name, e) => {
    console.log ('hello ' + name, e.target)
  }
  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <p>{ name } is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e)=> handleClickAgain('mario', e)}>Click me again</button>
      <BlogList blogs={blogs} title='All Blogs'/>
      <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs"/>
    </div>
   );
}
 
export default Home;