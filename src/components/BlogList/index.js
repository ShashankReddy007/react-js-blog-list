import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  const {id, title, description, publishedDate} = blogsList

  return (
    <ul className="list-container">
      {blogsList.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default BlogList
